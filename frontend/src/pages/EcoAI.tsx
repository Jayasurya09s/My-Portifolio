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
  Leaf,
  Zap,
  Chrome,
  Server,
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ================= TEAM DATA ================= */
const teammates = [
  {
    name: 'Anshuman Pati',
    role: 'Project Lead',
    github: 'https://github.com/anshu2k24',
  },
  {
    name: 'Midde Jayanth',
    role: 'Frontend Developer',
    github: 'https://github.com/Jayasurya09s',
  },
  {
    name: 'Aman Kumar Singh',
    role: 'Frontend Developer',
    github: 'https://github.com/AmanSingh007coder',
  },
];

const EcoAI = () => {
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
          {/* BACK BUTTON */}
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
                <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">
                  AI
                </Badge>
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">
                  CypherQuest Hackathon
                </Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-green text-glow-green">
                  EcoAI
                </span>{' '}
                <span className="text-neon-cyan text-glow-cyan">
                  — Sustainable AI Prompt Optimizer
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A sustainable AI platform that optimizes user prompts to save
                tokens, reduce processing time, and minimize carbon footprint.
                Includes a Chrome extension and server-side optimizer.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {[
                  'Prompt Optimization',
                  'Chrome Extension',
                  'Node.js',
                  'Firebase',
                ].map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-neon-cyan/50 text-neon-cyan"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* FIXED GITHUB BUTTON */}
              <div className="flex gap-4 mb-12">
                <Button
                  asChild
                  className="bg-neon-green text-white hover:bg-neon-cyan hover:text-black shadow-[0_0_20px_rgba(0,255,200,0.6)] hover:shadow-[0_0_30px_rgba(0,255,255,0.9)] transition"
                >
                  <a
                    href="https://github.com/anshu2k24/enhanced-prompt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* PROJECT OVERVIEW */}
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
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Leaf className="text-neon-green mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Sustainability Focus
                      </h3>
                      <p className="text-muted-foreground">
                        Reduces token usage and AI carbon footprint.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Chrome className="text-neon-blue mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Chrome Extension
                      </h3>
                      <p className="text-muted-foreground">
                        Optimizes prompts before reaching AI services.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-3">
                    <Server className="text-neon-violet mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Server-side Optimizer
                      </h3>
                      <p className="text-muted-foreground">
                        Context-preserving prompt compression.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Zap className="text-neon-yellow mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-1">
                        Performance Impact
                      </h3>
                      <p className="text-muted-foreground">
                        Faster responses, lower costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* TECH STACK */}
              <div className="border-t border-border/50 pt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-4">
                  Technical Stack
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    ['Frontend', 'Chrome Extension'],
                    ['Backend', 'Node.js'],
                    ['Database', 'Firebase'],
                    ['AI/ML', 'NLP Models'],
                  ].map(([title, value]) => (
                    <div
                      key={title}
                      className="glass-panel p-4 rounded-lg border border-border/30 text-center"
                    >
                      <p className="text-neon-cyan font-semibold">
                        {title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* TEAMMATES */}
              <div className="border-t border-border/50 pt-8 mt-8">
                <h3 className="text-xl font-bold text-neon-cyan mb-6">
                  Team Members
                </h3>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {teammates.map((member) => (
                    <div
                      key={member.name}
                      className="glass-panel p-5 rounded-lg border border-border/40 hover:border-neon-cyan transition"
                    >
                      <p className="text-lg font-semibold text-neon-green">
                        {member.name}
                      </p>
                      <p className="text-sm text-muted-foreground mb-3">
                        {member.role}
                      </p>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-green transition text-sm"
                      >
                        <Github size={16} />
                        GitHub Profile
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* IMPACT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-panel p-8 rounded-lg border border-border/50"
            >
              <h3 className="text-xl font-bold text-neon-cyan mb-4">
                Impact & Results
              </h3>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-neon-green">
                    30–50%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Token Reduction
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-neon-cyan">
                    40%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Faster Processing
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-neon-violet">
                    Lower
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Carbon Footprint
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcoAI;
