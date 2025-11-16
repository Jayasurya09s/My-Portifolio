import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Search, Rocket, Trophy, Brain } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { NebulaBackground } from '@/components/NebulaBackground';
import { technologies, categories } from '@/data/technologies';
import { CounterStat } from '@/components/CounterStat';

const projects = [
  { title: 'AI Code Assistant', category: 'AI' },
  { title: 'DeFi Trading Platform', category: 'Web3' },
  { title: 'Neural Style Transfer', category: 'AI' },
  { title: 'Blockchain Supply Chain', category: 'Web3' },
  { title: 'Cloud Infrastructure Manager', category: 'Full Stack' },
  { title: 'IoT Smart Home', category: 'IoT' },
];

const hackathons = [
  'Smart India Hackathon 2025',
  'Roomigo – PG Finder (TechTrek)',
  'ETHGlobal 2024',
  'Google Cloud Hackathon',
  'Meta XR Challenge',
  'AWS BuildOn',
];

export default function Skills() {
  useSmoothScroll();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTechnologies = technologies.filter(tech => {
    const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tech.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen relative">
      <NebulaBackground />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
                My Skills Universe
              </span>
            </h1>
            <p className="text-muted-foreground text-lg mb-12">
              Explore my technological galaxy of expertise
            </p>

            {/* Animated Counter Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <CounterStat
                end={projects.length}
                label="Projects Completed"
                icon={Rocket}
                color="hsl(var(--neon-cyan))"
              />
              <CounterStat
                end={hackathons.length}
                label="Hackathons Participated"
                icon={Trophy}
                color="hsl(var(--neon-violet))"
              />
              <CounterStat
                end={technologies.length}
                label="Technologies Mastered"
                icon={Brain}
                color="hsl(var(--neon-blue))"
              />
            </div>
          </motion.div>

          {/* Search & Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 glass-panel border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground text-lg"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                      : 'glass-panel border-border/50 hover:border-primary/50 hover:bg-primary/10 text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          {filteredTechnologies.length > 0 ? (
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {filteredTechnologies.map((tech, index) => (
                <TechCard key={tech.name} tech={tech} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-2xl text-muted-foreground mb-4">No technologies found</p>
              <p className="text-muted-foreground">Try searching for something else or select a different category</p>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}

interface TechCardProps {
  tech: {
    name: string;
    icon: string;
    category: string;
    color: string;
    mastery: number;
  };
  index: number;
}

function TechCard({ tech, index }: TechCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.03,
        ease: [0.22, 0.9, 0.35, 1]
      }}
      whileHover={{ 
        scale: 1.1, 
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
      className="glass-panel p-6 rounded-2xl relative group cursor-pointer"
      style={{
        borderColor: `${tech.color}30`,
        perspective: '1000px',
      }}
    >
      {/* Tech Icon */}
      <motion.div
        className="text-5xl mb-4 text-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {tech.icon}
      </motion.div>

      {/* Tech Name */}
      <h3 
        className="text-center font-bold mb-3 group-hover:text-glow transition-all"
        style={{ color: tech.color }}
      >
        {tech.name}
      </h3>

      {/* Mastery Progress Bar */}
      <div className="relative h-2 bg-background/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${tech.mastery}%` } : {}}
          transition={{ duration: 1, delay: index * 0.03 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${tech.color}, ${tech.color}dd)`,
          }}
        />
      </div>
      <p className="text-xs text-center mt-2 text-muted-foreground">{tech.mastery}% Mastery</p>

      {/* Hover Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `0 0 30px ${tech.color}40`,
        }}
      />
    </motion.div>
  );
}
