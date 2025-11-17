import { motion } from 'framer-motion';
import { SplineScene } from './SplineScene';
import {
  Code2,
  Layers,
  FileCode,
  Palette,
  Server,
  Gauge,
  Database,
  LockKeyhole,
  Cloud,
  GitBranch,
  Github,
  Package,
} from 'lucide-react';

const techStack = [
  { name: 'React', icon: Code2, color: '#61dafb' },
  { name: 'Next.js', icon: Layers, color: '#000000' },
  { name: 'TypeScript', icon: FileCode, color: '#3178c6' },
  { name: 'Tailwind', icon: Palette, color: '#06b6d4' },
  { name: 'Node.js', icon: Server, color: '#339933' },
  { name: 'Express', icon: Gauge, color: '#000000' },
  { name: 'MongoDB', icon: Database, color: '#47a248' },
  { name: 'PostgreSQL', icon: Database, color: '#336791' },
  { name: 'Prisma', icon: LockKeyhole, color: '#2d3748' },
  { name: 'Docker', icon: Package, color: '#2496ed' },
  { name: 'AWS', icon: Cloud, color: '#ff9900' },
  { name: 'Git', icon: GitBranch, color: '#f05032' },
  { name: 'GitHub', icon: Github, color: '#181717' },
];

const innerRing = techStack.slice(0, 4);
const middleRing = techStack.slice(4, 9);
const outerRing = techStack.slice(9);

export function TechArsenal() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
              Tech Arsenal
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies powering my digital universe
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto aspect-square">
          {/* Glow effect behind robot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl" />
          </div>

          {/* Orbit rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[40%] h-[40%] rounded-full border border-neon-cyan/20" />
            <div className="absolute w-[60%] h-[60%] rounded-full border border-neon-violet/20" />
            <div className="absolute w-[80%] h-[80%] rounded-full border border-neon-blue/20" />
          </div>

          {/* Inner ring - fastest */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {innerRing.map((tech, index) => {
              const angle = (index / innerRing.length) * 2 * Math.PI;
              const radius = 20; // percentage
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative group"
                  >
                    <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-all">
                      <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-background/90 backdrop-blur-sm border border-border/50">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Middle ring - slower */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {middleRing.map((tech, index) => {
              const angle = (index / middleRing.length) * 2 * Math.PI;
              const radius = 30;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="relative group"
                  >
                    <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-all">
                      <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-background/90 backdrop-blur-sm border border-border/50">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Outer ring - slowest */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {outerRing.map((tech, index) => {
              const angle = (index / outerRing.length) * 2 * Math.PI;
              const radius = 40;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);
              
              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="relative group"
                  >
                    <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg group-hover:border-primary/50 transition-all">
                      <tech.icon className="w-7 h-7" style={{ color: tech.color }} />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-background/90 backdrop-blur-sm border border-border/50">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
