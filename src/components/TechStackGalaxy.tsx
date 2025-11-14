import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';

interface TechItem {
  name: string;
  category: string;
  icon: string;
}

const techStack: TechItem[] = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', icon: '▲' },
  { name: 'Vue', category: 'Frontend', icon: '🖖' },
  { name: 'Angular', category: 'Frontend', icon: '🅰️' },
  { name: 'TypeScript', category: 'Frontend', icon: '📘' },
  { name: 'JavaScript', category: 'Frontend', icon: '📜' },
  { name: 'HTML5', category: 'Frontend', icon: '🌐' },
  { name: 'CSS3', category: 'Frontend', icon: '🎨' },
  { name: 'Tailwind', category: 'Frontend', icon: '💨' },
  { name: 'Redux', category: 'Frontend', icon: '🔄' },
  
  // Backend
  { name: 'Node.js', category: 'Backend', icon: '🟢' },
  { name: 'Python', category: 'Backend', icon: '🐍' },
  { name: 'Django', category: 'Backend', icon: '🎸' },
  { name: 'Flask', category: 'Backend', icon: '🧪' },
  { name: 'Express', category: 'Backend', icon: '🚂' },
  { name: 'FastAPI', category: 'Backend', icon: '⚡' },
  { name: 'Java', category: 'Backend', icon: '☕' },
  { name: 'Spring', category: 'Backend', icon: '🍃' },
  { name: 'Go', category: 'Backend', icon: '🐹' },
  { name: 'Rust', category: 'Backend', icon: '🦀' },
  
  // AI/ML
  { name: 'TensorFlow', category: 'AI/ML', icon: '🧠' },
  { name: 'PyTorch', category: 'AI/ML', icon: '🔥' },
  { name: 'Scikit-learn', category: 'AI/ML', icon: '📊' },
  { name: 'OpenCV', category: 'AI/ML', icon: '👁️' },
  { name: 'Keras', category: 'AI/ML', icon: '🎯' },
  { name: 'Pandas', category: 'AI/ML', icon: '🐼' },
  { name: 'NumPy', category: 'AI/ML', icon: '🔢' },
  { name: 'Hugging Face', category: 'AI/ML', icon: '🤗' },
  
  // Blockchain
  { name: 'Ethereum', category: 'Blockchain', icon: '💎' },
  { name: 'Solidity', category: 'Blockchain', icon: '⚙️' },
  { name: 'Web3.js', category: 'Blockchain', icon: '🌐' },
  { name: 'Hardhat', category: 'Blockchain', icon: '⛏️' },
  { name: 'IPFS', category: 'Blockchain', icon: '📦' },
  
  // Cloud/DevOps
  { name: 'AWS', category: 'Cloud/DevOps', icon: '☁️' },
  { name: 'Azure', category: 'Cloud/DevOps', icon: '🔷' },
  { name: 'GCP', category: 'Cloud/DevOps', icon: '🌩️' },
  { name: 'Docker', category: 'Cloud/DevOps', icon: '🐳' },
  { name: 'Kubernetes', category: 'Cloud/DevOps', icon: '☸️' },
  { name: 'Jenkins', category: 'Cloud/DevOps', icon: '🔨' },
  { name: 'GitHub Actions', category: 'Cloud/DevOps', icon: '🚀' },
  
  // Mobile
  { name: 'React Native', category: 'Mobile', icon: '📱' },
  { name: 'Flutter', category: 'Mobile', icon: '🦋' },
  { name: 'Swift', category: 'Mobile', icon: '🍎' },
  { name: 'Kotlin', category: 'Mobile', icon: '🤖' },
  
  // Cybersecurity
  { name: 'Penetration Testing', category: 'Cybersecurity', icon: '🔐' },
  { name: 'Cryptography', category: 'Cybersecurity', icon: '🔒' },
  { name: 'Network Security', category: 'Cybersecurity', icon: '🛡️' },
];

const categories = [...new Set(techStack.map(item => item.category))];

function TechOrbit({ techs, radius, speed, offset }: { techs: TechItem[], radius: number, speed: number, offset: number }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * speed + offset;
    }
  });

  return (
    <group ref={groupRef}>
      {techs.map((tech, i) => {
        const angle = (i / techs.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <group key={i} position={[x, 0, z]}>
            <Html distanceFactor={10}>
              <div className="tech-item group cursor-pointer">
                <div className="text-4xl hover:scale-150 transition-transform duration-300 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                  {tech.icon}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <span className="text-neon-cyan text-sm font-medium">{tech.name}</span>
                </div>
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}

function GalaxyCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#00f0ff"
        emissive="#00f0ff"
        emissiveIntensity={0.5}
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

export const TechStackGalaxy = () => {
  const [viewMode, setViewMode] = useState<'galaxy' | 'wheel'>('galaxy');

  return (
    <section id="tech-stack" className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-blue text-glow-blue">Tech Stack</span>{' '}
            <span className="text-neon-violet text-glow-violet">Galaxy</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore my diverse technology ecosystem spanning multiple domains
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => setViewMode('galaxy')}
              variant={viewMode === 'galaxy' ? 'default' : 'outline'}
              className={viewMode === 'galaxy' 
                ? 'bg-neon-blue text-space-dark border-neon-blue neon-border' 
                : 'border-neon-blue text-neon-blue hover:bg-neon-blue/10'
              }
            >
              🌌 Galaxy Mode
            </Button>
            <Button
              onClick={() => setViewMode('wheel')}
              variant={viewMode === 'wheel' ? 'default' : 'outline'}
              className={viewMode === 'wheel' 
                ? 'bg-neon-violet text-space-dark border-neon-violet' 
                : 'border-neon-violet text-neon-violet hover:bg-neon-violet/10'
              }
            >
              🎡 Wheel Mode
            </Button>
          </div>
        </motion.div>

        <div className="h-[600px] sm:h-[700px] lg:h-[800px] relative glass-panel rounded-2xl overflow-hidden">
          <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 0, 0]} intensity={2} color="#00f0ff" />
            <pointLight position={[10, 10, 10]} intensity={1} color="#b300ff" />
            
            <GalaxyCore />
            
            {categories.map((category, index) => {
              const categoryTechs = techStack.filter(t => t.category === category);
              const radius = 3 + index * 2;
              const speed = 0.1 + index * 0.05;
              const offset = index * (Math.PI / 4);
              
              return (
                <TechOrbit
                  key={category}
                  techs={categoryTechs}
                  radius={radius}
                  speed={speed}
                  offset={offset}
                />
              );
            })}
            
            <OrbitControls 
              enableZoom={true} 
              enablePan={true}
              autoRotate={viewMode === 'wheel'}
              autoRotateSpeed={viewMode === 'wheel' ? 2 : 0.5}
              minDistance={5}
              maxDistance={30}
            />
          </Canvas>
          
          {/* Category Legend */}
          <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-lg">
            <div className="flex flex-wrap gap-3 justify-center text-sm">
              {categories.map((cat, i) => (
                <div key={cat} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ 
                      background: `hsl(${(i * 360) / categories.length}, 70%, 60%)`,
                      boxShadow: `0 0 10px hsl(${(i * 360) / categories.length}, 70%, 60%)`
                    }}
                  ></div>
                  <span className="text-foreground font-medium">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
