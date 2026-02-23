
  import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Home,
  MapPin,
  Search,
  Star,
  Users,
  Github,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ===== TEAM DATA ===== */
const teammates = [
  
  {
    name: "JAYANTH MIDDE",
    github: "https://github.com/Jayasurya09s",
    linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
    role: "Developer",
  },
  {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
    role: "Team Lead ",
  },
  {
    name: "Aman Kumar Singh",
    github: "https://github.com/AmanSingh007coder",
    linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    role: "Developer",
  },
  {
    name: "Darshil Nathwani",
    github: "https://github.com/Darshil-N",
    linkedin: "https://www.linkedin.com/in/darshil-nathwani/",
    role: "Developer",
  },
];

const Roomigo = () => {
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
            {/* ===== HERO ===== */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-neon-violet/20 text-neon-violet border-neon-violet/30">
                  Full Stack
                </Badge>
                <Badge className="bg-neon-violet/20 text-neon-violet border-neon-violet/30">
                  TechTrek Hackathon
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-violet text-glow-violet">Roomigo</span>{' '}
                <span className="text-neon-pink text-glow-pink">
                  — PG/Hostel Finder Platform
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A comprehensive PG/Hostel accommodation finder platform with
                real-time listing features, verified properties, and direct
                communication with owners.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  React
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Node.js
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Express
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Real-time Updates
                </Badge>
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
                    <Home className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Accommodation Search
                      </h3>
                      <p className="text-muted-foreground">
                        Browse verified PG and hostel listings with detailed
                        information, photos, amenities, and pricing.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Location-Based Filtering
                      </h3>
                      <p className="text-muted-foreground">
                        Smart map-based filtering near colleges and offices.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Search className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Advanced Filters
                      </h3>
                      <p className="text-muted-foreground">
                        Filter by price, amenities, room type, and preferences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Star className="text-neon-yellow mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Reviews & Ratings
                      </h3>
                      <p className="text-muted-foreground">
                        Community-driven reviews and ratings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===== TEAM MEMBERS (ONLY ADDITION) ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-panel p-8 rounded-lg border border-border/50"
            >
              <div className="flex items-center gap-2 mb-6">
                <Users size={24} className="text-neon-violet" />
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
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="glass-panel p-5 rounded-lg border border-border/30 hover:border-neon-violet/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-neon-violet mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-neon-pink font-medium mb-3">
                      {member.role}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10"
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

export default Roomigo;
