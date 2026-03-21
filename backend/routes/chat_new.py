from functools import lru_cache
from urllib.parse import urlparse

import requests
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
import json
from pathlib import Path
from typing import Any

from services.openrouter import ask_ai

router = APIRouter()

DATA_FILE = Path(__file__).resolve().parents[1] / "data.json"


def load_resume_data() -> dict[str, Any]:
    with DATA_FILE.open(encoding="utf-8") as f:
        return json.load(f)

class ChatRequest(BaseModel):
    question: str
    history: list[dict[str, Any]] = Field(default_factory=list)


def _to_text(value: Any) -> str:
    if isinstance(value, str):
        return value.strip()
    if isinstance(value, (int, float, bool)):
        return str(value)
    return ""


def _extract_facts(node: Any, prefix: str = "") -> list[dict[str, str]]:
    facts: list[dict[str, str]] = []
    if isinstance(node, dict):
        for key, value in node.items():
            key_prefix = f"{prefix}.{key}" if prefix else key
            facts.extend(_extract_facts(value, key_prefix))
        return facts

    if isinstance(node, list):
        for idx, item in enumerate(node):
            list_prefix = f"{prefix}[{idx}]" if prefix else f"[{idx}]"
            facts.extend(_extract_facts(item, list_prefix))
        return facts

    text = _to_text(node)
    if text:
        facts.append({"path": prefix or "root", "value": text})
    return facts


def _score_fact(query_tokens: set[str], fact: dict[str, str]) -> int:
    value = fact["value"].lower()
    path = fact["path"].lower()
    score = 0
    for token in query_tokens:
        if token in value:
            score += 3
        if token in path:
            score += 2
    return score


def _query_tokens(question: str) -> set[str]:
    cleaned = "".join(ch.lower() if ch.isalnum() else " " for ch in question)
    tokens = {token for token in cleaned.split() if len(token) > 2}
    return tokens


def _detect_intents(question: str) -> list[str]:
    q = question.lower()
    intents = []
    patterns = {
        "contact": ["contact", "email", "phone", "reach", "linkedin", "github"],
        "resume": ["resume", "cv", "profile", "about", "background", "introduce"],
        "projects": ["project", "build", "portfolio", "work", "repo"],
        "skills": ["skill", "stack", "technology", "tech"],
        "hackathons": ["hackathon", "achievement", "award", "competition", "participating"],
        "hire_fit": ["hire", "fit", "choose", "why you", "why him"],
    }
    for intent, keys in patterns.items():
        if any(key in q for key in keys):
            intents.append(intent)
    return intents or ["general"]


def _extract_entities(question: str, resume_data: dict[str, Any]) -> list[str]:
    q = question.lower()
    entities: list[str] = []

    projects = resume_data.get("featured_projects", [])
    if isinstance(projects, list):
        for project in projects:
            if not isinstance(project, dict):
                continue
            title = _to_text(project.get("title"))
            if title and title.lower() in q:
                entities.append(title)
            tags = project.get("tags", project.get("technologies", []))
            if isinstance(tags, list):
                for tag in tags:
                    tag_text = _to_text(tag)
                    if tag_text and tag_text.lower() in q:
                        entities.append(tag_text)

    return list(dict.fromkeys(entities))[:8]


def _github_username_from_url(url: str | None) -> str | None:
    if not url:
        return None
    parsed = urlparse(url)
    if "github.com" not in parsed.netloc.lower():
        return None
    path = parsed.path.strip("/")
    if not path:
        return None
    return path.split("/")[0]


@lru_cache(maxsize=8)
def _fetch_github_snapshot(username: str) -> dict[str, Any]:
    try:
        profile_resp = requests.get(
            f"https://api.github.com/users/{username}",
            headers={"Accept": "application/vnd.github+json"},
            timeout=8,
        )
        repos_resp = requests.get(
            f"https://api.github.com/users/{username}/repos?per_page=6&sort=updated",
            headers={"Accept": "application/vnd.github+json"},
            timeout=8,
        )
    except requests.RequestException:
        return {}

    if not profile_resp.ok:
        return {}

    profile_data = profile_resp.json() if profile_resp.headers.get("content-type", "").startswith("application/json") else {}
    repos_data = repos_resp.json() if repos_resp.ok and repos_resp.headers.get("content-type", "").startswith("application/json") else []

    repo_names = []
    for repo in repos_data[:5] if isinstance(repos_data, list) else []:
        repo_name = _to_text(repo.get("name"))
        if repo_name:
            repo_names.append(repo_name)

    return {
        "name": _to_text(profile_data.get("name")),
        "public_repos": _to_text(profile_data.get("public_repos")),
        "followers": _to_text(profile_data.get("followers")),
        "bio": _to_text(profile_data.get("bio")),
        "recent_repos": repo_names,
    }


