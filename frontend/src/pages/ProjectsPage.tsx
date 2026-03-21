import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { NebulaBackground } from '@/components/NebulaBackground';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { usePortfolioData } from '@/hooks/usePortfolioData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText, Github } from 'lucide-react';

export default function ProjectsPage() {
  useSmoothScroll();
  const { projects } = usePortfolioData();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const domainOrder = ['AI', 'Full Stack', 'Frontend', 'Mobile', 'Robotics', 'IoT'] as const;
  const normalizeDomain = (value: string) => {
    if (/ai|ml|data science|quantitative/i.test(value)) {
      return 'AI';
    }
    if (/robotics/i.test(value)) {
      return 'Robotics';
    }
    if (/iot/i.test(value)) {
      return 'IoT';
    }
    if (/frontend/i.test(value)) {
      return 'Frontend';
    }
    if (/mobile/i.test(value)) {
      return 'Mobile';
    }
    if (/full stack|backend|system|saas/i.test(value)) {
      return 'Full Stack';
    }
    return 'Full Stack';
  };
  const getProjectDomains = (project: (typeof projects)[number]) => {
    const categories = Array.isArray(project.category) ? project.category : [project.category];
    const domains = categories
      .filter(Boolean)
      .map((category) => normalizeDomain(category))
      .filter((domain, index, arr) => arr.indexOf(domain) === index);
    return domains.length ? domains : ['Full Stack'];
  };

  const categoryOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((project) => {
      getProjectDomains(project).forEach((domain) => set.add(domain));
    });
    const ordered = domainOrder.filter((domain) => set.has(domain));
    return ['All', ...ordered];
  }, [projects]);

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === 'All'
        ? true
        : getProjectDomains(project).includes(selectedCategory);

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return matchesCategory;
    }

    const inTitle = project.title.toLowerCase().includes(query);
    const inDescription = project.description.toLowerCase().includes(query);
    const inTags = project.tags.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && (inTitle || inDescription || inTags);
  });

  return (
    <div className="min-h-screen relative">
      <NebulaBackground />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/">
              <Button
                variant="outline"
                className="group border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2 group-hover:text-neon-cyan transition-colors" />
                <span className="group-hover:text-neon-cyan transition-colors">Back to Home</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
                Projects Archive
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse every project, filter by domain, and search by tech or title
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search projects by name, tag, or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 glass-panel border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 px-4">
              {categoryOptions.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                      : 'glass-panel border-border/50 hover:border-primary/50 hover:bg-primary/10 text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card
                  className="group h-full glass-panel border-border/50 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden relative perspective-1000 flex flex-col"
                  style={{ transform: 'perspective(1000px)' }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                  />

                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                        style={{
                          left: `${15 + i * 18}%`,
                          top: `${8 + i * 18}%`,
                        }}
                        animate={{
                          y: [0, -18, 0],
                          opacity: [0, 0.5, 0],
                        }}
                        transition={{
                          duration: 2 + i * 0.4,
                          repeat: Infinity,
                          delay: i * 0.25,
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="relative z-10">
                    <CardTitle
                      className="text-xl sm:text-2xl text-neon-cyan group-hover:text-glow-cyan transition-all min-h-[92px]"
                      style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className="text-muted-foreground min-h-[112px]"
                      style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 min-h-[72px] content-start">
                      {project.tags.slice(0, 8).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 8 && (
                        <Badge variant="outline" className="border-neon-blue/50 text-neon-blue/80">
                          +{project.tags.length - 8}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-4 mt-auto">
                      {project.github !== '#' && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10"
                          asChild
                        >
                          <a
                            href={project.github}
                            target={project.github.startsWith('http') ? '_blank' : undefined}
                            rel={project.github.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`${project.title} GitHub`}
                          >
                            <Github size={16} />
                          </a>
                        </Button>
                      )}

                      {project.demo !== '#' && (
                        <Button
                          size="sm"
                          className="flex-1 bg-neon-blue text-space-dark hover:bg-neon-cyan border-neon-blue"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target={project.demo.startsWith('http') ? '_blank' : undefined}
                            rel={project.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            <ExternalLink className="mr-1" size={16} />
                            Demo
                          </a>
                        </Button>
                      )}

                      {project.caseStudy !== '#' && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                          asChild
                        >
                          <a
                            href={project.caseStudy}
                            target={project.caseStudy.startsWith('http') ? '_blank' : undefined}
                            rel={project.caseStudy.startsWith('http') ? 'noopener noreferrer' : undefined}
                            aria-label={`${project.title} Case Study`}
                          >
                            <FileText size={16} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
