import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Github,
  MapPin,
  AlertTriangle,
  Navigation,
  Radio,
  Users,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ===== TEAM DATA ===== */
const teammates = [
  {
    name: "JAYANTH MIDDE",
    github: "https://github.com/Jayasurya09s",
    linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
    role: "Team Lead ",
  },
  {
    name: "Aman Kumar Singh",
    github: "https://github.com/AmanSingh007coder",
    linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    role: "Developer",
  },
  {
    name: "Dhruva K R",
    github: "https://github.com/dhruvakr",
    linkedin: "https://www.linkedin.com/in/dhruva-k-r/",
    role: "Developer",
  },
  {
    name: "Vikram Bandari",
    github: "https://github.com/Bandari-Vikram",
    linkedin: "https://www.linkedin.com/in/bandari-vikram-129a17325/",
    role: "Developer",
  },
];

const Raahi = () => {
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                  AI Innovation
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                  Project Pending
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-cyan text-glow-cyan">RAAHI</span>{' '}
                <span className="text-neon-blue text-glow-blue">
                  — Real-time AI Assistant for Hazard-Informed Routing
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                An AI-powered disaster-aware navigation system providing
                hazard-informed routing, real-time alerts, emergency hotspots,
                offline mode, and a multilingual voice safety assistant. Built
                using React, Tailwind, Google Maps API, FastAPI/Flask, and IMD
                weather data.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  React
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Google Maps API
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  FastAPI/Flask
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  IMD Weather Data
                </Badge>
              </div>

              <div className="glass-panel p-6 mb-8 rounded-lg border border-yellow-500/50 bg-yellow-500/10">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="text-yellow-500 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-500 mb-2">
                      Project Still in Pending
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      This project is currently under development. Detailed
                      documentation and live demo will be available soon.
                    </p>
                    <Button
                      asChild
                      className="bg-neon-cyan text-space-dark hover:bg-neon-blue"
                    >
                      <a
                        href="https://github.com/Jayasurya09s/Raahi-hazard"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="mr-2" />
                        View Source Code on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===== PROJECT OVERVIEW ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-8 mb-12 rounded-lg border border-border/50"
            >
              <h2 className="text-2xl font-bold text-neon-cyan mb-6">
                Project Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Navigation className="text-neon-cyan mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Hazard-Informed Routing
                      </h3>
                      <p className="text-muted-foreground">
                        Smart navigation considering real-time disaster and
                        danger zones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-500 mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Real-time Alerts
                      </h3>
                      <p className="text-muted-foreground">
                        Instant notifications for disasters and weather hazards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Emergency Hotspots
                      </h3>
                      <p className="text-muted-foreground">
                        Nearby emergency services and safe zones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Radio className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Voice Safety Assistant
                      </h3>
                      <p className="text-muted-foreground">
                        Multilingual voice guidance during emergencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    AI-powered disaster-aware navigation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    IMD weather data integration
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    Offline emergency mode
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    Emergency hotspot mapping
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* ===== IMPACT ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-panel p-8 mb-12 rounded-lg border border-border/50"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-4">
                Impact & Use Cases
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl mb-2">🌊</p>
                  <h4 className="font-semibold mb-1">Flood Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Safe routing during floods
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl mb-2">🌪️</p>
                  <h4 className="font-semibold mb-1">Storm Alerts</h4>
                  <p className="text-sm text-muted-foreground">
                    Cyclone and storm warnings
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl mb-2">🆘</p>
                  <h4 className="font-semibold mb-1">Emergency Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Rescue team access
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ===== TEAM MEMBERS (ONLY ADDITION) ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-panel p-8 rounded-lg border border-border/50"
            >
              <div className="flex items-center gap-2 mb-6">
                <Users size={24} className="text-neon-cyan" />
                <h3 className="text-2xl font-bold text-neon-cyan">
                  Team Members
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {teammates.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                    className="glass-panel p-5 rounded-lg border border-border/30 hover:border-neon-cyan/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-neon-cyan mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-neon-blue mb-3">
                      {member.role}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                        asChild
                      >
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          GitHub
                        </a>
                      </Button>

                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400/10"
                        asChild
                      >
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin size={14} className="mr-1" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Raahi;
