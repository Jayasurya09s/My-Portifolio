import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal } from 'lucide-react';

const hackathons = [
  {
    title: 'ETHGlobal 2024',
    position: '1st Place - DeFi Track',
    project: 'Decentralized Lending Protocol',
    date: 'March 2024',
    description: 'Built an innovative lending protocol with AI-powered risk assessment',
    icon: Trophy,
    color: 'neon-blue',
  },
  {
    title: 'Google Cloud Hackathon',
    position: '2nd Place - AI/ML Category',
    project: 'Smart City Analytics',
    date: 'February 2024',
    description: 'Real-time city infrastructure optimization using ML models',
    icon: Award,
    color: 'neon-violet',
  },
  {
    title: 'Meta XR Challenge',
    position: 'Top 10 Finalist',
    project: 'VR Education Platform',
    date: 'January 2024',
    description: 'Immersive learning experience with spatial computing',
    icon: Medal,
    color: 'neon-cyan',
  },
  {
    title: 'AWS BuildOn',
    position: 'Winner - Best Use of AWS',
    project: 'Serverless IoT Platform',
    date: 'December 2023',
    description: 'Scalable IoT data processing with AWS Lambda and DynamoDB',
    icon: Trophy,
    color: 'neon-pink',
  },
  {
    title: 'HackMIT',
    position: '3rd Place Overall',
    project: 'AI Code Reviewer',
    date: 'November 2023',
    description: 'Automated code review tool using GPT-4 and static analysis',
    icon: Award,
    color: 'neon-blue',
  },
  {
    title: 'NASA Space Apps',
    position: 'Global Nominee',
    project: 'Climate Data Visualizer',
    date: 'October 2023',
    description: 'Interactive visualization of climate change data from satellites',
    icon: Medal,
    color: 'neon-violet',
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
            Winning projects and innovations from global competitions
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
                <Card className="h-full glass-panel border-border/50 hover:border-neon-cyan/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <Icon 
                        size={40} 
                        className={`text-${hackathon.color} group-hover:scale-110 transition-transform`}
                        style={{ filter: `drop-shadow(0 0 10px hsl(var(--${hackathon.color})))` }}
                      />
                      <Badge variant="outline" className="border-neon-blue/50 text-neon-blue">
                        {hackathon.date}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl sm:text-2xl text-foreground mb-2">
                      {hackathon.title}
                    </CardTitle>
                    <CardDescription className={`text-${hackathon.color} font-semibold text-base`}>
                      {hackathon.position}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Project:</p>
                      <p className="text-neon-cyan font-medium">{hackathon.project}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {hackathon.description}
                    </p>
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
