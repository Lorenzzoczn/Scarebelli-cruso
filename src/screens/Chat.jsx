import { useEffect, useRef, useState } from 'react';
import { Trash2, Paperclip, Send, ArrowLeft } from 'lucide-react';
import { ChatBubble, TypingIndicator } from '../components/ChatBubble';
import { AGENTS, HUB_ASSISTANTS, SAMPLE_CONVERSATION, SIMULATED_REPLIES } from '../data/agents';

function resolveAgent(agentId) {
  const specialized = AGENTS.find((a) => a.id === agentId);
  if (specialized) return specialized;
  const hubAssistant = HUB_ASSISTANTS.find((a) => a.id === agentId);
  if (hubAssistant) {
    return {
      ...hubAssistant,
      specialty: 'Assistente de propósito geral',
      greeting: `Olá! Sou o ${hubAssistant.name}. Como posso ajudar hoje?`,
    };
  }
  return AGENTS[0];
}

export default function Chat({ agentId, onBack }) {
  const agent = resolveAgent(agentId);
  const initialMessages = agent.id === AGENTS.find((a) => a.status === 'active')?.id
    ? SAMPLE_CONVERSATION
    : [{ role: 'agent', text: agent.greeting }];
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);
  const replyIndex = useRef(0);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  // Reseta a conversa ao trocar de agente.
  useEffect(() => {
    setMessages(initialMessages);
    setInput('');
    setTyping(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [agentId]);

  function handleSend() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const reply = SIMULATED_REPLIES[replyIndex.current % SIMULATED_REPLIES.length];
      replyIndex.current += 1;
      setTyping(false);
      setMessages((prev) => [...prev, { role: 'agent', text: reply }]);
    }, 1500);
  }

  function handleClear() {
    setMessages([{ role: 'agent', text: agent.greeting }]);
  }

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] -m-8">
      <div className="flex items-center justify-between px-8 py-4 border-b border-nexus-border shrink-0">
        <div className="flex items-center gap-3.5 min-w-0">
          <button
            onClick={onBack}
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-nexus-muted hover:text-white hover:bg-white/5 transition-colors shrink-0"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="w-10 h-10 rounded-xl bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center shrink-0">
            <agent.icon size={19} className="text-nexus-yellow" />
          </div>
          <div className="min-w-0">
            <h2 className="font-bold text-white truncate">Conversando com {agent.name}</h2>
            <p className="text-xs text-nexus-muted truncate">{agent.specialty}</p>
          </div>
        </div>
        <button
          onClick={handleClear}
          className="flex items-center gap-1.5 text-xs font-semibold text-nexus-muted hover:text-red-400 transition-colors shrink-0"
        >
          <Trash2 size={14} /> Limpar conversa
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-8 py-6 space-y-5 max-w-3xl w-full mx-auto">
        {messages.map((m, i) => (
          <ChatBubble key={i} role={m.role} text={m.text} agentIcon={agent.icon} />
        ))}
        {typing && <TypingIndicator agentIcon={agent.icon} />}
        <div ref={endRef} />
      </div>

      <div className="px-8 py-5 border-t border-nexus-border shrink-0">
        <div className="max-w-3xl mx-auto flex items-end gap-3 bg-nexus-surface border border-nexus-border rounded-2xl px-4 py-3 focus-within:border-nexus-yellow/40 transition-colors duration-200">
          <button className="text-nexus-muted hover:text-white transition-colors shrink-0 mb-1.5">
            <Paperclip size={18} />
          </button>
          <textarea
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder={`Envie uma mensagem para ${agent.name}...`}
            className="flex-1 resize-none bg-transparent text-sm text-white placeholder:text-nexus-muted/70 focus:outline-none max-h-40 py-1.5"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-gradient-to-b from-nexus-yellow-hover to-nexus-yellow text-nexus-bg flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:brightness-110 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:pointer-events-none"
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
