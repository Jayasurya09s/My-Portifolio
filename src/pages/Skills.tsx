import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const skillCategories = {
  Frontend: [
    'React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript',
    'HTML5', 'CSS3', 'Tailwind CSS', 'Material-UI', 'Bootstrap', 
    'Sass/SCSS', 'Redux', 'Zustand', 'React Query', 'Framer Motion',
    'Three.js', 'D3.js', 'WebGL', 'Progressive Web Apps'
  ],
  Backend: [
    'Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'FastAPI',
    'Java', 'Spring Boot', 'Go', 'Rust', 'GraphQL', 'REST APIs',
    'Socket.io', 'WebSockets', 'Microservices', 'Serverless'
  ],
  'AI/ML': [
    'TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'OpenCV',
    'Natural Language Processing', 'Computer Vision', 'Deep Learning',
    'Neural Networks', 'Transformers', 'Hugging Face', 'LangChain',
    'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'YOLO', 'GPT Models'
  ],
  Blockchain: [
    'Ethereum', 'Solidity', 'Web3.js', 'Ethers.js', 'Hardhat',
    'Truffle', 'Smart Contracts', 'DeFi', 'NFTs', 'IPFS',
    'Hyperledger', 'Polygon', 'BSC', 'Layer 2 Solutions'
  ],
  'Cloud/DevOps': [
    'AWS', 'Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes',
    'Jenkins', 'GitHub Actions', 'GitLab CI/CD', 'Terraform',
    'Ansible', 'Nginx', 'Apache', 'Linux', 'CI/CD Pipelines',
    'Monitoring & Logging', 'CloudFormation'
  ],
  Database: [
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Cassandra',
    'DynamoDB', 'Firebase', 'Supabase', 'Elasticsearch',
    'Neo4j', 'SQLite', 'Oracle', 'SQL Server'
  ],
  Mobile: [
    'React Native', 'Flutter', 'Swift', 'SwiftUI', 'Kotlin',
    'Android Studio', 'Xcode', 'Expo', 'Ionic',
    'Mobile UI/UX', 'App Store Deployment'
  ],
  Cybersecurity: [
    'Penetration Testing', 'Ethical Hacking', 'OWASP Top 10',
    'Network Security', 'Cryptography', 'Security Auditing',
    'Vulnerability Assessment', 'Burp Suite', 'Metasploit',
    'Wireshark', 'Kali Linux', 'Security Best Practices'
  ],
  'Tools & Others': [
    'Git', 'GitHub', 'GitLab', 'Bitbucket', 'VS Code',
    'IntelliJ IDEA', 'Postman', 'Figma', 'Adobe XD',
    'Jira', 'Confluence', 'Slack', 'Notion', 'Agile/Scrum'
  ]
};

export default function Skills() {
  useSmoothScroll();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = Object.entries(skillCategories).reduce((acc, [category, skills]) => {
    const filteredSkills = skills.filter(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length > 0) {
      acc[category] = filteredSkills;
    }
    return acc;
  }, {} as Record<string, string[]>);

  const displayCategories = selectedCategory
    ? { [selectedCategory]: skillCategories[selectedCategory] }
    : filteredCategories;

  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <CustomCursor />
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 mb-6"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2" size={18} />
              Back
            </Button>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-neon-blue text-glow-blue">Complete</span>{' '}
              <span className="text-neon-violet text-glow-violet">Tech Stack</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mb-8">
              A comprehensive overview of my technical skills across multiple domains
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neon-cyan" size={20} />
                <Input
                  type="text"
                  placeholder="Search technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-space-deeper border-neon-blue/30 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground"
                />
              </div>
              {selectedCategory && (
                <Button
                  onClick={() => setSelectedCategory(null)}
                  variant="outline"
                  className="border-neon-violet text-neon-violet hover:bg-neon-violet/10"
                >
                  Clear Filter
                </Button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {Object.keys(skillCategories).map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  size="sm"
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={selectedCategory === category
                    ? 'bg-neon-blue text-space-dark border-neon-blue'
                    : 'border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-8">
            {Object.entries(displayCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <Card className="glass-panel border-border/50 hover:border-neon-cyan/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl sm:text-3xl">
                      <span 
                        className="text-neon-cyan"
                        style={{ textShadow: '0 0 20px hsl(var(--neon-cyan))' }}
                      >
                        {category}
                      </span>
                      <span className="text-muted-foreground text-lg ml-4">
                        ({skills.length} skills)
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.02 
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="text-sm sm:text-base py-2 px-4 border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:border-neon-cyan/70 transition-all duration-300 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <Card className="glass-panel border-neon-violet/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-neon-violet mb-4">
                  Always Learning
                </h3>
                <p className="text-muted-foreground text-lg">
                  Technology never stops evolving, and neither do I. 
                  Currently exploring emerging technologies in Web3, Quantum Computing, and Advanced AI.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
