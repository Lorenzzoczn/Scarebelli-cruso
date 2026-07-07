import { Lock } from 'lucide-react';
import { Card, Button, Badge } from '../components/ui';
import { AGENTS } from '../data/agents';

export default function MyAgents({ onOpenChat, onNavigate }) {
  return (
    <div className="space-y-8">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Meus Agentes</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">
          Agentes especializados prontos para trabalhar com você.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AGENTS.map((agent, i) => {
          const isActive = agent.status === 'active';
          const Icon = agent.icon;
          return (
            <Card
              key={agent.id}
              glow={isActive}
              className={`group p-6 flex flex-col animate-fade-slide-up ${!isActive ? 'opacity-80 hover:opacity-100' : ''}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isActive ? 'bg-nexus-yellow/12 border border-nexus-yellow/25' : 'bg-white/5 border border-white/8'
                  }`}
                >
                  <Icon size={22} className={isActive ? 'text-nexus-yellow' : 'text-nexus-muted'} />
                </div>
                {isActive ? (
                  <Badge tone="green">Ativo</Badge>
                ) : (
                  <Badge tone="locked">
                    <Lock size={10} className="lock-wiggle" /> Não contratado
                  </Badge>
                )}
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">{agent.name}</h3>
              <p className="text-xs font-semibold text-nexus-yellow/80 mt-0.5">{agent.specialty}</p>
              <p className="mt-3 text-sm text-nexus-muted leading-relaxed flex-1">
                {agent.description}
              </p>

              <div className="mt-6">
                {isActive ? (
                  <Button className="w-full" onClick={() => onOpenChat(agent.id)}>
                    Usar agente
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full" onClick={() => onNavigate('subscription')}>
                    Assinar por R$ {agent.price.toFixed(2).replace('.', ',')}/mês
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
