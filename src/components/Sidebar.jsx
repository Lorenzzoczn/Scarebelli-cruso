import {
  LayoutGrid,
  Bot,
  Sparkles,
  GraduationCap,
  History,
  CreditCard,
  Settings,
  LifeBuoy,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Logo } from './ui';

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
  { id: 'my-agents', label: 'Meus Agentes', icon: Bot },
  { id: 'hub', label: 'Hub de IA', icon: Sparkles },
  { id: 'course', label: 'Curso de Vendas', icon: GraduationCap },
  { id: 'history', label: 'Histórico', icon: History },
  { id: 'subscription', label: 'Assinatura', icon: CreditCard },
  { id: 'settings', label: 'Configurações', icon: Settings },
  { id: 'support', label: 'Suporte', icon: LifeBuoy },
];

export default function Sidebar({ current, onNavigate, collapsed, onToggleCollapse }) {
  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-nexus-surface border-r border-nexus-border flex flex-col transition-[width] duration-300 ease-out z-40 ${
        collapsed ? 'w-[76px]' : 'w-64'
      }`}
    >
      <div className={`h-16 flex items-center border-b border-nexus-border shrink-0 ${collapsed ? 'justify-center px-0' : 'px-5'}`}>
        {collapsed ? (
          <div
            className="w-9 h-9 rounded-xl bg-nexus-yellow flex items-center justify-center"
            style={{ boxShadow: '0 0 24px rgba(255,193,7,0.35)' }}
          >
            <Bot size={18} strokeWidth={2.5} className="text-nexus-bg" />
          </div>
        ) : (
          <Logo size="md" />
        )}
      </div>

      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const active = current === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              title={collapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 relative ${
                collapsed ? 'justify-center' : ''
              } ${
                active
                  ? 'bg-nexus-yellow/12 text-nexus-yellow'
                  : 'text-nexus-muted hover:text-white hover:bg-white/5'
              }`}
            >
              {active && (
                <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-nexus-yellow" />
              )}
              <Icon size={18} strokeWidth={2.1} className="shrink-0" />
              {!collapsed && <span className="truncate">{item.label}</span>}
            </button>
          );
        })}
      </nav>

      <div className="p-3 border-t border-nexus-border">
        <button
          onClick={onToggleCollapse}
          className={`w-full flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-nexus-muted hover:text-white hover:bg-white/5 transition-all duration-200 ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          {!collapsed && <span>Recolher</span>}
        </button>
      </div>
    </aside>
  );
}
