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
  Sprout,
  Cloud,
  BarChart3,
  Phone,
  AlertTriangle,
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
    role: "Team Lead| full Stack Developer| IOT Specialist",
  },
  {
    name: "Hemaprasad G",
    github: "https://github.com/Hemaprasad2006",
    linkedin: "https://www.linkedin.com/in/hemaprasad-g-604465325/",
    role: " Data Scientist",
  },
  {
    name: "Pragun M Pradeep",
    github: "https://github.com/pragun15",
    linkedin: "https://www.linkedin.com/in/pragun-pradeep-72685b373/",
    role: " AI Engineer",
  },
  {
    name: "Vikram Bandari",
    github: "https://github.com/Bandari-Vikram",
    linkedin: "https://www.linkedin.com/in/bandari-vikram-129a17325/",
    role: "Frontend Developer",
  },
];

const CropMentor = () => {
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
                <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                  AI + IoT Innovation
                </Badge>
                <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                  Project Pending
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-green text-glow-green">
                  Crop Mentor
                </span>{' '}
                <span className="text-neon-cyan text-glow-cyan">
                  — AI-driven Agritech Platform
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                An AI-driven agritech system offering soil analysis, crop
                selection, IoT sensors, fertilizer optimization, voice IVR,
                yield prediction, and market insights using React PWA,
                FastAPI, Firebase, and ML models.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  'React PWA',
                  'FastAPI',
                  'Firebase',
                  'ML Models',
                  'IoT Sensors',
                ].map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="border-neon-cyan/50 text-neon-cyan"
                  >
                    {tech}
                  </Badge>
                ))}
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
                      className="bg-neon-green text-space-white hover:bg-neon-cyan"
                    >
                      <a
                        href="https://github.com/Jayasurya09s/Yodha"
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
                    <Sprout className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Intelligent Crop Selection
                      </h3>
                      <p className="text-muted-foreground">
                        AI-powered recommendations for optimal crop selection
                        based on soil, weather, and market demand.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Cloud className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        IoT Soil Sensors
                      </h3>
                      <p className="text-muted-foreground">
                        Real-time monitoring of soil moisture, pH, nutrients,
                        and environmental conditions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <BarChart3 className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Yield Prediction
                      </h3>
                      <p className="text-muted-foreground">
                        Machine learning models predict crop yields and
                        optimization strategies.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="text-neon-pink mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Voice IVR System
                      </h3>
                      <p className="text-muted-foreground">
                        Multilingual voice interface for farmers without
                        internet dependency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===== TEAM MEMBERS (ADDED, ONLY ADDITION) ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
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
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="glass-panel p-5 rounded-lg border border-border/30 hover:border-neon-cyan/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-neon-green mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-neon-cyan font-medium mb-3">
                      {member.role}
                    </p>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-neon-green text-neon-green hover:bg-neon-green/10"
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

export default CropMentor;
