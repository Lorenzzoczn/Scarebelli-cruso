import { useState } from 'react';
import { User, Bell, Moon, ShieldCheck, KeyRound } from 'lucide-react';
import { Card, Button, Label, Toggle, Badge } from '../components/ui';
import { AGENTS } from '../data/agents';

export default function Settings() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="animate-fade-slide-up">
        <h1 className="text-3xl font-bold text-white">Configurações</h1>
        <p className="mt-1.5 text-sm text-nexus-muted">Gerencie seu perfil, preferências e assinatura.</p>
      </div>

      <Card className="p-6 animate-fade-slide-up" style={{ animationDelay: '60ms' }}>
        <div className="flex items-center gap-2.5 mb-5">
          <User size={16} className="text-nexus-yellow" />
          <h2 className="font-bold text-white">Perfil</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label>Nome</Label>
            <input
              defaultValue="Alexandre Souza"
              className="mt-2 w-full bg-white/[0.04] border border-nexus-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-nexus-yellow/40 transition-colors"
            />
          </div>
          <div>
            <Label>E-mail</Label>
            <input
              defaultValue="alexandre@empresa.com"
              className="mt-2 w-full bg-white/[0.04] border border-nexus-border rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-nexus-yellow/40 transition-colors"
            />
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between flex-wrap gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs text-nexus-muted">
            <KeyRound size={13} /> Última alteração de senha há 3 meses
          </span>
          <Button variant="outline" size="sm">
            Alterar senha
          </Button>
        </div>
      </Card>

      <Card className="p-6 animate-fade-slide-up" style={{ animationDelay: '120ms' }}>
        <div className="flex items-center gap-2.5 mb-5">
          <Moon size={16} className="text-nexus-yellow" />
          <h2 className="font-bold text-white">Preferências</h2>
        </div>
        <div className="divide-y divide-nexus-border">
          <div className="flex items-center justify-between py-3.5 first:pt-0">
            <div>
              <p className="text-sm font-medium text-white">Tema escuro</p>
              <p className="text-xs text-nexus-muted mt-0.5">Interface otimizada para pouca luz.</p>
            </div>
            <Toggle checked={darkTheme} onChange={setDarkTheme} label="Tema escuro" />
          </div>
          <div className="flex items-center justify-between py-3.5 last:pb-0">
            <div className="flex items-center gap-2.5">
              <Bell size={15} className="text-nexus-muted" />
              <div>
                <p className="text-sm font-medium text-white">Notificações</p>
                <p className="text-xs text-nexus-muted mt-0.5">Receba alertas sobre novas respostas.</p>
              </div>
            </div>
            <Toggle checked={notifications} onChange={setNotifications} label="Notificações" />
          </div>
        </div>
      </Card>

      <Card className="p-6 animate-fade-slide-up" style={{ animationDelay: '180ms' }}>
        <div className="flex items-center gap-2.5 mb-5">
          <ShieldCheck size={16} className="text-nexus-yellow" />
          <h2 className="font-bold text-white">Assinatura</h2>
        </div>
        <div className="space-y-3">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="flex items-center justify-between py-1">
              <div className="flex items-center gap-3">
                <agent.icon size={16} className="text-nexus-muted" />
                <span className="text-sm text-white">{agent.name}</span>
              </div>
              {agent.status === 'active' ? (
                <Badge tone="green">Ativo</Badge>
              ) : (
                <Badge tone="locked">Não contratado</Badge>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
