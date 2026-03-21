import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Medal, ExternalLink, FileText, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePortfolioData } from '@/hooks/usePortfolioData';

const iconMap = {
  Trophy,
  Award,
  Medal,
} as const;

export const Hackathons = () => {
  const { hackathons } = usePortfolioData();
  const recentHackathons = hackathons.slice(0, 6);

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
          {recentHackathons.map((hackathon, index) => {
            const Icon = iconMap[hackathon.icon as keyof typeof iconMap] ?? Award;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full glass-panel border-border/50 hover:border-neon-cyan/50 transition-all duration-300 group relative overflow-hidden flex flex-col">
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

                  <CardHeader className="relative z-10 min-h-[260px]">
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

                    <CardTitle
                      className="text-xl sm:text-2xl text-foreground mb-2 min-h-[72px]"
                      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {hackathon.title}
                    </CardTitle>

                    <CardDescription
                      className={`text-${hackathon.color} font-semibold text-base mb-1 min-h-[48px]`}
                      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {hackathon.position}
                    </CardDescription>

                    <Badge variant="outline" className="w-fit border-neon-cyan/40 text-neon-cyan">
                      {hackathon.status}
                    </Badge>
                  </CardHeader>

                  <CardContent className="space-y-4 relative z-10 flex flex-col flex-1">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project:</p>
                      <p
                        className="text-neon-cyan font-medium min-h-[48px]"
                        style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                      >
                        {hackathon.project}
                      </p>
                    </div>

                    <p
                      className="text-sm text-muted-foreground min-h-[84px]"
                      style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {hackathon.description}
                    </p>

                    <div className="flex gap-2 pt-2 mt-auto">
                      {hackathon.links.project !== '#' && (
                        <Button
                          size="sm"
                          variant="outline"
                          className={`flex-1 border-${hackathon.color} text-${hackathon.color}`}
                          asChild
                        >
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

        {hackathons.length > 6 && (
          <div className="flex justify-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10"
            >
              <Link to="/hackathons">More Hackathons</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
