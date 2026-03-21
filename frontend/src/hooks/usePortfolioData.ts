import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchPortfolioData } from '@/lib/api';
import { projectsData } from '@/data/projects';
import { hackathonsData } from '@/data/hackathons';
import { technologies } from '@/data/technologies';

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string | string[];
  github: string;
  demo: string;
  caseStudy: string;
  gradient: string;
};

type Hackathon = {
  title: string;
  position: string;
  status: string;
  project: string;
  date: string;
  description: string;
  icon: string;
  color: string;
  type: string;
  links: {
    project: string;
    demo: string;
    certificate: string;
  };
};

const isString = (value: unknown): value is string => typeof value === 'string';
const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every((item) => typeof item === 'string');

const normalizeProject = (raw: Record<string, unknown>): Project | null => {
  const title = raw.title;
  const description = raw.description;
  if (!isString(title) || !isString(description)) {
    return null;
  }

  const tags = isStringArray(raw.tags)
    ? raw.tags
    : isStringArray(raw.technologies)
      ? raw.technologies
      : [];

  const categoryRaw = raw.category;
  const category =
    isString(categoryRaw) || isStringArray(categoryRaw)
      ? categoryRaw
      : 'Full Stack';

  return {
    title,
    description,
    tags,
    category,
    github: isString(raw.github) ? raw.github : '#',
    demo: isString(raw.demo) ? raw.demo : '#',
    caseStudy: isString(raw.caseStudy) ? raw.caseStudy : '#',
    gradient: isString(raw.gradient) ? raw.gradient : 'from-neon-blue to-neon-violet',
  };
};

const normalizeHackathon = (raw: Record<string, unknown>): Hackathon | null => {
  const title = isString(raw.title) ? raw.title : isString(raw.name) ? raw.name : null;
  const position = isString(raw.position) ? raw.position : isString(raw.achievement) ? raw.achievement : null;

  if (!title || !position) {
    return null;
  }

  const linksRaw = raw.links;
  const links =
    linksRaw && typeof linksRaw === 'object'
      ? {
          project: isString((linksRaw as Record<string, unknown>).project)
            ? ((linksRaw as Record<string, unknown>).project as string)
            : '#',
          demo: isString((linksRaw as Record<string, unknown>).demo)
            ? ((linksRaw as Record<string, unknown>).demo as string)
            : '#',
          certificate: isString((linksRaw as Record<string, unknown>).certificate)
            ? ((linksRaw as Record<string, unknown>).certificate as string)
            : '#',
        }
      : {
          project: '#',
          demo: '#',
          certificate: '#',
        };

  return {
    title,
    position,
    status: isString(raw.status) ? raw.status : 'Participation',
    project: isString(raw.project) ? raw.project : '',
    date: isString(raw.date) ? raw.date : isString(raw.year) ? raw.year : '',
    description: isString(raw.description) ? raw.description : '',
    icon: isString(raw.icon) ? raw.icon : 'Award',
    color: isString(raw.color) ? raw.color : 'neon-cyan',
    type: isString(raw.type) ? raw.type : 'Participation',
    links,
  };
};

export const usePortfolioData = () => {
  const query = useQuery({
    queryKey: ['portfolio-data'],
    queryFn: ({ signal }) => fetchPortfolioData({ signal }),
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });

  const projects = useMemo(() => {
    const list = query.data?.featured_projects;
    if (!Array.isArray(list)) {
      return projectsData;
    }
    const normalized = list
      .map((item) => (item && typeof item === 'object' ? normalizeProject(item as Record<string, unknown>) : null))
      .filter((item): item is Project => item !== null);
    return normalized.length ? normalized : projectsData;
  }, [query.data]);

  const hackathons = useMemo(() => {
    const list = query.data?.hackathons;
    if (!Array.isArray(list)) {
      return hackathonsData;
    }
    const normalized = list
      .map((item) => (item && typeof item === 'object' ? normalizeHackathon(item as Record<string, unknown>) : null))
      .filter((item): item is Hackathon => item !== null);
    return normalized.length ? normalized : hackathonsData;
  }, [query.data]);

  const stats = {
    projectsCount: query.data?.stats?.projects_count ?? projects.length,
    hackathonsCount: query.data?.stats?.hackathons_count ?? hackathons.length,
    technologiesCount: query.data?.stats?.technologies_count ?? technologies.length,
  };

  return {
    projects,
    hackathons,
    stats,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
  };
};
