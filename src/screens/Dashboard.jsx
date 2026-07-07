import { MessageSquare, Zap, Bot, Clock, ArrowRight } from 'lucide-react';
import { Card, Button } from '../components/ui';
import { AGENTS, CONVERSATION_HISTORY } from '../data/agents';

const WEEKDAYS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
const MONTHS = [
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
  'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro',
];

function greetingForHour(hour) {
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
}

function formattedDate() {
  const now = new Date();
  return `${WEEKDAYS[now.getDay()]}, ${now.getDate()} de ${MONTHS[now.getMonth()]} de ${now.getFullYear()}`;
}

const METRICS = [
  { label: 'Conversas hoje', value: '12', delta: '+3', icon: MessageSquare },
  { label: 'Tokens utilizados', value: '48.2k', delta: '+12%', icon: Zap },
  { label: 'Agentes ativos', value: '1 de 3', delta: null, icon: Bot },
  { label: 'Tempo médio', value: '4m', delta: 'por sessão', icon: Clock },
];

export default function Dashboard({ onNavigate, onOpenChat }) {
  const activeAgent = AGENTS.find((a) => a.status === 'active');
  const now = new Date();

  return (
    <div className="space-y-8">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">
          {greetingForHour(now.getHours())}, Alexandre 👋
        </h1>
        <p className="mt-1.5 text-sm text-nexus-muted capitalize">{formattedDate()}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((m, i) => {
          const Icon = m.icon;
          return (
            <Card
              key={m.label}
              className="p-5 animate-fade-slide-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-nexus-muted">
                  {m.label}
                </span>
                <div className="w-8 h-8 rounded-lg bg-nexus-yellow/10 flex items-center justify-center">
                  <Icon size={15} className="text-nexus-yellow" />
                </div>
              </div>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-white">{m.value}</span>
                {m.delta && (
                  <span
                    className={`text-xs font-semibold ${
                      m.delta.startsWith('+') ? 'text-emerald-400' : 'text-nexus-muted'
                    }`}
                  >
                    {m.delta}
                  </span>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card
          glow
          className="lg:col-span-1 p-6 flex flex-col justify-between animate-fade-slide-up"
          style={{ animationDelay: '260ms' }}
        >
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-nexus-muted">
              Acesso rápido
            </span>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center">
                <activeAgent.icon size={22} className="text-nexus-yellow" />
              </div>
              <div>
                <h3 className="font-bold text-white">{activeAgent.name}</h3>
                <p className="text-xs text-nexus-muted">{activeAgent.specialty}</p>
              </div>
            </div>
          </div>
          <Button
            className="w-full mt-6"
            onClick={() => onOpenChat(activeAgent.id)}
            iconRight={<ArrowRight size={16} />}
          >
            Iniciar conversa
          </Button>
        </Card>

        <Card
          className="lg:col-span-2 p-6 animate-fade-slide-up"
          style={{ animationDelay: '320ms' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-nexus-muted">
              Conversas recentes
            </span>
            <button
              onClick={() => onNavigate('history')}
              className="text-xs font-semibold text-nexus-yellow hover:text-nexus-yellow-hover transition-colors"
            >
              Ver todas
            </button>
          </div>
          <div className="space-y-1">
            {CONVERSATION_HISTORY.slice(0, 3).map((conv) => {
              const agent = AGENTS.find((a) => a.id === conv.agentId);
              const Icon = agent.icon;
              return (
                <button
                  key={conv.id}
                  onClick={() => onOpenChat(agent.id)}
                  className="w-full flex items-center gap-3.5 p-3 rounded-xl hover:bg-white/[0.04] transition-colors text-left"
                >
                  <div className="w-9 h-9 rounded-lg bg-nexus-yellow/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-nexus-yellow" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white">{agent.name}</span>
                      <span className="text-[11px] text-nexus-muted shrink-0">{conv.date}</span>
                    </div>
                    <p className="text-xs text-nexus-muted truncate mt-0.5">{conv.preview}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
}
