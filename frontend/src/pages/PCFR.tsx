import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Linkedin, CloudRain, Cog, ShieldCheck, Cpu, Radio } from 'lucide-react';
import { Link } from 'react-router-dom';

const teammates = [
  {
    name: 'Midde Jayanth',
    github: 'https://github.com/Jayasurya09s',
    linkedin: 'https://www.linkedin.com/in/jayanth-midde-968150321/',
    role: 'Developer',
  },
  {
    name: 'Anshuman Pati',
    github: 'https://github.com/anshu2k24',
    linkedin: 'https://www.linkedin.com/in/anshuman-pati-5575bb34a/',
    role: 'Developer',
  },
  {
    name: 'Aman Kumar Singh',
    github: 'https://github.com/AmanSingh007coder',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-singh-be/',
    role: 'Developer',
  },
];

const PCFR = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/">
            <Button
              variant="outline"
              className="mb-8 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            {/* HERO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                  IoT
                </Badge>
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                  Semester I Mini Project
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-cyan text-glow-cyan">PCFR</span>{' '}
                <span className="text-neon-pink text-glow-pink">— Protecting Clothes From Rain</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A low-cost home-automation project using an Arduino Uno, a rain sensor, and an SG90 servo motor. When it starts raining, the system detects rainfall and automatically moves a protective cover to safeguard clothes drying outside.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Arduino Uno
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Rain Sensor
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  SG90 Servo
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Embedded C
                </Badge>
              </div>
            </motion.div>

            {/* OVERVIEW */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-8 mb-12 rounded-lg border border-border/50"
            >
              <h2 className="text-2xl font-bold text-neon-cyan mb-6">Project Overview</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <CloudRain className="text-neon-cyan mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Automatic Rain Detection</h3>
                      <p className="text-muted-foreground">
                        The rain sensor triggers the system instantly upon detecting moisture, ensuring quick response even to light rain.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Cpu className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Arduino-based Control</h3>
                      <p className="text-muted-foreground">
                        An Arduino Uno processes the sensor input and drives the SG90 servo motor to actuate the protective cover.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Radio className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Reliable Mechanism</h3>
                      <p className="text-muted-foreground">
                        The SG90 servo provides consistent actuation. Simple code handles debouncing and avoids false triggers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <ShieldCheck className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">Protects Clothes Automatically</h3>
                      <p className="text-muted-foreground">
                        Once rain stops, the system can be reset, restoring the cover to its initial position safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button disabled variant="outline" className="border-neon-violet text-neon-violet">
                  <Github size={18} className="mr-2" />
                  Source (coming soon)
                </Button>
                <Button disabled className="bg-neon-blue text-space-dark">
                  Demo (coming soon)
                </Button>
              </div>
            </motion.div>

            {/* TEAM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-panel p-8 rounded-lg border border-border/50"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-6">Team</h3>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {teammates.map((member) => (
                  <div
                    key={member.name}
                    className="glass-panel p-5 rounded-lg border border-border/40 hover:border-neon-cyan transition"
                  >
                    <p className="text-lg font-semibold text-neon-green">{member.name}</p>
                    <p className="text-sm text-muted-foreground mb-3">{member.role}</p>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10" asChild>
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" /> GitHub
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400/10" asChild>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin size={14} className="mr-1" /> LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PCFR;
