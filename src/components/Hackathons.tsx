import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Medal, ExternalLink, FileText, Code } from 'lucide-react';

const hackathons = [
  {
    title: 'Smart India Hackathon 2025',
    position: 'Internal Round Selection',
    status: 'Qualified for Nationals',
    project: 'Problem Solving — Team Project',
    date: '2025',
    description: 'Qualified for national-level SIH finals through college internal rounds.',
    icon: Trophy,
    color: 'neon-blue',
    type: 'Qualified',
    links: {
      project: '#',
      demo: '#',
      certificate: '#',
    }
  },
  {
    title: 'CodeUtsava 9.0 — NIT Raipur',
    position: 'Certificate of Participation',
    status: 'National Level Hackathon',
    project: 'Live Demo — Problem Solving',
    date: '2024',
    description: 'Participated in India’s top-tier national hackathon with a live project demo.',
    icon: Award,
    color: 'neon-violet',
    type: 'Certified',
    links: {
      project: 'https://brahmacoders.vercel.app/',
      demo: '#',
      certificate: '#',
    }
  },
  {
    title: 'CypherQuest Hackathon',
    position: 'EcoAI — Participant',
    status: 'Certificate of Participation',
    project: 'EcoAI — AI Prompt Optimizer',
    date: '2024',
    description: 'Developed EcoAI, a sustainable prompt optimization tool to reduce token cost & carbon.',
    icon: Medal,
    color: 'neon-cyan',
    type: 'Certified',
    links: {
      project: 'https://github.com/anshu2k24/enhanced-prompt',
      demo: '#',
      certificate: '#',
    }
  },
  {
    title: 'MakerBlitz Hackathon',
    position: 'Appreciation Prize',
    status: '🥇 Hardware Innovation',
    project: 'Glider — Autonomous Stabilization',
    date: '2024',
    description: 'Built an autonomous stabilization system for a custom-designed glider.',
    icon: Trophy,
    color: 'neon-green',
    type: 'Winner',
    links: {
      project: '#',
      demo: '#',
      certificate: '#',
    }
  },
  {
    title: 'ByteXync Hackathon',
    position: 'Certificate of Participation',
    status: 'Tech Innovation',
    project: 'UniTech — Team Project',
    date: '2024',
    description: 'Developed UniTech, a unified student productivity/utility solution.',
    icon: Award,
    color: 'neon-pink',
    type: 'Certified',
    links: {
      project: '#',
      demo: '#',
      certificate: '#',
    }
  },
  {
    title: 'Confluence Hackathon',
    position: 'Certificate of Participation',
    status: 'Tech Event',
    project: 'StudyAI — Learning Assistant',
    date: '2023',
    description: 'Created StudyAI, an AI-powered note analyzer and study companion.',
    icon: Medal,
    color: 'neon-cyan',
    type: 'Certified',
    links: {
      project: '#',
      demo: '#',
      certificate: '#',
    }
  },
  {
    title: 'TechTrek Hackathon',
    position: 'Certificate of Participation',
    status: 'Tech Event',
    project: 'Roomigo — PG Finder',
    date: '2024',
    description: 'Built Roomigo — PG/Hostel accommodation finder with real-time listing features.',
    icon: Award,
    color: 'neon-violet',
    type: 'Certified',
    links: {
      project: '#',
      demo: '#',
      certificate: '#',
    }
  },
];

export const Hackathons = () => {
  return (
    <section id="hackathons" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-violet text-glow-violet">Hackathon</span>{' '}
            <span className="text-neon-cyan text-glow-cyan">Achievements</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world innovations & team accomplishments across major hackathons
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackathons.map((hackathon, index) => {
            const Icon = hackathon.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-panel border-border/50 hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${hackathon.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1 h-1 bg-${hackathon.color} rounded-full`}
                        style={{
                          left: `${10 + i * 25}%`,
                          top: `${20 + i * 15}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <Icon 
                        size={44} 
                        className={`text-${hackathon.color} group-hover:scale-110 transition-transform`}
                      />
                      <div className="text-right">
                        <Badge variant="outline" className={`border-${hackathon.color}/50 text-${hackathon.color} mb-2`}>
                          {hackathon.date}
                        </Badge>
                        <Badge className={`bg-${hackathon.color}/20 text-${hackathon.color} border-${hackathon.color}/30`}>
                          {hackathon.type}
                        </Badge>
                      </div>
                    </div>

                    <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">
                      {hackathon.title}
                    </CardTitle>

                    <CardDescription className={`text-${hackathon.color} font-semibold text-base mb-1`}>
                      {hackathon.position}
                    </CardDescription>

                    <Badge variant="outline" className="w-fit border-neon-cyan/40 text-neon-cyan">
                      {hackathon.status}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project:</p>
                      <p className="text-neon-cyan font-medium">{hackathon.project}</p>
                    </div>

                    <p className="text-sm text-muted-foreground">{hackathon.description}</p>

                    <div className="flex gap-2 pt-2">
                      <Button size="sm" variant="outline" className={`flex-1 border-${hackathon.color} text-${hackathon.color}`} asChild>
                        <a href={hackathon.links.project} target="_blank"><Code size={14}/> Project</a>
                      </Button>

                      <Button size="sm" className="flex-1 bg-neon-blue text-space-dark hover:bg-neon-cyan" asChild>
                        <a href={hackathon.links.demo} target="_blank"><ExternalLink size={14}/> Demo</a>
                      </Button>

                      <Button size="sm" variant="outline" className="flex-1 border-neon-violet text-neon-violet" asChild>
                        <a href={hackathon.links.certificate} target="_blank"><FileText size={14}/> Cert</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
