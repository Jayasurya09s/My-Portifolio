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
  AlertCircle,
  Zap,
  Shield,
  Activity,
  Bell,
  Radio,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const PhoenixSystem = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />

      <div className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/">
            <Button variant="outline" className="mb-8 border-neon-purple text-neon-purple hover:bg-neon-purple/10">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="flex gap-2 mb-4">
                <Badge className="bg-neon-purple/20 text-neon-purple">System Design</Badge>
                <Badge className="bg-neon-pink/20 text-neon-pink">DevOps</Badge>
                <Badge className="bg-neon-cyan/20 text-neon-cyan">Real-time</Badge>
              </div>

              <h1 className="text-5xl font-bold mb-6">
                <span className="text-neon-purple text-glow-purple">Phoenix AI Call Agent</span>{' '}
                <span className="text-neon-pink text-glow-pink">– Resilience System</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                A production-grade AI-powered call processing system with enterprise-level resilience patterns,
                real-time monitoring, and multi-channel alerting. Processes intelligent calls with automatic
                retry policies, circuit breaker protection, and comprehensive logging.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  'Node.js',
                  'React',
                  'Socket.io',
                  'Docker',
                  'System Design',
                  'Resilience Engineering',
                  'Groq LLM',
                  'ElevenLabs',
                ].map((t) => (
                  <Badge key={t} variant="outline" className="border-neon-purple/50 text-neon-purple">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button asChild className="bg-neon-purple text-white hover:bg-neon-pink">
                  <a href="https://github.com/Jayasurya09s/Phoenix-System" target="_blank" rel="noreferrer">
                    <Github size={18} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Key Features */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-purple mb-6">🎯 Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <Zap className="text-neon-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Start/Stop Controls</p>
                    <p className="text-sm text-muted-foreground">Pause and resume call processing with instant state preservation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Radio className="text-neon-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">AI Reply Display</p>
                    <p className="text-sm text-muted-foreground">Real-time Groq LLM responses displayed on dashboard</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Activity className="text-neon-purple flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Audio Playback</p>
                    <p className="text-sm text-muted-foreground">Listen to ElevenLabs-generated natural voice outputs</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-neon-cyan flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Circuit Breaker</p>
                    <p className="text-sm text-muted-foreground">Prevents cascading failures with automatic recovery</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <AlertCircle className="text-neon-pink flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Retry Policy</p>
                    <p className="text-sm text-muted-foreground">Exponential backoff for transient errors (1s, 2s, 4s, 8s)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Bell className="text-neon-purple flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Multi-Channel Alerts</p>
                    <p className="text-sm text-muted-foreground">Email, Telegram, and webhook notifications with throttling</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Architecture */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-purple mb-6">🏗️ System Architecture</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-neon-cyan mb-3">Core Components</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg border border-border/40 bg-black/20">
                      <p className="font-semibold text-neon-purple">Call Processor</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Orchestrates complete workflow: CRM lookup → LLM call → TTS generation
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border/40 bg-black/20">
                      <p className="font-semibold text-neon-purple">Circuit Breaker</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Opens after 3 failures, attempts recovery after 30 seconds
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border/40 bg-black/20">
                      <p className="font-semibold text-neon-purple">Health Checker</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Validates Groq & ElevenLabs availability every 30 seconds
                      </p>
                    </div>
                    <div className="p-4 rounded-lg border border-border/40 bg-black/20">
                      <p className="font-semibold text-neon-purple">Alert Service</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Sends Email, Telegram, and webhook alerts with 5-minute throttling
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neon-cyan mb-3">Data Flow</h3>
                  <pre className="text-xs bg-black/40 rounded-md p-4 border border-border/30 overflow-x-auto">
{`┌──────────────────────────────────────────────┐
│        Phoenix Dashboard (React)              │
│  - Live metrics graphs (Recharts)             │
│  - Service health status                      │
│  - Circuit breaker states                     │
│  - Audio player                               │
└─────────────────┬──────────────────────────────┘
                  │ WebSocket (Socket.io)
                  ▼
┌──────────────────────────────────────────────┐
│    Resilience Server (Node.js:4000)          │
│  - CallProcessor                             │
│  - RetryPolicy (Exponential backoff)         │
│  - CircuitBreaker                            │
│  - HealthChecker                             │
│  - Logger (Files + Google Sheets)            │
│  - AlertService (Email/Telegram/Webhook)    │
└─────────────────┬──────────────────────────────┘
        ┌─────────┼─────────┐
        ▼         ▼         ▼
    ┌────────┐ ┌────────┐ ┌──────────────┐
    │ Groq   │ │Eleven  │ │ Gmail/Tele   │
    │ LLM    │ │ Labs   │ │ gram/Webhook │
    └────────┘ └────────┘ └──────────────┘`}
                  </pre>
                </div>
              </div>
            </section>

            {/* Resilience Patterns */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-purple mb-6">🛡️ Resilience Patterns</h2>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="circuit-breaker" className="border border-border/40 rounded-lg px-4">
                  <AccordionTrigger className="text-neon-cyan hover:no-underline">
                    Circuit Breaker Pattern
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p><strong>States:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li><strong>CLOSED:</strong> Normal operation, requests pass through</li>
                        <li><strong>OPEN:</strong> Service failing, requests blocked immediately (fail-fast)</li>
                        <li><strong>HALF_OPEN:</strong> Testing if service recovered</li>
                      </ul>
                      <p className="mt-3"><strong>Behavior:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Opens after 3 consecutive failures</li>
                        <li>Attempts recovery after 30 seconds (enters HALF_OPEN)</li>
                        <li>Closes when single request succeeds</li>
                        <li>Sends alerts when state changes</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="retry-policy" className="border border-border/40 rounded-lg px-4">
                  <AccordionTrigger className="text-neon-cyan hover:no-underline">
                    Retry Policy with Exponential Backoff
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p><strong>Configuration:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Max Retries: 4</li>
                        <li>Base Delay: 1000ms</li>
                        <li>Backoff Strategy: Exponential</li>
                      </ul>
                      <p className="mt-3"><strong>Retry Sequence:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Attempt 1: Immediate (0s)</li>
                        <li>Attempt 2: Wait 1 second</li>
                        <li>Attempt 3: Wait 2 seconds</li>
                        <li>Attempt 4: Wait 4 seconds</li>
                        <li>Attempt 5: Wait 8 seconds → Fail if still down</li>
                      </ul>
                      <p className="mt-3"><strong>Error Categorization:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Network errors → Retry</li>
                        <li>Rate limits (429) → Circuit break</li>
                        <li>Auth errors (401) → Fail immediately</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="health-checks" className="border border-border/40 rounded-lg px-4">
                  <AccordionTrigger className="text-neon-cyan hover:no-underline">
                    Health Check Monitoring
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-3">
                      <p><strong>Monitoring Interval:</strong> Every 30 seconds</p>
                      <p><strong>Services Checked:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Groq LLM: Pings with minimal 1-token prompt</li>
                        <li>ElevenLabs: Validates API key and fetches voices endpoint</li>
                      </ul>
                      <p className="mt-3"><strong>Alert Throttling:</strong> 5 minutes per service to prevent spam</p>
                      <p className="mt-3"><strong>Recovery Behavior:</strong></p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Automatically closes circuit breakers when services recover</li>
                        <li>Updates dashboard health status in real-time</li>
                      </ul>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="error-flow" className="border border-border/40 rounded-lg px-4">
                  <AccordionTrigger className="text-neon-cyan hover:no-underline">
                    Error Flow Example: ElevenLabs 503
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    <div className="space-y-2 text-sm">
                      <p><strong>1. DETECTION</strong> → ElevenLabs returns HTTP 503</p>
                      <p><strong>2. CATEGORIZATION</strong> → Error marked as TRANSIENT</p>
                      <p><strong>3. RETRY ATTEMPT</strong> → Attempts 1-3 all fail with 503</p>
                      <p><strong>4. CIRCUIT BREAKER</strong> → Opens after 3 failures</p>
                      <p><strong>5. ALERT SENT</strong> → Email, Telegram, webhook notifications</p>
                      <p><strong>6. GOOGLE SHEETS</strong> → Failure logged for audit trail</p>
                      <p><strong>7. HEALTH CHECK</strong> → Pings ElevenLabs every 30s</p>
                      <p><strong>8. RECOVERY</strong> → Circuit transitions HALF_OPEN → CLOSED when API responds</p>
                      <p><strong>9. RESULT</strong> → System stable, normal operation resumes</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* Screenshots */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-purple mb-6">📸 Dashboard Screenshots</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-neon-cyan mb-3">Full Pipeline Execution</h3>
                  <div className="rounded-lg overflow-hidden border border-border/40">
                    <img
                      src="/full_pipeline_execution_view.png"
                      alt="Full Pipeline Execution"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neon-cyan mb-3">Normal Operation Logs</h3>
                  <div className="rounded-lg overflow-hidden border border-border/40">
                    <img
                      src="/normal_operation_logs.png"
                      alt="Normal Operation Logs"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neon-cyan mb-3">Service Health Alerts</h3>
                  <div className="rounded-lg overflow-hidden border border-border/40">
                    <img
                      src="/elevenlabs_unhealthy_alerts.png"
                      alt="ElevenLabs Unhealthy Alerts"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neon-cyan mb-3">Multi-Channel Alerts</h3>
                  <div className="rounded-lg overflow-hidden border border-border/40">
                    <img
                      src="/Pheonix telegram and eamil alerts.png"
                      alt="Telegram and Email Alerts"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack */}
            <section className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-purple mb-6">🛠️ Technology Stack</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-semibold text-neon-cyan mb-3">Backend</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Node.js</li>
                    <li>• Express.js</li>
                    <li>• Socket.io</li>
                    <li>• Groq API</li>
                    <li>• ElevenLabs API</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neon-cyan mb-3">Frontend</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• React</li>
                    <li>• Socket.io-client</li>
                    <li>• Recharts</li>
                    <li>• CSS3</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-neon-cyan mb-3">Services</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Gmail SMTP</li>
                    <li>• Telegram Bot API</li>
                    <li>• Google Sheets API</li>
                    <li>• Webhook.site</li>
                    <li>• Docker</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Learning Outcomes */}
            <section className="glass-panel p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-purple mb-6">📚 Learning Outcomes</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Resilience Patterns (Circuit Breakers, Retries)',
                  'Real-time Systems (WebSocket & Event-driven)',
                  'Error Handling & Categorization',
                  'Multi-channel Alerting Systems',
                  'Structured Logging & Audit Trails',
                  'API Integration & Error Recovery',
                  'Docker & Container Orchestration',
                  'Real-time Monitoring Dashboards',
                ].map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <Zap className="text-neon-purple flex-shrink-0 mt-1" size={18} />
                    <span className="text-muted-foreground text-sm">{outcome}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PhoenixSystem;
