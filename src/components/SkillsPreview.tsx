import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { technologies } from '@/data/technologies';
import { SplineScene } from './SplineScene';

export const SkillsPreview = () => {
  const navigate = useNavigate();
  
  // Select technologies for border display
  const topTechs = technologies.slice(0, 8);
  const rightTechs = technologies.slice(8, 14);
  const bottomTechs = technologies.slice(14, 22);
  const leftTechs = technologies.slice(22, 28);
  
  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Tech Display Area */}
        <div className="relative w-full max-w-7xl mx-auto min-h-[600px] md:min-h-[700px] mb-12">
          {/* Top Border - Tech Boxes */}
          <div className="absolute top-0 left-0 right-0 flex justify-around gap-2 px-4">
            {topTechs.map((tech, index) => (
              <motion.div
                key={`top-${tech.name}`}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel p-3 rounded-lg border border-border/30 hover:border-neon-blue/50 transition-all duration-300 group w-20 sm:w-24"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 
                    className="text-xs font-medium truncate"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Border - Tech Boxes */}
          <div className="absolute top-16 right-0 bottom-16 flex flex-col justify-around gap-2 pr-4">
            {rightTechs.map((tech, index) => (
              <motion.div
                key={`right-${tech.name}`}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel p-3 rounded-lg border border-border/30 hover:border-neon-violet/50 transition-all duration-300 group w-20 sm:w-24"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 
                    className="text-xs font-medium truncate"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Border - Tech Boxes */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-around gap-2 px-4">
            {bottomTechs.map((tech, index) => (
              <motion.div
                key={`bottom-${tech.name}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel p-3 rounded-lg border border-border/30 hover:border-neon-cyan/50 transition-all duration-300 group w-20 sm:w-24"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 
                    className="text-xs font-medium truncate"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Left Border - Tech Boxes */}
          <div className="absolute top-16 left-0 bottom-16 flex flex-col justify-around gap-2 pl-4">
            {leftTechs.map((tech, index) => (
              <motion.div
                key={`left-${tech.name}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-panel p-3 rounded-lg border border-border/30 hover:border-neon-blue/50 transition-all duration-300 group w-20 sm:w-24"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl mb-1 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <h3 
                    className="text-xs font-medium truncate"
                    style={{ color: tech.color }}
                  >
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Spline Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
          >
            {/* Glow effect behind robot */}
            <div className="absolute w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
            
            {/* Robot */}
            <div className="relative w-[60%] h-[60%] max-w-md max-h-md z-10">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
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

        {/* CTA Button */}
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
            className="bg-gradient-to-r from-neon-blue to-neon-violet hover:from-neon-violet hover:to-neon-blue text-white group"
          >
            Explore Full Skills Universe
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
