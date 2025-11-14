import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent code completion and suggestion tool using GPT-4 and fine-tuned models for multiple programming languages.',
    tags: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    github: '#',
    demo: '#',
    gradient: 'from-neon-blue to-neon-cyan',
  },
  {
    title: 'DeFi Trading Platform',
    description: 'Decentralized finance platform for cryptocurrency trading with smart contract integration and real-time analytics.',
    tags: ['Solidity', 'Web3.js', 'React', 'Node.js'],
    github: '#',
    demo: '#',
    gradient: 'from-neon-violet to-neon-pink',
  },
  {
    title: 'Neural Style Transfer App',
    description: 'Mobile application that applies artistic styles to photos using deep learning neural networks.',
    tags: ['PyTorch', 'React Native', 'Flask', 'AWS'],
    github: '#',
    demo: '#',
    gradient: 'from-neon-cyan to-neon-blue',
  },
  {
    title: 'Blockchain Supply Chain',
    description: 'Enterprise-grade supply chain tracking system using blockchain for transparency and immutability.',
    tags: ['Ethereum', 'Next.js', 'GraphQL', 'Docker'],
    github: '#',
    demo: '#',
    gradient: 'from-neon-pink to-neon-violet',
  },
  {
    title: 'Cloud Infrastructure Manager',
    description: 'Multi-cloud management dashboard for monitoring and optimizing resource usage across AWS, Azure, and GCP.',
    tags: ['Go', 'Kubernetes', 'React', 'Terraform'],
    github: '#',
    demo: '#',
    gradient: 'from-neon-blue to-neon-violet',
  },
  {
    title: 'Cybersecurity Scanner',
    description: 'Automated vulnerability detection tool with AI-powered threat analysis and reporting.',
    tags: ['Python', 'Django', 'PostgreSQL', 'ML'],
    github: '#',
    demo: '#',
    gradient: 'from-neon-cyan to-neon-pink',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-blue text-glow-blue">Featured</span>{' '}
            <span className="text-neon-violet text-glow-violet">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge applications showcasing innovation across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full glass-panel border-border/50 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden relative">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-neon-cyan group-hover:text-glow-cyan transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
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
                  
                  <div className="flex gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2" size={16} />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-neon-blue text-space-dark hover:bg-neon-cyan border-neon-blue neon-border"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2" size={16} />
                        Demo
                      </a>
                    </Button>
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
