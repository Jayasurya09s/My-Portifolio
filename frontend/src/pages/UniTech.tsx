import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Users, BookOpen, Calendar, CheckCircle, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const teammates = [
  {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
    role: "Project Lead",
  },
  {
    name: "Midde Jayanth",
    github: "https://github.com/Jayasurya09s",
    linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
    role: "Developer",
  },
  {
    name: "Aman Kumar Singh",
    github: "https://github.com/AmanSingh007coder",
    linkedin: "https://www.linkedin.com/in/aman-kumar-singh-be/",
    role: "Developer",
  },
  {
    name: "Nitin",
    github: "https://github.com/hellandheaven2005",
    linkedin: "#",
    role: "Developer",
  },
];

const UniTech = () => {
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
            <Button variant="outline" className="mb-8 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
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
                <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30">
                  Full Stack
                </Badge>
                <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30">
                  ByteXync Hackathon
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-pink text-glow-cyan">UniTech</span>{' '}
                <span className="text-neon-violet text-glow-violet">— Unified Student Productivity Platform</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A comprehensive student productivity and utility solution developed at ByteXync Hackathon. UniTech provides students with an all-in-one platform for managing academic tasks, schedules, resources, and collaboration.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  React
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Node.js
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Express
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Team Project
                </Badge>
              </div>

              <div className="flex gap-4 mb-12">
                <Button asChild className="bg-neon-black text-neon-white hover:bg-neon-violet">
                  <a href="https://github.com/Jayasurya09s/ByteXync-Hunter_Squad" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-8 mb-12 rounded-lg border border-border/50"
            >
              <h2 className="text-2xl font-bold text-neon-cyan mb-6">Project Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="text-neon-pink mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Team Collaboration</h3>
                      <p className="text-muted-foreground">
                        Developed as a team project at ByteXync Hackathon, bringing together multiple student productivity features in one unified platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Academic Management</h3>
                      <p className="text-muted-foreground">
                        Centralized hub for managing assignments, notes, study materials, and academic resources all in one place.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Schedule & Planning</h3>
                      <p className="text-muted-foreground">
                        Smart scheduling system with calendar integration, deadline tracking, and automated reminders for tasks and events.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Task Management</h3>
                      <p className="text-muted-foreground">
                        Intuitive task organization with priority levels, progress tracking, and collaborative features for group projects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">Key Features</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink mt-1">•</span>
                    <span>Unified dashboard for all student productivity tools and utilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink mt-1">•</span>
                    <span>Assignment and deadline tracker with smart notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink mt-1">•</span>
                    <span>Digital note-taking with organization and search capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink mt-1">•</span>
                    <span>Schedule management with calendar view and reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink mt-1">•</span>
                    <span>Resource sharing and collaboration tools for team projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-pink mt-1">•</span>
                    <span>Progress analytics and productivity insights</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border/50 pt-8 mt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">Technical Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Frontend</p>
                    <p className="text-sm text-muted-foreground mt-1">React</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Backend</p>
                    <p className="text-sm text-muted-foreground mt-1">Node.js + Express</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Database</p>
                    <p className="text-sm text-muted-foreground mt-1">MongoDB</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Architecture</p>
                    <p className="text-sm text-muted-foreground mt-1">MERN Stack</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-panel p-8 rounded-lg border border-border/50 mb-12"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-4">Project Goals</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-neon-pink mb-3">Unified Solution</h4>
                  <p className="text-muted-foreground">
                    Consolidate multiple student productivity tools into a single, cohesive platform to reduce app-switching and improve workflow efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-pink mb-3">Student-Centric Design</h4>
                  <p className="text-muted-foreground">
                    Create an intuitive interface specifically designed for student needs, making academic management effortless and accessible.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-pink mb-3">Collaboration Focus</h4>
                  <p className="text-muted-foreground">
                    Enable seamless collaboration between students for group projects, study sessions, and knowledge sharing.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-pink mb-3">Productivity Boost</h4>
                  <p className="text-muted-foreground">
                    Help students stay organized, meet deadlines, and maximize their academic productivity through smart features and reminders.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-panel p-8 rounded-lg border border-border/50"
            >
              <div className="flex items-center gap-2 mb-6">
                <Users size={24} className="text-neon-pink" />
                <h3 className="text-2xl font-bold text-neon-cyan">Team Members</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {teammates.map((teammate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="glass-panel p-5 rounded-lg border border-border/30 hover:border-neon-pink/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-neon-pink mb-1">{teammate.name}</h4>
                    <p className="text-sm text-neon-cyan font-medium mb-3">{teammate.role}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-neon-pink text-neon-pink hover:bg-neon-pink/10"
                        asChild
                      >
                        <a href={teammate.github} target="_blank" rel="noopener noreferrer">
                          <Github size={14} className="mr-1" />
                          GitHub
                        </a>
                      </Button>
                      {teammate.linkedin !== "#" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400/10"
                          asChild
                        >
                          <a href={teammate.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin size={14} className="mr-1" />
                            LinkedIn
                          </a>
                        </Button>
                      )}
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

export default UniTech;
