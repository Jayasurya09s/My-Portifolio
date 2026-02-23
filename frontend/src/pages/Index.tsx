import { Starfield } from '@/components/Starfield';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AnimatedStats } from '@/components/AnimatedStats';
import { Projects } from '@/components/Projects';
import { Hackathons } from '@/components/Hackathons';
import { Contact } from '@/components/Contact';
import { TechShowcase } from '@/components/TechShowcase';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { technologies } from '@/data/technologies';
import { projectsData } from '@/data/projects';
import { hackathonsData } from '@/data/hackathons';

const Index = () => {
  useSmoothScroll();

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />
      <Hero />
      <AnimatedStats
        projectsCount={projectsData.length}
        hackathonsCount={hackathonsData.length}
        techCount={technologies.length}
      />
      <Projects />
      <TechShowcase />
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
              © 2025 • Powered by React, Three.js & Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
