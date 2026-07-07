import { Card, Button } from '../components/ui';
import { HUB_ASSISTANTS } from '../data/agents';

export default function Hub({ onOpenChat }) {
  return (
    <div className="space-y-8">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Hub de IA</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">
          Assistentes de uso geral, disponíveis para qualquer tarefa do dia a dia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {HUB_ASSISTANTS.map((assistant, i) => {
          const Icon = assistant.icon;
          return (
            <Card
              key={assistant.id}
              className="p-6 flex flex-col animate-fade-slide-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center">
                <Icon size={22} className="text-nexus-yellow" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">{assistant.name}</h3>
              <p className="mt-3 text-sm text-nexus-muted leading-relaxed flex-1">
                {assistant.description}
              </p>
              <Button className="w-full mt-6" onClick={() => onOpenChat(assistant.id)}>
                Conversar
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
