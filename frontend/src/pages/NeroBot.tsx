import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Target, Leaf, Wrench, Github, Linkedin, ExternalLink } from 'lucide-react';

const teammates = [
  {
    name: 'Anshuman Pati',
    github: 'https://github.com/anshu2k24/',
    linkedin: 'https://www.linkedin.com/in/anshuman-pati-5575bb34a/',
    role: 'Project Lead | Hardware Team Lead',
  },
  {
    name: 'Jayanth Midde',
    github: 'https://github.com/Jayasurya09s',
    linkedin: 'https://www.linkedin.com/in/jayanth-midde-968150321/',
    role: 'Hardware Team',
  },
  {
    name: 'Navya KM',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/navya-km-930483363/',
    role: 'Hardware Team',
  },
  {
    name: 'Dhruva K R',
    github: 'https://github.com/Dhruva-0812/',
    linkedin: 'https://www.linkedin.com/in/dhruva-k-r-a448a934a/',
    role: 'Hardware Team',
  },
  {
    name: 'Nathwani Darshil',
    github: 'https://github.com/Darshil-N',
    linkedin: 'https://www.linkedin.com/in/darshil-nathwani-bba698307/',
    role: 'Software Team Lead',
  },
  {
    name: 'Aman Kumar Singh',
    github: 'https://github.com/AmanSingh007coder',
    linkedin: 'https://www.linkedin.com/in/aman-kumar-singh-be/',
    role: 'Software Team',
  },
  {
    name: 'Musaddik Jamadar',
    github: '#',
    linkedin: 'https://www.linkedin.com/in/musaddik-jamadar-7a5909375/',
    role: 'Software Team',
  },
  {
    name: 'Varsha Nazare',
    github: '#',
    linkedin: '#',
    role: 'Software Team',
  },
];

const NeroBot = () => {
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
                <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30">Robotics</Badge>
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">Marine Cleanup</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-blue text-glow-blue">NeroBot</span>{' '}
                <span className="text-neon-cyan text-glow-cyan">— Underwater Plastic Detection & Grasping</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A jellyfish-inspired underwater robotic prototype that detects marine plastic using vision and performs basic grasping with SG90 servos, built with a sustainability-first approach using recycled parts.
              </p>

              {/* ACTIONS */}
              <div className="flex gap-4 mb-12">
                
                <Button asChild variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
                  <a href="#" aria-disabled>
                    <Github size={18} className="mr-2" />
                    GitHub (soon)
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* FEATURES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-panel p-8 mb-12 rounded-lg border border-border/50"
            >
              <h2 className="text-2xl font-bold text-neon-cyan mb-6">Key Features</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="glass-panel p-5 rounded-lg border border-border/40">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className="text-neon-pink" size={22} />
                    <h3 className="font-semibold">Vision-based Detection</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Detects plastic bottles in video feed using lightweight CV/ML techniques (YOLO planned).</p>
                </div>

                <div className="glass-panel p-5 rounded-lg border border-border/40">
                  <div className="flex items-center gap-3 mb-2">
                    <Cpu className="text-neon-yellow" size={22} />
                    <h3 className="font-semibold">Arduino Control</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Arduino Uno controls servos and motion for collection mechanisms.</p>
                </div>

                <div className="glass-panel p-5 rounded-lg border border-border/40">
                  <div className="flex items-center gap-3 mb-2">
                    <Wrench className="text-neon-violet" size={22} />
                    <h3 className="font-semibold">Servo Grasping</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">SG90 servo-driven gripper performs simple pick-and-hold actions.</p>
                </div>

                <div className="glass-panel p-5 rounded-lg border border-border/40">
                  <div className="flex items-center gap-3 mb-2">
                    <Leaf className="text-neon-green" size={22} />
                    <h3 className="font-semibold">Sustainability Focus</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">Prototype built using recycled components to emphasize eco-friendly design.</p>
                </div>
              </div>
            </motion.div>

            {/* TEAM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass-panel p-8 mb-12 rounded-lg border border-border/50"
            >
              <h2 className="text-2xl font-bold text-neon-cyan mb-6">Team — TritoNexus</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teammates.map((member) => (
                  <div key={member.name} className="glass-panel p-5 rounded-lg border border-border/30 hover:border-neon-cyan/50 transition-all">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                    <p className="text-sm text-neon-cyan font-medium mb-3">{member.role}</p>
                    <div className="flex gap-2">
                      {member.github && member.github !== '#' ? (
                        <Button size="sm" variant="outline" className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10" asChild>
                          <a href={member.github} target="_blank" rel="noopener noreferrer"><Github size={14} className="mr-1" /> GitHub</a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="flex-1 border-border/40 text-muted-foreground cursor-not-allowed" disabled>
                          <Github size={14} className="mr-1" /> GitHub
                        </Button>
                      )}

                      {member.linkedin && member.linkedin !== '#' ? (
                        <Button size="sm" variant="outline" className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10" asChild>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={14} className="mr-1" /> LinkedIn</a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="flex-1 border-border/40 text-muted-foreground cursor-not-allowed" disabled>
                          <Linkedin size={14} className="mr-1" /> LinkedIn
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* MEDIA GALLERY */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass-panel p-8 rounded-lg border border-border/50"
            >
              <h2 className="text-2xl font-bold text-neon-cyan mb-6">Project Gallery & Proof of Work</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Team Photo 1 */}
                <div className="rounded-lg overflow-hidden border border-border/50 hover:border-neon-cyan/50 transition-all">
                  <img
                    src="/nerobot team.jpeg"
                    alt="NeroBot Team - Hardware Division"
                    className="w-full object-contain"
                  />
                  <p className="text-sm text-muted-foreground p-3 bg-space-dark/50">NeroBot Team </p>
                </div>

                {/* Team Photo 2 */}
                <div className="rounded-lg overflow-hidden border border-border/50 hover:border-neon-cyan/50 transition-all">
                  <img
                    src="/nerobot team 2.jpeg"
                    alt="NeroBot Team - Full Team Photo"
                    className="w-full object-contain"
                  />
                  <p className="text-sm text-muted-foreground p-3 bg-space-dark/50">NeroBot Team - Full Team</p>
                </div>
              </div>

              {/* Video Section
              <div className="rounded-lg overflow-hidden border border-border/50 hover:border-neon-cyan/50 transition-all">
                <video
                  width="100%"
                  controls
                  controlsList="nodownload"
                  preload="metadata"
                  autoPlay={false}
                  className="w-full bg-space-dark"
                  poster="/nerobot team.jpeg"
                >
                  <source src="/nerobot proof of work.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-sm text-muted-foreground p-3 bg-space-dark/50">NeroBot - Proof of Work Demo</p>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NeroBot;
