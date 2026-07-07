import { useEffect, useRef, useState } from 'react';
import { Search, Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';

export default function Header({ onNavigate, onLogout, sidebarCollapsed }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-nexus-bg/85 backdrop-blur-md border-b border-nexus-border flex items-center justify-between px-6 gap-6 z-30 transition-[left] duration-300 ease-out ${
        sidebarCollapsed ? 'left-[76px]' : 'left-64'
      }`}
    >
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-nexus-muted"
          />
          <input
            type="text"
            placeholder="Buscar agentes, conversas..."
            className="w-full bg-white/[0.04] border border-nexus-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-nexus-muted/70 focus:outline-none focus:border-nexus-yellow/40 focus:bg-white/[0.06] transition-all duration-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 shrink-0">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-nexus-yellow/10 text-nexus-yellow border border-nexus-yellow/20 rounded-full px-3 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-nexus-yellow" />
          Plano Pro
        </span>

        <button className="relative w-9 h-9 rounded-xl flex items-center justify-center text-nexus-muted hover:text-white hover:bg-white/5 transition-all duration-200">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-nexus-yellow" />
        </button>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex items-center gap-2.5 pl-1 pr-2 py-1 rounded-xl hover:bg-white/5 transition-all duration-200"
          >
            <div
              className="w-8 h-8 rounded-full bg-nexus-yellow flex items-center justify-center text-nexus-bg font-bold text-sm"
              style={{ boxShadow: '0 0 16px rgba(255,193,7,0.3)' }}
            >
              A
            </div>
            <span className="hidden md:inline text-sm font-medium text-white">Alexandre</span>
            <ChevronDown
              size={14}
              className={`hidden md:inline text-nexus-muted transition-transform duration-200 ${menuOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-52 bg-nexus-surface border border-nexus-border rounded-xl shadow-2xl py-1.5 animate-fade-slide-up">
              <button
                onClick={() => {
                  onNavigate('settings');
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-white hover:bg-white/5 transition-colors"
              >
                <User size={15} className="text-nexus-muted" /> Perfil
              </button>
              <button
                onClick={() => {
                  onNavigate('settings');
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-white hover:bg-white/5 transition-colors"
              >
                <Settings size={15} className="text-nexus-muted" /> Configurações
              </button>
              <div className="my-1.5 border-t border-nexus-border" />
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-colors"
              >
                <LogOut size={15} /> Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
