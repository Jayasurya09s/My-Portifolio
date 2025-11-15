import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { technologies } from '@/data/technologies';

export const SkillsPreview = () => {
  const navigate = useNavigate();
  
  const topSkills = technologies.slice(0, 12);
  
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-glow-blue">Tech</span>{' '}
            <span className="text-glow-violet">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            A glimpse into my technological expertise spanning {technologies.length}+ technologies
          </p>
        </motion.div>

        {/* Featured Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {topSkills.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl border border-border/30 hover:border-neon-blue/50 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 
                  className="text-sm font-medium group-hover:text-glow-blue transition-colors"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </h3>
                
                {/* Progress bar */}
                <div className="mt-3 h-1.5 bg-background/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.mastery}%` }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${tech.color}80, ${tech.color})`
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        >
          <div className="glass-panel p-6 rounded-xl border border-neon-blue/30 group hover:border-neon-blue/60 transition-all">
            <Code2 className="w-8 h-8 text-neon-blue mb-3" />
            <h3 className="text-xl font-bold text-neon-blue mb-2">Full Stack</h3>
            <p className="text-sm text-muted-foreground">
              Frontend, Backend, and everything in between
            </p>
          </div>
          
          <div className="glass-panel p-6 rounded-xl border border-neon-violet/30 group hover:border-neon-violet/60 transition-all">
            <Cpu className="w-8 h-8 text-neon-violet mb-3" />
            <h3 className="text-xl font-bold text-neon-violet mb-2">AI & ML</h3>
            <p className="text-sm text-muted-foreground">
              Machine learning, neural networks, and AI APIs
            </p>
          </div>
          
          <div className="glass-panel p-6 rounded-xl border border-neon-cyan/30 group hover:border-neon-cyan/60 transition-all">
            <Database className="w-8 h-8 text-neon-cyan mb-3" />
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Cloud & DevOps</h3>
            <p className="text-sm text-muted-foreground">
              AWS, Docker, Kubernetes, and CI/CD pipelines
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => navigate('/skills')}
            size="lg"
            className="bg-neon-violet text-white hover:bg-neon-violet/80 border-2 border-neon-violet hover:border-neon-cyan transition-all duration-300 neon-border font-semibold group"
          >
            Explore Full Skills Universe
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
