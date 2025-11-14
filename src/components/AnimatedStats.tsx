import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  color: string;
}

function AnimatedCounter({ end, label, suffix = '', color }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(end);
    }
  }, [isInView, end, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center group"
    >
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border-border/50 hover:border-neon-blue/50 transition-all duration-300 relative overflow-hidden">
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-${color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        
        <div className="relative z-10">
          <div className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-${color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
            <span ref={ref}>0</span>
            {suffix}
          </div>
          <p className="text-base sm:text-lg text-muted-foreground font-medium">{label}</p>
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-${color} rounded-full`}
              style={{
                left: `${20 + i * 30}%`,
                bottom: '10%',
              }}
              animate={{
                y: [-10, -40],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

interface AnimatedStatsProps {
  projectsCount: number;
  hackathonsCount: number;
  techCount: number;
}

export const AnimatedStats = ({ projectsCount, hackathonsCount, techCount }: AnimatedStatsProps) => {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          <AnimatedCounter
            end={projectsCount}
            label="Projects Completed"
            suffix="+"
            color="neon-blue"
          />
          <AnimatedCounter
            end={hackathonsCount}
            label="Hackathons Won"
            suffix="+"
            color="neon-violet"
          />
          <AnimatedCounter
            end={techCount}
            label="Technologies Mastered"
            suffix="+"
            color="neon-cyan"
          />
        </div>
      </div>
    </section>
  );
};
