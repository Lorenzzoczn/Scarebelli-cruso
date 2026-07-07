import { GraduationCap, Sparkles } from 'lucide-react';
import { Card, Badge } from '../components/ui';

export default function Course() {
  return (
    <div className="space-y-8">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Curso de Vendas</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">
          Treinamento guiado para vender mais usando os agentes da NexusAI.
        </p>
      </div>

      <Card glow className="p-12 flex flex-col items-center text-center animate-fade-slide-up" style={{ animationDelay: '80ms' }}>
        <div className="w-16 h-16 rounded-2xl bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center">
          <GraduationCap size={28} className="text-nexus-yellow" />
        </div>
        <Badge tone="yellow" className="mt-5">
          <Sparkles size={11} /> Em breve
        </Badge>
        <h2 className="mt-4 text-xl font-bold text-white max-w-md">
          Um curso completo de vendas com IA está a caminho
        </h2>
        <p className="mt-2 text-sm text-nexus-muted max-w-md leading-relaxed">
          Módulos práticos para transformar os agentes NexusAI em máquinas de conversão para o
          seu time comercial. Você será avisado assim que estiver disponível.
        </p>
      </Card>
    </div>
  );
}
