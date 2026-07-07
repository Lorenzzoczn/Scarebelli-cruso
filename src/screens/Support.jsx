import { useState } from 'react';
import { ChevronDown, LifeBuoy, BookOpen, CheckCircle2 } from 'lucide-react';
import { Card, Button, Label } from '../components/ui';

const FAQS = [
  {
    q: 'Como funciona a assinatura dos agentes especializados?',
    a: 'Cada agente especializado é contratado individualmente por R$ 19,90/mês. O plano base já inclui acesso ao Hub de IA e histórico completo, e você pode adicionar quantos agentes especializados quiser.',
  },
  {
    q: 'Posso cancelar um agente a qualquer momento?',
    a: 'Sim. Você pode gerenciar sua assinatura a qualquer momento na tela de Assinatura, ativando ou cancelando agentes individualmente, sem fidelidade.',
  },
  {
    q: 'Meus dados de conversa ficam salvos?',
    a: 'Sim, todas as suas conversas ficam disponíveis na tela de Histórico, criptografadas e acessíveis apenas pela sua conta.',
  },
  {
    q: 'Existe limite de mensagens por dia?',
    a: 'Não. Assinantes do Plano Pro têm uso ilimitado dentro dos agentes contratados, respeitando políticas de uso justo.',
  },
  {
    q: 'Como abro um chamado com o suporte?',
    a: 'Use o formulário abaixo com o assunto e a descrição do seu problema. Nossa equipe responde em até 24 horas úteis.',
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white">{item.q}</span>
        <ChevronDown
          size={16}
          className={`text-nexus-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-nexus-yellow' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 animate-accordion">
          <p className="text-sm text-nexus-muted leading-relaxed">{item.a}</p>
        </div>
      )}
    </Card>
  );
}

export default function Support() {
  const [openIndex, setOpenIndex] = useState(0);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!subject.trim() || !description.trim()) return;
    setSent(true);
    setSubject('');
    setDescription('');
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Suporte</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">Tire dúvidas ou fale diretamente com nossa equipe.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-slide-up" style={{ animationDelay: '60ms' }}>
        <a href="#" className="block">
          <Card className="p-5 flex items-center gap-3.5">
            <BookOpen size={18} className="text-nexus-yellow shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Central de ajuda</p>
              <p className="text-xs text-nexus-muted mt-0.5">Guias e tutoriais completos</p>
            </div>
          </Card>
        </a>
        <a href="#" className="block">
          <Card className="p-5 flex items-center gap-3.5">
            <LifeBuoy size={18} className="text-nexus-yellow shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Fale com um especialista</p>
              <p className="text-xs text-nexus-muted mt-0.5">Atendimento em horário comercial</p>
            </div>
          </Card>
        </a>
      </div>

      <div className="space-y-3 animate-fade-slide-up" style={{ animationDelay: '120ms' }}>
        <h2 className="text-sm font-bold uppercase tracking-wider text-nexus-muted">
          Perguntas frequentes
        </h2>
        {FAQS.map((item, i) => (
          <FaqItem
            key={item.q}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>

      <Card className="p-6 animate-fade-slide-up" style={{ animationDelay: '180ms' }}>
        <h2 className="font-bold text-white mb-5">Abrir um chamado</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Assunto</Label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Descreva o assunto em poucas palavras"
              className="mt-2 w-full bg-white/[0.04] border border-nexus-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-nexus-muted/70 focus:outline-none focus:border-nexus-yellow/40 transition-colors"
            />
          </div>
          <div>
            <Label>Descrição</Label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              placeholder="Explique com detalhes o que está acontecendo"
              className="mt-2 w-full bg-white/[0.04] border border-nexus-border rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-nexus-muted/70 focus:outline-none focus:border-nexus-yellow/40 transition-colors resize-none"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button type="submit">Enviar chamado</Button>
            {sent && (
              <span className="inline-flex items-center gap-1.5 text-sm text-emerald-400 animate-fade-slide-up">
                <CheckCircle2 size={16} /> Chamado enviado com sucesso!
              </span>
            )}
          </div>
        </form>
      </Card>
    </div>
  );
}