def _retrieve_context(resume_data: dict[str, Any], intents: list[str], entities: list[str], tokens: set[str]) -> dict[str, Any]:
    personal = resume_data.get("personal", {}) if isinstance(resume_data.get("personal"), dict) else {}
    education = resume_data.get("education", {}) if isinstance(resume_data.get("education"), dict) else {}
    skills = resume_data.get("skills", {}) if isinstance(resume_data.get("skills"), dict) else {}
    projects = resume_data.get("featured_projects", []) if isinstance(resume_data.get("featured_projects"), list) else []
    hackathons = resume_data.get("hackathons", []) if isinstance(resume_data.get("hackathons"), list) else []

    matched_projects: list[dict[str, Any]] = []
    for project in projects:
        if not isinstance(project, dict):
            continue
        title = _to_text(project.get("title")).lower()
        tags = project.get("tags", project.get("technologies", []))
        tags_text = [str(tag).lower() for tag in tags] if isinstance(tags, list) else []
        if any(entity.lower() in title for entity in entities) or any(token in title for token in tokens):
            matched_projects.append(project)
            continue
        if any(token in tag for token in tokens for tag in tags_text):
            matched_projects.append(project)

    if not matched_projects and projects:
        matched_projects = [project for project in projects[:5] if isinstance(project, dict)]

    matched_hackathons: list[dict[str, Any]] = []
    for hackathon in hackathons:
        if not isinstance(hackathon, dict):
            continue
        haystack = " ".join(
            [
                _to_text(hackathon.get("title") or hackathon.get("name")),
                _to_text(hackathon.get("project")),
                _to_text(hackathon.get("status")),
            ]
        ).lower()
        if any(token in haystack for token in tokens):
            matched_hackathons.append(hackathon)

    if not matched_hackathons and hackathons:
        matched_hackathons = [hackathon for hackathon in hackathons[:12] if isinstance(hackathon, dict)]

    matched_skills: dict[str, list[str]] = {}
    for section, values in skills.items():
        if not isinstance(values, list):
            continue
        values_text = [_to_text(value) for value in values if _to_text(value)]
        if not values_text:
            continue
        if section.lower().replace("_", " ") in " ".join(tokens) or any(value.lower() in " ".join(tokens) for value in values_text):
            matched_skills[section] = values_text[:10]

    if not matched_skills:
        for key in ["frontend", "backend", "ai_ml", "blockchain"]:
            values = skills.get(key)
            if isinstance(values, list):
                matched_skills[key] = [_to_text(value) for value in values if _to_text(value)][:8]

    github_snapshot: dict[str, Any] = {}
    github_username = _github_username_from_url(_to_text(personal.get("github")))
    if github_username and ("projects" in intents or "contact" in intents or "general" in intents):
        github_snapshot = _fetch_github_snapshot(github_username)

    return {
        "personal": personal,
        "education": education,
        "professional_summary": _to_text(resume_data.get("professional_summary")),
        "matched_projects": matched_projects[:6],
        "matched_hackathons": matched_hackathons[:12],
        "matched_skills": matched_skills,
        "github_snapshot": github_snapshot,
    }


