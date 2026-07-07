import { Check, Crown } from 'lucide-react';
import { Card, Button, Badge } from '../components/ui';
import { AGENTS } from '../data/agents';

const BASE_FEATURES = [
  'Acesso ao Hub de IA com assistentes genéricos',
  'Histórico completo de conversas',
  'Suporte prioritário por chamados',
  '1 agente especializado incluso',
];

export default function Subscription() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Assinatura</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">
          Gerencie seu plano e desbloqueie novos agentes especializados.
        </p>
      </div>

      <Card glow className="p-7 animate-fade-slide-up" style={{ animationDelay: '60ms' }}>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center">
              <Crown size={22} className="text-nexus-yellow" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Plano Base</h2>
              <p className="text-sm text-nexus-muted">Sua assinatura atual</p>
            </div>
          </div>
          <Badge tone="green">Ativo</Badge>
        </div>

        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BASE_FEATURES.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-nexus-muted">
              <Check size={15} className="text-nexus-yellow mt-0.5 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </Card>

      <div className="animate-fade-slide-up" style={{ animationDelay: '120ms' }}>
        <h2 className="text-sm font-bold uppercase tracking-wider text-nexus-muted mb-4">
          Agentes especializados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AGENTS.map((agent, i) => {
            const isActive = agent.status === 'active';
            const Icon = agent.icon;
            return (
              <Card
                key={agent.id}
                className={`p-6 flex flex-col animate-fade-slide-up ${isActive ? 'border-nexus-yellow/40' : ''}`}
                style={{ animationDelay: `${160 + i * 80}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-nexus-yellow/12 border border-nexus-yellow/25' : 'bg-white/5 border border-white/8'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-nexus-yellow' : 'text-nexus-muted'} />
                  </div>
                  {isActive && <Badge tone="yellow">Seu plano</Badge>}
                </div>
                <h3 className="mt-4 font-bold text-white">{agent.name}</h3>
                <p className="text-xs text-nexus-muted mt-1">{agent.specialty}</p>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-white">
                    R$ {agent.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-xs text-nexus-muted">/mês</span>
                </div>
                <div className="mt-5">
                  {isActive ? (
                    <Button variant="subtle" className="w-full">
                      Gerenciar assinatura
                    </Button>
                  ) : (
                    <Button className="w-full">Assinar</Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
