import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BookOpen, Brain, Lightbulb, Sparkles, Users, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const teammates = [
  {
    name: "Anshuman Pati",
    github: "https://github.com/anshu2k24",
    linkedin: "https://www.linkedin.com/in/anshuman-pati-5575bb34a/",
    role: "Project Lead | Backend developer",
  },
  {
    name: "Midde Jayanth",
    github: "https://github.com/Jayasurya09s",
    linkedin: "https://www.linkedin.com/in/jayanth-midde-968150321/",
    role: "Frontend developer",
  },
  {
    name: "Mohammad Bilal A",
    github: "https://github.com/Bilal-biryani",
    linkedin: "https://www.linkedin.com/in/mohammad-bilal-a-4bb052340/",
    role: "AI specialist",
  },
];

const StudyAI = () => {
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
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                  Full Stack
                </Badge>
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                  Confluence Hackathon
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-cyan text-glow-cyan">StudyAI</span>{' '}
                <span className="text-neon-blue text-glow-blue">— AI-Powered Learning Assistant</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                An intelligent study companion that analyzes notes, extracts key insights, and helps students learn more effectively through AI-powered summaries, Q&A generation, and interactive flashcards.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  React
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Node.js
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Tailwind
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  MongoDB
                </Badge>
                <Badge variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                  Firebase
                </Badge>
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
                    <Brain className="text-neon-cyan mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Analysis</h3>
                      <p className="text-muted-foreground">
                        Leverages advanced AI to analyze study materials, extract key concepts, and generate meaningful insights for better understanding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Note Organization</h3>
                      <p className="text-muted-foreground">
                        Smart note management system that organizes study materials by topics, subjects, and importance levels.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Smart Summaries</h3>
                      <p className="text-muted-foreground">
                        Automatically generates concise summaries of lengthy notes, helping students grasp core concepts quickly.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Sparkles className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Learning</h3>
                      <p className="text-muted-foreground">
                        Q&A generation and flashcards that make studying engaging and help with active recall and retention.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border/50 pt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">Key Features</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>AI-powered note analyzer that extracts key concepts and insights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>Automatic summary generation for quick review and understanding</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>Q&A generation from notes for self-testing and exam preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>Interactive flashcards for spaced repetition learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>Smart organization by subjects, topics, and difficulty levels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-neon-cyan mt-1">•</span>
                    <span>Progress tracking and study analytics to monitor learning</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border/50 pt-8 mt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">Technical Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Frontend</p>
                    <p className="text-sm text-muted-foreground mt-1">React</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Styling</p>
                    <p className="text-sm text-muted-foreground mt-1">Tailwind CSS</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Backend</p>
                    <p className="text-sm text-muted-foreground mt-1">Node.js</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Database</p>
                    <p className="text-sm text-muted-foreground mt-1">MongoDB</p>
                  </div>
                  <div className="glass-panel p-4 rounded-lg border border-border/30 text-center">
                    <p className="text-neon-cyan font-semibold">Auth</p>
                    <p className="text-sm text-muted-foreground mt-1">Firebase</p>
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
              <h3 className="text-xl font-bold text-neon-cyan mb-4">Learning Enhancements</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-cyan mb-2">📝</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Smart Summaries</h4>
                  <p className="text-sm text-muted-foreground">
                    Condense lengthy notes into concise, actionable summaries
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-blue mb-2">❓</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Q&A Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Create practice questions automatically from your notes
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neon-violet mb-2">🎴</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Flashcards</h4>
                  <p className="text-sm text-muted-foreground">
                    Interactive flashcards for effective spaced repetition
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
                <Users size={24} className="text-neon-cyan" />
                <h3 className="text-2xl font-bold text-neon-cyan">Team Members</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {teammates.map((teammate, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="glass-panel p-5 rounded-lg border border-border/30 hover:border-neon-cyan/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-neon-cyan mb-1">{teammate.name}</h4>
                    <p className="text-sm text-neon-blue font-medium mb-3">{teammate.role}</p>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                        asChild
                      >
                        <a href={teammate.github} target="_blank" rel="noopener noreferrer">
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
                        <a href={teammate.linkedin} target="_blank" rel="noopener noreferrer">
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

export default StudyAI;
