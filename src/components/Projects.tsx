import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FileText } from 'lucide-react';
import { useState } from 'react';

const projects = [
    {
  title: 'JAR - AI Artwork Ownership System',
  description:
    'A blockchain-ready verification framework ensuring authorship and originality of AI-generated content. Includes fingerprinting, private-proof mode, prompt-to-identity binding, and watermarking. Designed for secure proof-of-human + proof-of-art validation.',
  tags: ['Blockchain-ready', 'Fingerprinting', 'Watermarking', 'AI Verification'],
  category: 'AI',
  github: 'https://github.com/Jayasurya09s/BrahmaCoders',
  demo: 'https://brahmacoders.vercel.app/',
  
  gradient: 'from-neon-pink to-neon-violet',
},

   {
  title: 'MyNotes — Full Stack Notes Application',
  description:
    'A modern full-stack notes application built with React, Node.js, Express, and MongoDB. Allows users to create, edit, and manage notes with cloud sync for authenticated users and local storage for guests.',
  tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
  category: 'Full Stack',
  github: 'https://github.com/Jayasurya09s/MyNotes',
  demo: 'https://my-notes-jka8.vercel.app/',
  caseStudy: '#',
  gradient: 'from-neon-blue to-neon-cyan',
},
{
  title: 'NeroBot — Underwater Robotics System',
  description:
    'A jellyfish-inspired underwater robot built to detect and collect marine plastic pollution using YOLO-based object detection, Arduino-driven actuation, and a lightweight SG90-servo grasping mechanism. Developed as part of the Tritonexus team to showcase sustainable robotics with recycled materials.',
  tags: ['YOLO', 'OpenCV', 'Arduino Uno', 'SG90 Servo', 'Robotics'],
  category: 'Robotics',
  github: '#',
  demo: 'https://anshumanpati.vercel.app/projects/nerobot',
  caseStudy: '#',
  gradient: 'from-neon-teal to-neon-green',
},
  {
    title: 'EcoAI',
    description: 'Sustainable AI platform that optimizes user prompts to save tokens, time, and reduce carbon footprint — includes a Chrome extension and server-side optimizer.',
    tags: ['Prompt Optimization', 'Chrome Ext', 'Node.js', 'Firebase'],
    category: 'AI',
    github: 'https://github.com/Jayasurya09s/enhanced-prompt',
    demo: '/projects/ecoai',
    caseStudy: '#',
    gradient: 'from-neon-green to-neon-cyan',
  },
{
  title: 'Glider — Autonomous Flight Stabilization',
  description:
    'An autonomous stabilization system for a custom-built glider using the MPU6050 IMU to compute real-time pitch and roll, with SG90 servos correcting flight control surfaces. Awarded an Appreciation Prize at MakerBlitz for successfully implementing avionics and real-time stabilization.',
  tags: ['Arduino Uno', 'MPU6050', 'SG90 Servo', 'Control Systems', 'Embedded'],
  category: 'Robotics',
  github: '/pendingproject.png',
  demo: '/projects/glider',
  caseStudy: '#',
  gradient: 'from-neon-yellow to-neon-orange',
},
  {
    title: 'StudyAI',
    description: 'AI-powered study assistant that organizes notes, extracts insights and helps students learn more effectively (summaries, Q&A, flashcards).',
    tags: ['React', 'Node.js', 'Tailwind', 'MongoDB', 'Firebase'],
    category: 'Full Stack',
    github: '/pendingproject.png',
    demo: '/projects/studyai',
    caseStudy: '#',
    gradient: 'from-neon-cyan to-neon-blue',
  },
  {
    title: 'User-Level Custom CPU Scheduler',
    description: 'Web-based scheduler visualizer showing live processes, ready queue, Gantt charts, CPU graphs and scheduler comparison with multiple sheduler algorithms.',
    tags: ['React', 'Socket.IO', 'Gantt', 'MERN'],
    category: 'Full Stack',
    github: '#',
    demo: '#',
    caseStudy: '#',
    gradient: 'from-neon-blue to-neon-violet',
  },
  {
  title: 'PCFR — Protecting Clothes From Rain (IoT)',
  description:
    'An IoT system that automatically protects drying clothes when rain is detected. Uses a rain sensor for real-time detection and an SG90 servo controlled by Arduino to pull the drying rod under a protective cover. Built as a low-cost home-automation prototype.',
  tags: ['Arduino Uno', 'Rain Sensor', 'SG90 Servo', 'IoT'],
  category: 'IoT',
  github: '#',
  demo: '#',
  caseStudy: '#',
  gradient: 'from-neon-cyan to-neon-pink',
},



 
];

const categories = ['All', 'AI', 'Full Stack', 'Robotics', 'IoT'];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-blue text-glow-blue">Featured</span>{' '}
            <span className="text-neon-violet text-glow-violet">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cutting-edge applications showcasing innovation across multiple domains
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={selectedCategory === category 
                  ? 'bg-neon-blue text-space-dark border-neon-blue neon-border' 
                  : 'border-neon-violet text-neon-violet hover:bg-neon-violet/10'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card 
                className="group h-full glass-panel border-border/50 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden relative perspective-1000"
                style={{
                  transform: 'perspective(1000px)',
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Glow particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                      style={{
                        left: `${15 + i * 18}%`,
                        top: `${8 + i * 18}%`,
                      }}
                      animate={{
                        y: [0, -18, 0],
                        opacity: [0, 0.5, 0],
                      }}
                      transition={{
                        duration: 2 + i * 0.4,
                        repeat: Infinity,
                        delay: i * 0.25,
                      }}
                    />
                  ))}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl text-neon-cyan group-hover:text-glow-cyan transition-all">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge 
                        key={i} 
                        variant="outline" 
                        className="border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-neon-violet text-neon-violet hover:bg-neon-violet/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`}>
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-neon-blue text-space-dark hover:bg-neon-cyan border-neon-blue"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1" size={16} />
                        Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
                      asChild
                    >
                      <a href={project.caseStudy} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Case Study`}>
                        <FileText size={16} />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
