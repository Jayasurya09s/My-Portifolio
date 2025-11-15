import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface CounterStatProps {
  end: number;
  label: string;
  icon: LucideIcon;
  color: string;
}

export function CounterStat({ end, label, icon: Icon, color }: CounterStatProps) {
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
      className="glass-panel p-6 rounded-2xl border-border/50 hover:border-neon-blue/50 transition-all duration-300 group"
    >
      <div className="flex items-center gap-4">
        <div 
          className="p-3 rounded-xl"
          style={{ 
            background: `${color}20`,
            border: `1px solid ${color}40`
          }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        
        <div>
          <div className="flex items-baseline gap-1">
            <span 
              ref={ref} 
              className="text-3xl font-bold"
              style={{ color }}
            >
              0
            </span>
            <span className="text-2xl font-bold" style={{ color }}>+</span>
          </div>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}
