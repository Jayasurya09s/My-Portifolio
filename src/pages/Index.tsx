import { Starfield } from '@/components/Starfield';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStackGalaxy } from '@/components/TechStackGalaxy';
import { AnimatedStats } from '@/components/AnimatedStats';
import { Projects } from '@/components/Projects';
import { Hackathons } from '@/components/Hackathons';
import { Contact } from '@/components/Contact';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

// Project and tech data
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

// Calculate total technologies from all categories
const techStack = 63; // HTML, CSS, JS, TS, React, Tailwind, Vite, Framer + Node, Express, Python, Django, FastAPI, REST, WS + Git, GH Actions, Docker, CI/CD, Nginx, Shell + Mongo, Postgres, MySQL, Redis, Firebase, Supabase + AWS, Azure, GCP, Lambda, CF Workers + Python, NumPy, Pandas, Scikit, OpenAI, LangChain + Arduino, ESP32, NodeMCU, Sensors, MQTT + Solidity, Contracts, Ethereum, MetaMask, Web3 + Arrays, Lists, Stacks, Queues, Trees, Graphs, Recursion, DP

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />
      <Hero />
      <TechStackGalaxy />
      <AnimatedStats 
        projectsCount={projects.length}
        hackathonsCount={hackathons.length}
        techCount={techStack}
      />
      <Projects />
      <Hackathons />
      <Contact />
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-border/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p className="mb-2">
              <span className="text-neon-blue">Designed & Built by</span>{' '}
              <span className="text-neon-violet font-bold">Midde Jayanth</span>
            </p>
            <p className="text-sm">
              © 2024 • Powered by React, Three.js & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
