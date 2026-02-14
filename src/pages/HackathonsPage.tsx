import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Search, Trophy, Award, Medal, ExternalLink, FileText, Code } from 'lucide-react';

import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { NebulaBackground } from '@/components/NebulaBackground';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { hackathonsData } from '@/data/hackathons';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const iconMap = {
  Trophy,
  Award,
  Medal,
} as const;

export default function HackathonsPage() {
  useSmoothScroll();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const typeOptions = useMemo(() => {
    const set = new Set<string>();
    hackathonsData.forEach((hackathon) => {
      if (hackathon.type) {
        set.add(hackathon.type);
      }
    });
    return ['All', ...Array.from(set)];
  }, []);

  const filteredHackathons = hackathonsData.filter((hackathon) => {
    const matchesType = selectedType === 'All' || hackathon.type === selectedType;

    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      return matchesType;
    }

    const fields = [
      hackathon.title,
      hackathon.position,
      hackathon.status,
      hackathon.project,
      hackathon.date,
      hackathon.description,
      hackathon.type,
    ];

    const matchesQuery = fields.some((field) => field?.toLowerCase().includes(query));
    return matchesType && matchesQuery;
  });

  return (
    <div className="min-h-screen relative">
      <NebulaBackground />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/">
              <Button
                variant="outline"
                className="group border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300"
              >
                <Home className="w-4 h-4 mr-2 group-hover:text-neon-cyan transition-colors" />
                <span className="group-hover:text-neon-cyan transition-colors">Back to Home</span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-neon-violet via-neon-cyan to-neon-violet bg-clip-text text-transparent">
                Hackathon Archive
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse every hackathon, filter by type, and search by project or year
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search by hackathon name, project, or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 glass-panel border-primary/30 focus:border-primary text-foreground placeholder:text-muted-foreground text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-3 px-4">
              {typeOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                      : 'glass-panel border-border/50 hover:border-primary/50 hover:bg-primary/10 text-foreground'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHackathons.map((hackathon, index) => {
              const Icon = iconMap[hackathon.icon as keyof typeof iconMap] ?? Award;
              return (
                <motion.div
                  key={`${hackathon.title}-${hackathon.date}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full glass-panel border-border/50 hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br from-${hackathon.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(4)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`absolute w-1 h-1 bg-${hackathon.color} rounded-full`}
                          style={{
                            left: `${10 + i * 25}%`,
                            top: `${20 + i * 15}%`,
                          }}
                          animate={{ y: [0, -15, 0], opacity: [0, 0.6, 0] }}
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
                        <Icon size={44} className={`text-${hackathon.color} group-hover:scale-110 transition-transform`} />
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
                        {hackathon.links.project !== '#' && (
                          <Button size="sm" variant="outline" className={`flex-1 border-${hackathon.color} text-${hackathon.color}`} asChild>
                            <a
                              href={hackathon.links.project}
                              target={hackathon.links.project.startsWith('http') ? '_blank' : undefined}
                              rel={hackathon.links.project.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              <Code size={14} /> Project
                            </a>
                          </Button>
                        )}

                        {hackathon.links.demo !== '#' && (
                          <Button size="sm" className="flex-1 bg-neon-blue text-space-dark hover:bg-neon-cyan" asChild>
                            <a
                              href={hackathon.links.demo}
                              target={hackathon.links.demo.startsWith('http') ? '_blank' : undefined}
                              rel={hackathon.links.demo.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              <ExternalLink size={14} /> Demo
                            </a>
                          </Button>
                        )}

                        {hackathon.links.certificate !== '#' && (
                          <Button size="sm" variant="outline" className="flex-1 border-neon-violet text-neon-violet" asChild>
                            <a
                              href={hackathon.links.certificate}
                              target={hackathon.links.certificate.startsWith('http') ? '_blank' : undefined}
                              rel={hackathon.links.certificate.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              <FileText size={14} /> Cert
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
