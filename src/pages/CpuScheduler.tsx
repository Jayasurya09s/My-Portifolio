import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { CustomCursor } from '@/components/CustomCursor';
import { FloatingParticles } from '@/components/FloatingParticles';
import { Starfield } from '@/components/Starfield';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Github, Server, Monitor, Cpu, Network, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CpuScheduler = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <FloatingParticles />
      <CustomCursor />
      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link to="/">
            <Button variant="outline" className="mb-8 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-5xl mx-auto">
            {/* Hero */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">Systems</Badge>
                <Badge className="bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30">Education</Badge>
                <Badge className="bg-neon-violet/20 text-neon-violet border-neon-violet/30">Visualization</Badge>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-neon-blue text-glow-blue">CPU Scheduler Simulator</span>{' '}
                <span className="text-neon-cyan text-glow-cyan">— User-Level</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                A comprehensive User-Level CPU Scheduler with real-time visualization. Built with C, Node.js, and React — simulates 7 algorithms with live Gantt charts, event logs, and performance metrics.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['C', 'Node.js', 'React', 'WebSocket', 'SQLite', 'Tailwind', 'Vite'].map((t) => (
                  <Badge key={t} variant="outline" className="border-neon-cyan/50 text-neon-cyan">{t}</Badge>
                ))}
              </div>

              <div className="flex gap-3 mb-2">
                <Button asChild className="bg-neon-blue text-space-dark hover:bg-neon-cyan">
                  <a href="https://github.com/Jayasurya09s/User-Level-CPU-sheduler" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>

             
            </motion.div>

            {/* Features */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Features</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><span className="text-foreground font-medium">7 Scheduling Algorithms</span>: FCFS, SJF, SRTF, Priority (Preemptive/Non-Preemptive), Round Robin, MLFQ</li>
                <li><span className="text-foreground font-medium">Real-Time Visualization</span>: Live Gantt charts updating second-by-second</li>
                <li><span className="text-foreground font-medium">Interactive Dashboard</span>: State monitor, terminal-style event log, playback controls</li>
                <li><span className="text-foreground font-medium">Performance Metrics</span>: CPU utilization, turnaround, waiting, response time</li>
                <li><span className="text-foreground font-medium">WebSocket Streaming</span>: Real-time event communication</li>
                <li><span className="text-foreground font-medium">Run History & Comparison</span>: Compare algorithm performances</li>
                <li><span className="text-foreground font-medium">Responsive Design</span>: Desktop, tablet, and mobile</li>
              </ul>
            </motion.div>

            {/* Architecture */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Architecture</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-4 rounded-lg border border-border/40">
                  <Cpu className="text-neon-blue mb-2" />
                  <p className="font-medium">C Scheduler</p>
                  <p className="text-sm text-muted-foreground">Core algorithms emit JSON events via stdout</p>
                </div>
                <div className="p-4 rounded-lg border border-border/40">
                  <Server className="text-neon-cyan mb-2" />
                  <p className="font-medium">Node.js Backend</p>
                  <p className="text-sm text-muted-foreground">REST API + WebSocket + SQLite</p>
                </div>
                <div className="p-4 rounded-lg border border-border/40">
                  <Monitor className="text-neon-violet mb-2" />
                  <p className="font-medium">React Frontend</p>
                  <p className="text-sm text-muted-foreground">Interactive dashboard with live visualization</p>
                </div>
              </div>
              <pre className="whitespace-pre-wrap text-sm bg-black/30 rounded-md p-4 overflow-x-auto border border-border/30">
{`┌─────────────────┐      JSON Events      ┌──────────────────┐      WebSocket      ┌─────────────────┐
│  C Scheduler    │ ──────────────────────> │  Node.js Backend │ ─────────────────> │  React Frontend │
│  (scheduler-c)  │      (via stdout)       │  (Express + WS)  │   (Real-time)       │   (Dashboard)   │
└─────────────────┘                         └──────────────────┘                     └─────────────────┘`}
              </pre>
            </motion.div>

            {/* Supported Algorithms */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Supported Algorithms</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  ['FCFS', 'Non-Preemptive'],
                  ['SJF', 'Non-Preemptive'],
                  ['SRTF', 'Preemptive'],
                  ['Priority', 'Non-Preemptive'],
                  ['Priority (Preemptive)', 'Preemptive'],
                  ['Round Robin', 'Preemptive'],
                  ['MLFQ', 'Preemptive'],
                ].map(([name, type]) => (
                  <div key={name} className="p-4 rounded-lg border border-border/40">
                    <p className="font-medium text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground">{type}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Prerequisites & Installation */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }} className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Prerequisites & Installation</h2>
              <p className="text-muted-foreground mb-4">Node.js (v16+), npm, C compiler (GCC/Clang/MinGW), and Git are required.</p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="macos">
                  <AccordionTrigger>macOS Setup</AccordionTrigger>
                  <AccordionContent>
                    <pre className="text-xs bg-black/30 rounded-md p-4 overflow-x-auto border border-border/30">{`# Install Homebrew\n/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n\n# Install Node.js and GCC\nbrew install node gcc\n\n# Clone & build\ngit clone https://github.com/Jayasurya09s/User-Level-CPU-sheduler.git\ncd User-Level-CPU-sheduler\n\ncd scheduler-c && make clean && make && ls -lh bin/scheduler && cd ..\n\ncd os-sheduler/backend-node && npm install && node src/server.js &\ncd ../..\n\ncd os-sheduler/frontend-react && npm install`}</pre>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="linux">
                  <AccordionTrigger>Ubuntu/Linux Setup</AccordionTrigger>
                  <AccordionContent>
                    <pre className="text-xs bg-black/30 rounded-md p-4 overflow-x-auto border border-border/30">{`sudo apt update\ncurl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -\nsudo apt install -y nodejs build-essential\n\ngit clone https://github.com/Jayasurya09s/User-Level-CPU-sheduler.git\ncd User-Level-CPU-sheduler\n\ncd scheduler-c && make clean && make && ls -lh bin/scheduler && cd ..\n\ncd os-sheduler/backend-node && npm install && node src/server.js &\ncd ../..\n\ncd os-sheduler/frontend-react && npm install`}</pre>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="windows">
                  <AccordionTrigger>Windows Setup</AccordionTrigger>
                  <AccordionContent>
                    <pre className="text-xs bg-black/30 rounded-md p-4 overflow-x-auto border border-border/30">{`# Using Chocolatey (Admin PowerShell)\nSet-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))\nchoco install nodejs git mingw -y\n\n# Clone & build\ngit clone https://github.com/Jayasurya09s/User-Level-CPU-sheduler.git\ncd User-Level-CPU-sheduler\n\ncd scheduler-c\n# Clean & compile\nRemove-Item -Recurse -Force bin,build -ErrorAction SilentlyContinue; mkdir bin,build -Force\ngcc -Iinclude -o bin/scheduler.exe src/main.c -lm\ncd ..\n\ncd os-sheduler\\backend-node && npm install && node src/server.js\ncd ..\\..\n\ncd os-sheduler\\frontend-react && npm install`}</pre>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>

            {/* Usage */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Usage</h2>
              <p className="text-muted-foreground mb-3">Start the backend and frontend in separate terminals. Optionally run the C scheduler directly.</p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="font-medium mb-2 flex items-center gap-2"><Server size={16} className="text-neon-cyan"/> Backend</p>
                  <pre className="text-xs bg-black/30 rounded-md p-3 overflow-x-auto border border-border/30">{`cd os-sheduler/backend-node\nnode src/server.js`}</pre>
                </div>
                <div>
                  <p className="font-medium mb-2 flex items-center gap-2"><Monitor size={16} className="text-neon-cyan"/> Frontend</p>
                  <pre className="text-xs bg-black/30 rounded-md p-3 overflow-x-auto border border-border/30">{`cd os-sheduler/frontend-react\nnpm run dev`}</pre>
                </div>
                <div>
                  <p className="font-medium mb-2 flex items-center gap-2"><Cpu size={16} className="text-neon-cyan"/> Scheduler (optional)</p>
                  <pre className="text-xs bg-black/30 rounded-md p-3 overflow-x-auto border border-border/30">{`cd scheduler-c\n./bin/scheduler fcfs workload.json`}</pre>
                </div>
              </div>
            </motion.div>

            {/* Project Structure & Tech */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.45 }} className="glass-panel p-8 mb-10 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Project Structure</h2>
              <pre className="text-xs bg-black/30 rounded-md p-4 overflow-x-auto border border-border/30">{`User-Level-CPU-sheduler/\n├── scheduler-c/\n│   ├── Makefile\n│   ├── src/\n│   │   ├── main.c\n│   │   ├── scheduler.h\n│   │   └── busy.c\n│   └── bin/\n│       └── scheduler\n└── os-sheduler/\n    ├── backend-node/\n    │   └── src/\n    │       ├── server.js\n    │       └── db.js\n    └── frontend-react/\n        └── src/\n            ├── pages/\n            └── components/`}</pre>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 rounded-lg border border-border/40">
                  <p className="font-medium mb-2 flex items-center gap-2"><Layers className="text-neon-blue"/> Backend</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>Express.js API</li>
                    <li>WebSocket (ws)</li>
                    <li>SQLite database</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-border/40">
                  <p className="font-medium mb-2 flex items-center gap-2"><Network className="text-neon-violet"/> Frontend</p>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li>React 18 + Vite + TailwindCSS</li>
                    <li>Chart.js for Gantt</li>
                    <li>React Router</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Screenshots */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="glass-panel p-8 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-neon-cyan mb-4">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <img className="rounded-lg border border-border/40" alt="Dashboard" src="https://github.com/user-attachments/assets/313b45b3-f24c-4446-b158-6954c9fe6d88" />
                <img className="rounded-lg border border-border/40" alt="Dashboard 2" src="https://github.com/user-attachments/assets/ce96d6da-231e-4e21-a8d0-e243f402e098" />
                <img className="rounded-lg border border-border/40" alt="Dashboard 3" src="https://github.com/user-attachments/assets/777e8e7f-77d2-43d9-b2cb-d2bb9b733398" />
                <img className="rounded-lg border border-border/40" alt="Dashboard 4" src="https://github.com/user-attachments/assets/d47d56c8-19b5-4833-a194-37ac63b8ea75" />
                <img className="rounded-lg border border-border/40 sm:col-span-2" alt="Run History" src="https://github.com/user-attachments/assets/9240e94f-20c6-4c17-9cfd-bbc8c4eda6f1" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CpuScheduler;
