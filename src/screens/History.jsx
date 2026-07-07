import { Card, Button } from '../components/ui';
import { AGENTS, CONVERSATION_HISTORY } from '../data/agents';

export default function History({ onOpenChat }) {
  return (
    <div className="space-y-8">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Histórico</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">Todas as suas conversas anteriores, em um só lugar.</p>
      </div>

      <div className="space-y-3">
        {CONVERSATION_HISTORY.map((conv, i) => {
          const agent = AGENTS.find((a) => a.id === conv.agentId);
          const Icon = agent.icon;
          return (
            <Card
              key={conv.id}
              className="p-5 flex items-center gap-4 animate-fade-slide-up"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="w-11 h-11 rounded-xl bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center shrink-0">
                <Icon size={20} className="text-nexus-yellow" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white truncate">{agent.name}</h3>
                  <span className="text-xs text-nexus-muted shrink-0">{conv.date}</span>
                </div>
                <p className="text-sm text-nexus-muted truncate mt-0.5">{conv.preview}</p>
              </div>
              <Button variant="subtle" size="sm" className="shrink-0" onClick={() => onOpenChat(agent.id)}>
                Reabrir
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
