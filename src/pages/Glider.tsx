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
  Award,
  Target,
  Cpu,
  Radio,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ===== TEAM DATA (ADDED) ===== */
const teammates = [
  {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24/",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
    role: "Team Lead | Avionics Control",
  },
  {
    name: "JAYANTH MIDDE",
    github: "https://github.com/Jayasurya09s",
    linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
    role: "Hardware & Fabrication | Calculations",
  },
  {
    name: "Dhruva K R",
    github: "https://github.com/Dhruva-0812/",
    linkedin: "https://www.linkedin.com/in/dhruva-k-r-a448a934a/",
    role: "Sensor Integration | Design",
  },
  {
    name: "Aman Kumar Singh",
    github: "https://github.com/AmanSingh007coder",
    linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    role: "Sensor Integration | Design",
  },
];

const Glider = () => {
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
                  Robotics
                </Badge>
                <Badge className="bg-neon-yellow/20 text-neon-yellow border-neon-yellow/30">
                  🥇 Appreciation Prize
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-yellow text-glow-yellow">
                  Glider
                </span>{' '}
                <span className="text-neon-orange text-glow-orange">
                  — Autonomous Flight Stabilization
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                An autonomous stabilization system for a custom-built glider
                using the MPU6050 IMU to compute real-time pitch and roll, with
                SG90 servos correcting flight control surfaces.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  'Arduino Uno',
                  'MPU6050',
                  'SG90 Servo',
                  'Control Systems',
                  'Embedded',
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
                    <Target className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Objective
                      </h3>
                      <p className="text-muted-foreground">
                        Autonomous flight stabilization using real-time sensor
                        feedback and servo control.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Cpu className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Hardware
                      </h3>
                      <p className="text-muted-foreground">
                        Arduino Uno, MPU6050 IMU, SG90 servos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Radio className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Control System
                      </h3>
                      <p className="text-muted-foreground">
                        PID-based real-time pitch & roll stabilization.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Award className="text-neon-yellow mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Achievement
                      </h3>
                      <p className="text-muted-foreground">
                        Appreciation Prize at MakerBlitz Hackathon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== TEAM MEMBERS (ADDED) ===== */}
              <div className="border-t border-border/50 pt-8 mt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-6">
                  Team Members
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
                  {teammates.map((member) => (
                    <div
                      key={member.name}
                      className="glass-panel p-5 rounded-lg border border-border/40"
                    >
                      <p className="text-lg font-semibold text-neon-green">
                        {member.name}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.role}
                      </p>

                      <div className="flex gap-4 text-sm">
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-neon-cyan"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-neon-blue"
                        >
                          <Linkedin size={16} />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ===== IMAGE SECTION ===== */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <img
                src="/glider1.jpeg"
                alt="Glider Project - Coming Soon"
                className="rounded-lg border border-border/50 w-full max-w-2xl mx-auto"
              />
              <img
                src="/glider2.jpeg"
                alt="Glider Project - Coming Soon"
                className="rounded-lg border border-border/50 w-full max-w-2xl mx-auto"
              />
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Detailed documentation and media coming soon
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Glider;