def _build_context_summary(context: dict[str, Any]) -> str:
    personal = context.get("personal", {}) if isinstance(context.get("personal"), dict) else {}
    education = context.get("education", {}) if isinstance(context.get("education"), dict) else {}
    projects = context.get("matched_projects", []) if isinstance(context.get("matched_projects"), list) else []
    hackathons = context.get("matched_hackathons", []) if isinstance(context.get("matched_hackathons"), list) else []
    skills = context.get("matched_skills", {}) if isinstance(context.get("matched_skills"), dict) else {}
    github_snapshot = context.get("github_snapshot", {}) if isinstance(context.get("github_snapshot"), dict) else {}

    lines = []
    name = _to_text(personal.get("name"))
    role = _to_text(personal.get("role"))
    location = _to_text(personal.get("location"))
    if name or role or location:
        lines.append(f"- Profile: {name} | {role} | {location}".strip(" |"))

    degree = _to_text(education.get("degree"))
    institution = _to_text(education.get("institution"))
    if degree or institution:
        lines.append(f"- Education: {degree} @ {institution}".strip(" @"))

    linkedin = _to_text(personal.get("linkedin"))
    github = _to_text(personal.get("github"))
    email = _to_text(personal.get("email"))
    if linkedin or github or email:
        lines.append(f"- Links: LinkedIn={linkedin} | GitHub={github} | Email={email}".strip(" |"))

    if projects:
        project_titles = [_to_text(project.get("title")) for project in projects if isinstance(project, dict)]
        project_titles = [title for title in project_titles if title][:4]
        if project_titles:
            lines.append(f"- Relevant Projects: {', '.join(project_titles)}")

    if hackathons:
        hackathon_titles = [_to_text(h.get("title") or h.get("name")) for h in hackathons if isinstance(h, dict)]
        hackathon_titles = [title for title in hackathon_titles if title][:6]
        if hackathon_titles:
            lines.append(f"- Relevant Hackathons: {', '.join(hackathon_titles)}")

    if skills:
        skill_chunks = []
        for section, items in list(skills.items())[:3]:
            if isinstance(items, list) and items:
                skill_chunks.append(f"{section.replace('_', ' ').title()}: {', '.join(items[:5])}")
        if skill_chunks:
            lines.append(f"- Skills Match: {' | '.join(skill_chunks)}")

    if github_snapshot:
        snapshot_bits = []
        if _to_text(github_snapshot.get("public_repos")):
            snapshot_bits.append(f"repos={_to_text(github_snapshot.get('public_repos'))}")
        if _to_text(github_snapshot.get("followers")):
            snapshot_bits.append(f"followers={_to_text(github_snapshot.get('followers'))}")
        recent_repos = github_snapshot.get("recent_repos")
        if isinstance(recent_repos, list) and recent_repos:
            snapshot_bits.append(f"recent={', '.join(recent_repos[:3])}")
        if snapshot_bits:
            lines.append(f"- GitHub Snapshot: {' | '.join(snapshot_bits)}")

    return "\n".join(lines) if lines else "- No context data found."


def _generate_hackathon_answer(hackathons: list[dict[str, Any]], question: str) -> str | None:
    """Generate natural answer about hackathons without the 'Here's what I found' prefix"""
    if not hackathons:
        return None
    
    q_lower = question.lower()
    
    # Check if asking about specific count/number of hackathons
    if any(word in q_lower for word in ["how many", "count", "total", "participated"]):
        total = len(hackathons)
        answer = f"Jayanth has participated in {total}+ national-level hackathons with multiple top placements."
        if hackathons:
            titles = [_to_text(h.get("title")) for h in hackathons[:3] if isinstance(h, dict)]
            titles = [t for t in titles if t]
            if titles:
                answer += f"\n\nSome notable ones include: {', '.join(titles)}"
        return answer
    
    # Check if asking about achievements/awards
    if any(word in q_lower for word in ["achievement", "award", "win", "placement", "top", "best"]):
        answer_parts = []
        winners = [h for h in hackathons if isinstance(h, dict) and h.get("type") in ["Winner", "Qualified"]]
        if winners:
            answer_parts.append(f"Jayanth has achieved multiple top placements across {len(hackathons)}+ hackathons:")
            for hack in winners[:4]:
                title = _to_text(hack.get("title"))
                status = _to_text(hack.get("status"))
                if title:
                    answer_parts.append(f"• {title} - {status}")
        else:
            answer_parts.append(f"Participated in {len(hackathons)}+ hackathons with consistent top placements and recognition")
        return "\n".join(answer_parts) if answer_parts else None
    
    # General hackathon question - emphasize 12+ participation + tier-1 events
    national_hacks = [h for h in hackathons if isinstance(h, dict) and "national" in _to_text(h.get("status")).lower()]
    if national_hacks:
        answer = f"Jayanth has participated in {len(national_hacks)}+ national-level hackathons including tier-1 events like CodeUtsava 9.0 (NIT Raipur), Smart India Hackathon 2025 qualification, and Ctrl+Alt+Compete (RVCE)."
    else:
        answer = f"Participated in {len(hackathons)}+ hackathons across various domains"
    
    # Add details about recent/notable achievements
    if hackathons:
        recent = [h for h in hackathons if isinstance(h, dict) and h.get("date") in ["2025", "2026"]]
        if recent:
            answer += f"\n\nRecent highlights ({len(recent)} in 2025-2026):"
            for hack in recent[:4]:
                title = _to_text(hack.get("title"))
                project = _to_text(hack.get("project"))
                if title:
                    answer += f"\n• {title}: {project}" if project else f"\n• {title}"
    
    return answer


