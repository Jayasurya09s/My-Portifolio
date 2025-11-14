import { Starfield } from '@/components/Starfield';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TechStackGalaxy } from '@/components/TechStackGalaxy';
import { Projects } from '@/components/Projects';
import { Hackathons } from '@/components/Hackathons';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navbar />
      <Hero />
      <TechStackGalaxy />
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
