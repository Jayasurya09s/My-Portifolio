import { motion, useInView } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Search, Rocket, Trophy, Brain, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useState, useRef } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { NebulaBackground } from '@/components/NebulaBackground';
import { technologies, categories } from '@/data/technologies';
import { projectsData } from '@/data/projects';
import { hackathonsData } from '@/data/hackathons';
import { CounterStat } from '@/components/CounterStat';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiFramer,
  SiThreedotjs,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiC,
  SiCplusplus,
  SiFastapi,
  SiFlask,
  SiOpenapiinitiative,
  SiGraphql,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiOpenai,
  SiHuggingface,
  SiEthereum,
  SiSolidity,
  SiIpfs,
  SiArduino,
  SiEspressif,
  SiRaspberrypi,
  SiMqtt,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiSqlite,
  SiPycharm,
  SiPostman,
  SiFigma,
  SiJira,
  SiSlack,
  SiNotion,
  SiGithubcopilot,
  SiGoogle,
} from 'react-icons/si';

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
          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/">
              <Button 
                variant="outline" 
                className="group border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2 group-hover:text-neon-cyan transition-colors" />
                <span className="group-hover:text-neon-cyan transition-colors">Back to Home</span>
              </Button>
            </Link>
          </motion.div>

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
                end={projectsData.length}
                label="Projects Completed"
                icon={Rocket}
                color="hsl(var(--neon-cyan))"
              />
              <CounterStat
                end={hackathonsData.length}
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

function getTechIcon(name: string, category: string, color: string) {
  const p = { size: 48, style: { color }, className: 'mx-auto' } as const;
  // Frontend
  if (category === 'Frontend') {
    switch (name) {
      case 'HTML': return <SiHtml5 {...p} />;
      case 'CSS': return <SiCss3 {...p} />;
      case 'JavaScript': return <SiJavascript {...p} />;
      case 'TypeScript': return <SiTypescript {...p} />;
      case 'React': return <SiReact {...p} />;
      case 'Angular': return <SiAngular {...p} />;
      case 'TailwindCSS': return <SiTailwindcss {...p} />;
      case 'Bootstrap': return <SiBootstrap {...p} />;
      case 'jQuery': return <SiJquery {...p} />;
      case 'Framer Motion': return <SiFramer {...p} />;
      case 'Three.js': return <SiThreedotjs {...p} />;
      case 'Vite': return <SiVite {...p} />;
    }
  }
  // Backend
  if (category === 'Backend') {
    switch (name) {
      case 'Node.js': return <SiNodedotjs {...p} />;
      case 'Express.js': return <SiExpress {...p} />;
      case 'Python': return <SiPython {...p} />;
      case 'C': return <SiC {...p} />;
      case 'C++': return <SiCplusplus {...p} />;
      case 'FastAPI': return <SiFastapi {...p} />;
      case 'Flask': return <SiFlask {...p} />;
      case 'REST APIs': return <SiOpenapiinitiative {...p} />;
      case 'GraphQL': return <SiGraphql {...p} />;
      // WebSockets, Java, Spring Boot, Go -> fallback
    }
  }
  // AI/ML
  if (category === 'AI/ML') {
    switch (name) {
      case 'TensorFlow': return <SiTensorflow {...p} />;
      case 'PyTorch': return <SiPytorch {...p} />;
      case 'Scikit-learn': return <SiScikitlearn {...p} />;
      case 'Pandas': return <SiPandas {...p} />;
      case 'NumPy': return <SiNumpy {...p} />;
      case 'OpenCV': return <SiOpencv {...p} />;
      case 'OpenAI API': return <SiOpenai {...p} />;
      case 'Hugging Face': return <SiHuggingface {...p} />;
      // Generative AI, LangChain -> fallback
    }
  }
  // Blockchain
  if (category === 'Blockchain') {
    switch (name) {
      case 'Ethereum': return <SiEthereum {...p} />;
      case 'Solidity': return <SiSolidity {...p} />;
      case 'IPFS': return <SiIpfs {...p} />;
      // Web3.js, Smart Contracts -> fallback
    }
  }
  // IoT & Robotics
  if (category === 'IoT & Robotics') {
    switch (name) {
      case 'Arduino': return <SiArduino {...p} />;
      case 'ESP32': return <SiEspressif {...p} />;
      case 'Raspberry Pi': return <SiRaspberrypi {...p} />;
      case 'MQTT': return <SiMqtt {...p} />;
      // Sensors -> fallback
    }
  }
  // Databases
  if (category === 'Databases') {
    switch (name) {
      case 'MongoDB': return <SiMongodb {...p} />;
      case 'PostgreSQL': return <SiPostgresql {...p} />;
      case 'MySQL': return <SiMysql {...p} />;
      case 'Firebase': return <SiFirebase {...p} />;
      case 'Supabase': return <SiSupabase {...p} />;
      case 'SQLite': return <SiSqlite {...p} />;
      // Redis, DynamoDB -> fallback
    }
  }
  // Tools & IDEs
  if (category === 'Tools & IDEs') {
    switch (name) {
      case 'PyCharm': return <SiPycharm {...p} />;
      case 'Postman': return <SiPostman {...p} />;
      case 'Figma': return <SiFigma {...p} />;
      case 'Jira': return <SiJira {...p} />;
      case 'Slack': return <SiSlack {...p} />;
      case 'Notion': return <SiNotion {...p} />;
    }
  }
  // GenAI Tools
  if (category === 'GenAI Tools') {
    switch (name) {
      case 'GitHub Copilot': return <SiGithubcopilot {...p} />;
      case 'ChatGPT': return <SiOpenai {...p} />;
      case 'Gemini': return <SiGoogle {...p} />;
      // Cursor, Gemini, Lovable, Prompt Engineering, Vibecoding -> fallback
    }
  }
  return null;
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
        {getTechIcon(tech.name, tech.category, tech.color) ?? <span>{tech.icon}</span>}
      </motion.div>

      {/* Tech Name */}
      <h3 
        className="text-center font-bold mb-3 group-hover:text-glow transition-all text-neon-cyan"
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
