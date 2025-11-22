import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { SplineScene } from "./SplineScene";
import { ArrowRight, Code2, Cpu, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate  }  from "react-router-dom";

/* ---------------------------------------------
   FULL 32-TECH LIST 
--------------------------------------------- */
const techItems = [
  // Frontend
  { name: "React.js", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "Framer Motion", icon: "🎬" },

  // Backend
  { name: "Node.js", icon: "🟢" },
  { name: "Express.js", icon: "🚀" },
  { name: "FastAPI", icon: "⚡" },
  { name: "REST APIs", icon: "🔗" },

  // Authentication & Cloud
  { name: "Firebase Auth", icon: "🛡️" },
  { name: "JWT Authentication", icon: "🔐" },
  { name: "MongoDB", icon: "🍃" },
  { name: "Firebase Firestore", icon: "🔥" },
  { name: "SQLite", icon: "🗄️" },
  { name: "Vercel", icon: "▲" },

  // AI & ML
  { name: "scikit-learn", icon: "📊" },
  { name: "TensorFlow Lite", icon: "🧠" },
  { name: "YOLO (Object Detection)", icon: "🎯" },
  { name: "OpenCV", icon: "👁️" },
  { name: "TorchScript", icon: "🔥" },
  

  // IoT & Embedded
  { name: "Arduino Uno", icon: "🛠️" },
  { name: "ESP32", icon: "📡" },
  { name: "IoT Sensors (DHT11, Rain, Soil)", icon: "🧪" },
  { name: "MPU6050", icon: "📐" },
  { name: "SG90 Servo", icon: "⚙️" },

  // Tools & DevOps
  { name: "Chrome Extensions", icon: "🧩" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Postman", icon: "📮" },

  // Web3
  { name: "Solidity", icon: "⚙️" },
  { name: "Hardhat", icon: "⛏️" },
  { name: "IPFS", icon: "📦" }
];

/* ---------------------------------------------
   GENERATE 32 CIRCULAR POSITIONS (CLOCKWISE)
--------------------------------------------- */
function generateCircularPositions(radius = 380, count = 32, isMobile = false) {
  // Adjust radius for mobile
  const adjustedRadius = isMobile ? radius * 0.4 : radius;
  const positions = [];
  
  // Start from top (270 degrees or -90 degrees) and go clockwise
  for (let i = 0; i < count; i++) {
    // Calculate angle in radians, starting from top and going clockwise
    // -90 degrees = top, then increase angle for clockwise rotation
    const angle = (-Math.PI / 2) + (i * (2 * Math.PI) / count);
    
    const x = adjustedRadius * Math.cos(angle);
    const y = adjustedRadius * Math.sin(angle);
    
    positions.push({ x, y });
  }

  return positions;
}

/* ---------------------------------------------
   GENERATE 32 SQUARE POSITIONS (CLOCKWISE)
--------------------------------------------- */
function generateSquarePositions(size = 380, isMobile = false) {
  // Adjust size for mobile
  const adjustedSize = isMobile ? size * 0.4 : size;
  const positions = [];

  const topY = -adjustedSize;
  const bottomY = adjustedSize;
  const leftX = -adjustedSize;
  const rightX = adjustedSize;

  // TOP (9)
  for (let i = 0; i < 9; i++) {
    const x = leftX + (i * (2 * adjustedSize)) / 8;
    positions.push({ x, y: topY });
  }

  // RIGHT (7)
  for (let i = 1; i <= 7; i++) {
    const y = topY + (i * (2 * adjustedSize)) / 8;
    positions.push({ x: rightX, y });
  }

  // BOTTOM (9)
  for (let i = 8; i >= 0; i--) {
    const x = leftX + (i * (2 * adjustedSize)) / 8;
    positions.push({ x, y: bottomY });
  }

  // LEFT (7)
  for (let i = 7; i >= 1; i--) {
    const y = topY + (i * (2 * adjustedSize)) / 8;
    positions.push({ x: leftX, y });
  }

  return positions;
}

// Will be generated with isMobile flag in component

/* ---------------------------------------------
   ORBIT ANIMATION COMPONENT
--------------------------------------------- */
function OrbitingTech({ items, positions }) {
  const currentIndex = useRef(items.map((_, i) => i));
  const motionPoints = items.map(() => ({
    x: useMotionValue(0),
    y: useMotionValue(0)
  }));
  const animationRefs = useRef([]);

  useEffect(() => {
    // Cancel any existing animations
    animationRefs.current.forEach(control => control?.stop?.());
    animationRefs.current = [];

    items.forEach((_, i) => {
      const loop = () => {
        const next = (currentIndex.current[i] + 1) % positions.length;
        currentIndex.current[i] = next;

        const xControl = animate(motionPoints[i].x, positions[next].x, {
          duration: 1.5,
          ease: "linear"
        });
        
        const yControl = animate(motionPoints[i].y, positions[next].y, {
          duration: 1.5,
          ease: "linear"
        });

        animationRefs.current.push(xControl, yControl);

        Promise.all([xControl.finished, yControl.finished]).then(loop);
      };

      // Initialize
      motionPoints[i].x.set(positions[i].x);
      motionPoints[i].y.set(positions[i].y);

      loop();
    });

    return () => {
      animationRefs.current.forEach(control => control?.stop?.());
    };
  }, [positions]);

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
          <div className="glass-panel p-2 sm:p-4 rounded-full border-2 border-neon-violet/40 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300 group">
            <div className="text-lg sm:text-2xl lg:text-3xl text-center mb-0 sm:mb-1">{tech.icon}</div>
            <div className="text-[8px] sm:text-[10px] font-semibold text-neon-violet text-center opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-6 sm:-bottom-8 whitespace-nowrap">
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
  const [isCircular, setIsCircular] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const circularPositions = generateCircularPositions(380, 32, isMobile);
  const squarePositions = generateSquarePositions(380, isMobile);
  const currentPositions = isCircular ? circularPositions : squarePositions;

  const handleInteraction = () => {
    setIsCircular(prev => !prev);
  };
  
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 relative">

        {/* TITLE */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mt-2">Infinite Orbit Edition</p>
        </div>

        {/* MAIN CONTENT */}
        <div className="relative w-full max-w-7xl mx-auto min-h-[500px] sm:min-h-[700px] lg:min-h-[900px] flex items-center justify-center">

          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[650px] lg:h-[650px] bg-neon-blue/20 rounded-full blur-3xl" />
          </div>

          {/* ⭐ ORBIT ⭐ */}
          <OrbitingTech items={techItems} positions={currentPositions} />

          {/* Center Spline */}
          <div 
            className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[480px] lg:h-[480px] flex items-center justify-center z-10 cursor-pointer touch-manipulation"
            onDoubleClick={handleInteraction}
            onTouchEnd={(e) => {
              // Handle double-tap on mobile
              const now = Date.now();
              const DOUBLE_TAP_DELAY = 300;
              if (e.currentTarget.dataset.lastTap && now - parseInt(e.currentTarget.dataset.lastTap) < DOUBLE_TAP_DELAY) {
                handleInteraction();
                e.currentTarget.dataset.lastTap = '0';
              } else {
                e.currentTarget.dataset.lastTap = now.toString();
              }
            }}
          >
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
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Blockchain & cloud</h3>
            <p className="text-sm text-muted-foreground">
              Etherium, Smart Contracts, IPFS, and Cloud Services
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
