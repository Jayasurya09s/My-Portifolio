import { motion } from 'framer-motion';

export const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, 
              ${particle.id % 3 === 0 ? 'hsl(var(--neon-blue))' : 
                particle.id % 3 === 1 ? 'hsl(var(--neon-violet))' : 
                'hsl(var(--neon-cyan))'} 0%, 
              transparent 70%)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(particle.id) * 20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};
