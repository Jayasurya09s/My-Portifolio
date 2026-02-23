import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

import { projectsData } from '../src/data/projects';
import { hackathonsData } from '../src/data/hackathons';
import { technologies } from '../src/data/technologies';

const currentFile = fileURLToPath(import.meta.url);
const frontendDir = resolve(currentFile, '..', '..');
const repoRoot = resolve(frontendDir, '..');
const backendDataPath = resolve(repoRoot, 'backend', 'data.json');

const toSkillKey = (category: string) =>
  category
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\//g, ' ')
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');

const uniqueStrings = (values: string[]) => [...new Set(values.filter(Boolean))];

const buildSkillsFromTechnologies = () => {
  const grouped: Record<string, string[]> = {};

  for (const tech of technologies) {
    const key = toSkillKey(tech.category);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(tech.name);
  }

  Object.keys(grouped).forEach((key) => {
    grouped[key] = uniqueStrings(grouped[key]);
  });

  return grouped;
};

const mapProjects = () =>
  projectsData.map((project) => ({
    title: project.title,
    description: project.description,
    technologies: project.tags,
    github: project.github,
    demo: project.demo,
    category: project.category,
    highlights: project.tags.slice(0, 6),
  }));

const mapHackathons = () =>
  hackathonsData.map((hackathon) => ({
    name: hackathon.title,
    achievement: hackathon.position,
    project: hackathon.project,
    description: hackathon.description,
    year: hackathon.date,
    status: hackathon.status,
  }));

const existing = JSON.parse(readFileSync(backendDataPath, 'utf-8'));

const merged = {
  ...existing,
  skills: {
    ...(existing.skills || {}),
    ...buildSkillsFromTechnologies(),
  },
  featured_projects: mapProjects(),
  hackathons: mapHackathons(),
  stats: {
    projects_count: projectsData.length,
    hackathons_count: hackathonsData.length,
    technologies_count: technologies.length,
  },
  generated_from_frontend_data: true,
};

writeFileSync(backendDataPath, `${JSON.stringify(merged, null, 2)}\n`, 'utf-8');

console.log(
  `Synced backend/data.json from frontend data: ${projectsData.length} projects, ${hackathonsData.length} hackathons, ${technologies.length} technologies.`,
);
