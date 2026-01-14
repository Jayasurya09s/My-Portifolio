import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Mail, Table, ShieldCheck, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const GmailToSheets = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />

      <div className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/">
            <Button variant="outline" className="mb-8 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex gap-2 mb-4">
                <Badge className="bg-neon-blue/20 text-neon-blue">Automation</Badge>
                <Badge className="bg-neon-cyan/20 text-neon-cyan">APIs</Badge>
                <Badge className="bg-neon-violet/20 text-neon-violet">Backend</Badge>
              </div>

              <h1 className="text-5xl font-bold mb-6">
                <span className="text-neon-cyan text-glow-cyan">Gmail → Google Sheets</span>{' '}
                <span className="text-neon-blue text-glow-blue">Automation</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                A secure, idempotent Python automation system that reads unread Gmail emails,
                extracts structured data, logs them into Google Sheets, and prevents duplicates
                using persistent state tracking.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Python',
                  'Gmail API',
                  'Google Sheets API',
                  'OAuth 2.0',
                  'FastAPI',
                  'State Persistence',
                ].map((t) => (
                  <Badge key={t} variant="outline" className="border-neon-cyan/50 text-neon-cyan">
                    {t}
                  </Badge>
                ))}
              </div>

              <Button asChild className="bg-neon-cyan text-space-dark hover:bg-neon-blue">
                <a href="https://github.com/Jayasurya09s/gmail-to-sheets" target="_blank" rel="noreferrer">
                  <Github size={18} className="mr-2" />
                  View on GitHub
                </a>
              </Button>
            </motion.div>

            {/* Features */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Key Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong>Unread Email Processing</strong> – Automatically scans unread inbox emails</li>
                <li><strong>Duplicate Prevention</strong> – Message ID tracking via persistent state</li>
                <li><strong>OAuth 2.0 Security</strong> – Secure Gmail & Sheets authentication</li>
                <li><strong>HTML → Text Parsing</strong> – Cleans and sanitizes email content</li>
                <li><strong>Fault Tolerant</strong> – Safe execution even on partial failures</li>
                <li><strong>Idempotent Design</strong> – Safe to run multiple times</li>
              </ul>
            </section>

            {/* Architecture */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Architecture</h2>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 rounded-lg border border-border/40">
                  <Mail className="text-neon-blue mb-2" />
                  <p className="font-medium">Gmail API</p>
                  <p className="text-sm text-muted-foreground">Reads unread emails securely</p>
                </div>

                <div className="p-4 rounded-lg border border-border/40">
                  <Server className="text-neon-cyan mb-2" />
                  <p className="font-medium">Python Automation</p>
                  <p className="text-sm text-muted-foreground">Parsing, state & orchestration</p>
                </div>

                <div className="p-4 rounded-lg border border-border/40">
                  <Table className="text-neon-violet mb-2" />
                  <p className="font-medium">Google Sheets</p>
                  <p className="text-sm text-muted-foreground">Structured row-based logging</p>
                </div>
              </div>

              <pre className="text-sm bg-black/30 rounded-md p-4 border border-border/30 overflow-x-auto">
{`
┌────────────┐   OAuth 2.0   ┌──────────────────┐   Sheets API  ┌────────────┐
│   Gmail    │ ────────────> │ Python Automation│ ────────────> │ Google     │
│  Inbox     │               │ Script           │               │ Sheets     │
└────────────┘               └──────────────────┘               └────────────┘`}
              </pre>
            </section>

            {/* OAuth & State */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Security & State Management</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>OAuth 2.0 Installed App Flow</li>
                <li>Access & refresh tokens stored locally</li>
                <li>State persistence via <code>state.json</code></li>
                <li>Message-ID based idempotency</li>
                <li>No credentials or tokens committed to Git</li>
              </ul>
            </section>

            {/* Video Section */}
            <section className="glass-panel p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Project Walkthrough</h2>
              <p className="text-muted-foreground mb-4">
                End-to-end screen recording demonstrating Gmail ingestion, Google Sheets logging,
                duplicate prevention, and re-run behavior.
              </p>

              <div className="rounded-lg overflow-hidden border border-border/40">
                <video
                  src="/videos/gmail-to-sheets-demo.mp4"
                  controls
                  className="w-full"
                />
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GmailToSheets;
