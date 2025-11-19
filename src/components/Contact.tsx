import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Github, Linkedin, Twitter, Send } from 'lucide-react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/Jayasurya09s', color: 'neon-blue' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jayanth-midde-968150321/', color: 'neon-cyan' },
  { icon: Twitter, label: 'Twitter', href: 'https://x.com/JayanthMidde009', color: 'neon-violet' },
  { icon: Mail, label: 'Email', href: 'mailto:jayanthjay751@gmail.com', color: 'neon-pink' },
];

export const Contact = () => {

  // ----------------------------
  // FORM STATE
  // ----------------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ----------------------------
  // SUBMIT HANDLER
  // ----------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Check your backend.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-cyan text-glow-cyan">Get In</span>{' '}
            <span className="text-neon-blue text-glow-blue">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on the next big thing
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-panel border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-blue">Send a Message</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-space-deeper border-border/50 focus:border-neon-blue"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-space-deeper border-border/50 focus:border-neon-cyan"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-space-deeper border-border/50 focus:border-neon-violet resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-neon-blue text-space-dark hover:bg-neon-cyan border-2 border-neon-blue hover:border-neon-cyan neon-border font-semibold"
                  >
                    {loading ? "Sending..." : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>

                </form>

              </CardContent>
            </Card>
          </motion.div>

          {/* SOCIAL LINKS & QUICK INFO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            {/* SOCIAL LINKS */}
            <Card className="glass-panel border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-violet">Connect With Me</CardTitle>
                <CardDescription>Find me on these platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-lg bg-space-deeper border border-border/30 hover:border-${social.color}/50 transition-all duration-300 group`}
                      whileHover={{ x: 10 }}
                    >
                      <Icon 
                        size={24} 
                        className={`text-${social.color} group-hover:scale-110 transition-transform`}
                        style={{ filter: `drop-shadow(0 0 5px hsl(var(--${social.color})))` }}
                      />
                      <span className="text-foreground font-medium">{social.label}</span>
                    </motion.a>
                  );
                })}
              </CardContent>
            </Card>

            {/* QUICK INFO */}
            <Card className="glass-panel border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-neon-cyan">Quick Info</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-sm mb-1 text-neon-blue">Location</p>
                  <p className="font-medium text-foreground">Bangalore, India</p>
                </div>
                <div>
                  <p className="text-sm mb-1 text-neon-violet">Education</p>
                  <p className="font-medium text-foreground">BTech in Information Science & Engineering (ISE)</p>
                  <p className="font-medium text-foreground">Dayananda Sagar College of Engineering (DSCE)</p>
                </div>
                <div>
                  <p className="text-sm mb-1 text-neon-blue">Current Status</p>
                  <p className="font-medium text-foreground">3rd Semester Student</p>
                </div>
                <div>
                  <p className="text-sm mb-1 text-neon-cyan">Availability</p>
                  <p className="font-medium text-foreground">Open to opportunities / internships</p>
                </div>
              </CardContent>
            </Card>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
