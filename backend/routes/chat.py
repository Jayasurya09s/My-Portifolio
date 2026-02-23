from fastapi import APIRouter
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

@router.post("/resume-chat")
def resume_chat(req: ChatRequest):
    resume_data = load_resume_data()

    system_prompt = f"""
You are an AI assistant helping visitors learn about Jayanth Midde's professional portfolio.

CONTEXT:
{json.dumps(resume_data, indent=2)}

GUIDELINES:
- Answer questions professionally and concisely about Jayanth's projects, skills, experience, and background
- Highlight his strengths: Full-stack development, AI/ML integration, real-time systems, IoT/robotics, blockchain
- Emphasize production-grade quality, testing practices, and real-world deployment experience
- Mention specific technologies and projects relevant to questions
- If asked "why hire him", provide a confident, compelling answer based on his unique skill combination
- If you don't know something specific, suggest checking the projects section or contacting directly
- Keep responses friendly, professional, and informative
- Use bullet points for lists, be clear and organized

Remember: Jayanth has built 20+ production applications, qualified for SIH 2025, participated in national hackathons, and has expertise across frontend, backend, AI/ML, blockchain, and hardware.
"""

    answer = ask_ai(system_prompt, req.question, req.history)

    return {
        "answer": answer,
        "sources": ["Portfolio Resume"]
    }