def build_fallback_answer(resume_data: dict[str, Any], question: str) -> str:
    intents = _detect_intents(question)
    entities = _extract_entities(question, resume_data)
    tokens = _query_tokens(question)
    context = _retrieve_context(resume_data, intents, entities, tokens)
    context_summary = _build_context_summary(context)

    profile = context.get("personal", {}) if isinstance(context.get("personal"), dict) else {}
    name = _to_text(profile.get("name")) or "Jayanth"
    
    # Special handling for hackathon queries - returns natural response without "Here's what I found..." prefix
    if "hackathons" in intents:
        hackathons = context.get("matched_hackathons", [])
        if hackathons:
            hackathon_answer = _generate_hackathon_answer(hackathons, question)
            if hackathon_answer:
                lines = [hackathon_answer]
                linkedin = _to_text(profile.get("linkedin"))
                github = _to_text(profile.get("github"))
                if linkedin or github:
                    lines.append("")
                    lines.append("Useful links:")
                    if linkedin:
                        lines.append(f"- LinkedIn: {linkedin}")
                    if github:
                        lines.append(f"- GitHub: {github}")
                return "\n".join(lines)
    
    # For other queries, use the "Here's what I found" format
    facts = _extract_facts(resume_data)
    scored = []
    for fact in facts:
        score = _score_fact(tokens, fact)
        if score > 0:
            scored.append((score, fact))
    scored.sort(key=lambda item: item[0], reverse=True)

    answer_lines = []
    seen_values: set[str] = set()
    for _, fact in scored[:8]:
        value = fact["value"]
        if value in seen_values:
            continue
        seen_values.add(value)
        label = fact["path"].split(".")[-1].replace("_", " ").replace("[", " ").replace("]", "").strip()
        answer_lines.append(f"- {label.title()}: {value}")

    if not answer_lines:
        answer_lines.append("- I could not find exact matching details in the current portfolio data.")
        answer_lines.append("- Try asking with specific keywords (project name, skill, hackathon, or profile link).")

    compact_lines = [f"Here's what I found about {name}:"]
    for line in answer_lines[:6]:
        compact_lines.append(line)

    linkedin = _to_text(profile.get("linkedin"))
    github = _to_text(profile.get("github"))
    if linkedin or github:
        compact_lines.append("")
        compact_lines.append("Useful links:")
        if linkedin:
            compact_lines.append(f"- LinkedIn: {linkedin}")
        if github:
            compact_lines.append(f"- GitHub: {github}")

    return "\n".join(compact_lines)

@router.post("/resume-chat")
def resume_chat(req: ChatRequest):
    resume_data = load_resume_data()
    intents = _detect_intents(req.question)
    entities = _extract_entities(req.question, resume_data)
    tokens = _query_tokens(req.question)
    context = _retrieve_context(resume_data, intents, entities, tokens)
    context_summary = _build_context_summary(context)

    system_prompt = f"""
You are an AI assistant helping visitors learn about Jayanth Midde's professional portfolio.

CONTEXT:
{json.dumps(resume_data, indent=2)}

RETRIEVED_CONTEXT_SUMMARY:
{context_summary}

GUIDELINES:
- Answer questions professionally and concisely about Jayanth's projects, skills, experience, and background
- Always answer personal profile questions using exact data from CONTEXT (LinkedIn, GitHub, email, location, education, resume details)
- Highlight his strengths: Full-stack development, AI/ML integration, real-time systems, IoT/robotics, blockchain
- Emphasize production-grade quality, testing practices, and real-world deployment experience
- Mention specific technologies and projects relevant to questions
- If asked for links/contact, provide them explicitly and accurately
- If asked "why hire him", provide a confident, compelling answer based on his unique skill combination
- If you don't know something specific, suggest checking the projects section or contacting directly
- Keep responses friendly, professional, and informative
- Use bullet points for lists, be clear and organized
"""

    try:
        answer = ask_ai(system_prompt, req.question, req.history)
        sources = ["Portfolio Resume", "OpenRouter"]
    except HTTPException:
        answer = build_fallback_answer(resume_data, req.question)
        sources = ["Portfolio Resume", "Local Fallback"]

    return {
        "answer": answer,
        "sources": sources
    }
