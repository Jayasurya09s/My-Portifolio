import { FormEvent, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, User } from 'lucide-react';

import { askResumeAssistant } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const starterPrompts = [
  'Summarize your backend experience in 5 points',
  'Which projects use FastAPI and why?',
  'What internships are you looking for?',
];

export const ResumeChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: 'Hi, I am Jayanth\'s resume assistant. Ask me about projects, skills, or experience.',
    },
  ]);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const historyForApi = useMemo(
    () => messages.slice(1),
    [messages],
  );

  const handleAsk = async (input: string) => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const nextUserMessage: ChatMessage = { role: 'user', content: trimmed };
    setMessages((current) => [...current, nextUserMessage]);
    setQuestion('');
    setError(null);
    setIsLoading(true);

    try {
      const response = await askResumeAssistant({
        question: trimmed,
        history: [...historyForApi, nextUserMessage],
      });

      const answer = response.answer?.trim() || 'I could not find that in the resume yet.';
      setMessages((current) => [...current, { role: 'assistant', content: answer }]);
    } catch (requestError) {
      const message = requestError instanceof Error ? requestError.message : 'Unable to reach chat API';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleAsk(question);
  };

  return (
    <section id="resume-chat" className="relative py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-panel border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-neon-cyan">Ask My Resume (AI)</CardTitle>
              <CardDescription>
                Ask questions about projects, skills, and achievements. Responses come from your backend AI service.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`rounded-xl border px-4 py-3 ${
                      message.role === 'user'
                        ? 'ml-8 border-neon-blue/40 bg-neon-blue/10'
                        : 'mr-8 border-neon-cyan/40 bg-neon-cyan/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs mb-2 text-muted-foreground">
                      {message.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                      <span>{message.role === 'user' ? 'You' : 'Resume AI'}</span>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                ))}

                {isLoading && (
                  <div className="mr-8 rounded-xl border border-neon-cyan/40 bg-neon-cyan/10 px-4 py-3 text-sm text-muted-foreground">
                    Resume AI is thinking...
                  </div>
                )}
              </div>

              {error && <p className="text-sm text-destructive">{error}</p>}

              <div className="flex flex-wrap gap-2">
                {starterPrompts.map((prompt) => (
                  <Button
                    key={prompt}
                    type="button"
                    variant="outline"
                    size="sm"
                    className="border-neon-violet/40 text-neon-violet hover:bg-neon-violet/10"
                    onClick={() => handleAsk(prompt)}
                    disabled={isLoading}
                  >
                    {prompt}
                  </Button>
                ))}
              </div>

              <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  placeholder="Ask about my resume..."
                  className="bg-space-deeper border-border/50 focus:border-neon-cyan"
                />
                <Button
                  type="submit"
                  className="bg-neon-cyan text-space-dark hover:bg-neon-blue"
                  disabled={isLoading || !question.trim()}
                >
                  <Send size={16} className="mr-2" />
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
