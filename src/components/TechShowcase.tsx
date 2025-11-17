import { motion } from 'framer-motion';
import { SplineScene } from './SplineScene';

const frontendTechs = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'TailwindCSS', icon: '💨' },
  { name: 'Bootstrap', icon: '🥾' },
  { name: 'Redux', icon: '🔄' },
  { name: 'Framer Motion', icon: '🎬' },
];

export function TechShowcase() {
  return (
    <section className="relative py-32 overflow-hidden min-h-screen">
      
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
            A glimpse into my technological expertise spanning 87+ technologies
          </p>
        </motion.div>

        <div className="relative w-full max-w-7xl mx-auto min-h-[800px] flex items-center justify-center">
          {/* Glow effect behind robot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-neon-blue/20 rounded-full blur-3xl" />
          </div>

          {/* Tech borders - Top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center max-w-4xl">
            {frontendTechs.slice(0, 4).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group"
              >
                <div className="glass-panel p-4 rounded-xl border-2 border-neon-cyan/30 hover:border-neon-cyan transition-all duration-300">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <div className="text-sm font-semibold text-neon-cyan">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech borders - Left */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {frontendTechs.slice(4, 7).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, x: -5 }}
                className="group"
              >
                <div className="glass-panel p-4 rounded-xl border-2 border-neon-violet/30 hover:border-neon-violet transition-all duration-300">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <div className="text-sm font-semibold text-neon-violet">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech borders - Right */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {frontendTechs.slice(7, 10).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, x: 5 }}
                className="group"
              >
                <div className="glass-panel p-4 rounded-xl border-2 border-neon-blue/30 hover:border-neon-blue transition-all duration-300">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <div className="text-sm font-semibold text-neon-blue">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech borders - Bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4 flex-wrap justify-center max-w-4xl">
            {frontendTechs.slice(10).map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: 5 }}
                className="group"
              >
                <div className="glass-panel p-4 rounded-xl border-2 border-neon-violet/30 hover:border-neon-violet transition-all duration-300">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <div className="text-sm font-semibold text-neon-violet">{tech.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Spline Robot - Center */}
          <motion.div 
            className="relative w-[500px] h-[500px] flex items-center justify-center pointer-events-auto z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
