import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

import { SplineScene } from "./SplineScene";
import { ArrowRight, Code2, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate  }  from "react-router-dom";

/* ---------------------------------------------
   FULL 32-TECH LIST 
--------------------------------------------- */
const techItems = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "📘" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Vue.js", icon: "💚" },
  { name: "Angular", icon: "🅰️" },
  { name: "TailwindCSS", icon: "💨" },

  { name: "Bootstrap", icon: "🥾" },
  { name: "Redux", icon: "🔄" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "Vite", icon: "⚡" },
  { name: "Webpack", icon: "📦" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },

  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase", icon: "🔥" },
  { name: "GraphQL", icon: "🔺" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Three.js", icon: "🌌" },
  { name: "Spline 3D", icon: "🤖" },
  { name: "Figma", icon: "🎨" },

  // Blockchain 7 (Truffle removed)
  { name: "Ethereum", icon: "💎" },
  { name: "Solidity", icon: "⚙️" },
  { name: "Web3.js", icon: "🌐" },
  { name: "Smart Contracts", icon: "📜" },
  { name: "MetaMask", icon: "🦊" },
  { name: "Hardhat", icon: "⛏️" },
  { name: "IPFS", icon: "📦" }
];

/* ---------------------------------------------
   GENERATE 32 SQUARE POSITIONS
--------------------------------------------- */
function generateSquarePositions(size = 380) {
  const positions = [];

  const topY = -size;
  const bottomY = size;
  const leftX = -size;
  const rightX = size;

  // TOP (9)
  for (let i = 0; i < 9; i++) {
    const x = leftX + (i * (2 * size)) / 8;
    positions.push({ x, y: topY });
  }

  // RIGHT (7)
  for (let i = 1; i <= 7; i++) {
    const y = topY + (i * (2 * size)) / 8;
    positions.push({ x: rightX, y });
  }

  // BOTTOM (9)
  for (let i = 8; i >= 0; i--) {
    const x = leftX + (i * (2 * size)) / 8;
    positions.push({ x, y: bottomY });
  }

  // LEFT (7)
  for (let i = 7; i >= 1; i--) {
    const y = topY + (i * (2 * size)) / 8;
    positions.push({ x: leftX, y });
  }

  return positions;
}

const positions = generateSquarePositions();

/* ---------------------------------------------
   ORBIT ANIMATION COMPONENT
--------------------------------------------- */
function OrbitingTech({ items }) {
  const currentIndex = useRef(items.map((_, i) => i));
  const motionPoints = items.map(() => ({
    x: useMotionValue(0),
    y: useMotionValue(0)
  }));

  useEffect(() => {
    items.forEach((_, i) => {
      const loop = () => {
        const next = (currentIndex.current[i] + 1) % positions.length;
        currentIndex.current[i] = next;

        Promise.all([
          animate(motionPoints[i].x, positions[next].x, {
            duration: 1.5,
            ease: "linear"
          }).finished,

          animate(motionPoints[i].y, positions[next].y, {
            duration: 1.5,
            ease: "linear"
          }).finished
        ]).then(loop);
      };

      // Initialize
      motionPoints[i].x.set(positions[i].x);
      motionPoints[i].y.set(positions[i].y);

      loop();
    });
  }, []);

  return (
    <>
      {items.map((tech, i) => (
        <motion.div
          key={tech.name}
          style={{
            position: "absolute",
            x: motionPoints[i].x,
            y: motionPoints[i].y
          }}
        >
          <div className="glass-panel p-4 rounded-xl border-2 border-neon-violet/40">
            <div className="text-4xl text-center">{tech.icon}</div>
            <div className="text-sm font-semibold text-neon-violet text-center">
              {tech.name}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}

/* ---------------------------------------------
   MAIN COMPONENT
--------------------------------------------- */
export function TechShowcase() {
  const navigate = useNavigate();
  
  return (
    <section className="relative py-32 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 relative">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <p className="text-muted-foreground text-lg">Infinite Orbit Edition</p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative w-full max-w-7xl mx-auto min-h-[900px] flex items-center justify-center">

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[650px] h-[650px] bg-neon-blue/20 rounded-full blur-3xl" />
          </div>

          {/* ⭐ ORBIT ⭐ */}
          <OrbitingTech items={techItems} />

          {/* Center Spline */}
          <div className="relative w-[480px] h-[480px] flex items-center justify-center z-10">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>


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
}
