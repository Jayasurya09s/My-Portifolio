import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { useState } from 'react';
import { projectsData, categories } from '@/data/projects';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => 
        Array.isArray(p.category) 
          ? p.category.includes(selectedCategory) 
          : p.category === selectedCategory
      );

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-blue text-glow-blue">Featured</span>{' '}
            <span className="text-neon-violet text-glow-violet">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cutting-edge applications showcasing innovation across multiple domains
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-neon-blue text-space-dark border-neon-blue neon-border' 
                  : 'border-neon-violet text-neon-violet hover:bg-neon-violet/10'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card 
                className="group h-full glass-panel border-border/50 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden relative perspective-1000"
                style={{
                  transform: 'perspective(1000px)',
                }}
              >
                {/* Gradient Overlay - ensure it doesn't block clicks */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
                
                {/* Glow particles */}
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
                  <CardTitle className="text-xl sm:text-2xl text-neon-cyan group-hover:text-glow-cyan transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    {project.github !== '#' && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10"
                        asChild
                      >
                        <a 
                          href={project.github} 
                          target={project.github.startsWith('http') ? "_blank" : undefined}
                          rel={project.github.startsWith('http') ? "noopener noreferrer" : undefined}
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
                          target={project.demo.startsWith('http') ? "_blank" : undefined}
                          rel={project.demo.startsWith('http') ? "noopener noreferrer" : undefined}
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
                          target={project.caseStudy.startsWith('http') ? "_blank" : undefined}
                          rel={project.caseStudy.startsWith('http') ? "noopener noreferrer" : undefined}
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
    </section>
  );
};
