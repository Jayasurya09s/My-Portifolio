import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Download, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ProfileOrb() {
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
      <mesh>
        <sphereGeometry args={[2, 64, 64]} />
        <MeshDistortMaterial
          color="#00f0ff"
          attach="material"
          distort={0.2}
          speed={1.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content (order-2 on mobile to appear after image) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-4 sm:space-y-6 order-2 lg:order-1"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block"
            >
              <span className="text-neon-cyan text-sm sm:text-base font-medium tracking-wider uppercase">
                BTech Student • Developer • Innovator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-neon-blue text-glow-blue animate-glow-pulse">
                MIDDE
              </span>
              <br />
              <span className="text-neon-violet text-glow-violet animate-glow-pulse" style={{ animationDelay: '0.5s' }}>
                JAYANTH
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
            >
              Full-Stack Developer exploring the frontiers of AI, Blockchain, and cutting-edge web technologies.
              Building the future, one line of code at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-neon-blue text-space-dark hover:bg-neon-cyan border-2 border-neon-blue hover:border-neon-cyan transition-all duration-300 neon-border font-semibold text-base sm:text-lg group"
              >
                View My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" size={20} />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-neon-violet text-neon-violet hover:bg-neon-violet/10 hover:text-neon-violet transition-all duration-300 font-semibold text-base sm:text-lg"
                onClick={() => window.open("/lastresume.pdf", "_blank")}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>

            </motion.div>
          </motion.div>


          {/* Right Side - Profile Picture (order-1 on mobile to appear first) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center h-[300px] sm:h-[400px] lg:h-[600px] order-1 lg:order-2"
          >
            {/* Glowing rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-64 border-2 border-neon-blue/30 rounded-full animate-spin-slower"></div>
              <div className="absolute w-80 h-80 border-2 border-neon-violet/20 rounded-full animate-spin-slow"></div>
              <div className="absolute w-96 h-96 border border-neon-cyan/10 rounded-full animate-spin-slower" style={{ animationDirection: 'reverse' }}></div>
            </div>

            {/* Profile Picture Container */}
            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* 3D Background Orb */}
              <div className="absolute inset-0">
                <Canvas className="w-full h-full">
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} color="#00f0ff" />
                  <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b77bff" />
                  <ProfileOrb />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                </Canvas>
              </div>

              {/* Profile Picture */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden neon-border group">
                  {/* Placeholder - Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 via-neon-violet/20 to-neon-cyan/20 flex items-center justify-center backdrop-blur-sm">
                    <span className="text-6xl sm:text-7xl lg:text-8xl font-bold text-glow-blue">MJ</span>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-violet/0 to-neon-cyan/0 group-hover:from-neon-blue/20 group-hover:via-neon-violet/20 group-hover:to-neon-cyan/20 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neon-cyan"
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};
