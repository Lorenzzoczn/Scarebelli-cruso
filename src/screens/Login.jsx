import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, Zap, Bot } from 'lucide-react';
import { Logo, Button, Label } from '../components/ui';

function NeuralIllustration() {
  const nodes = [
    { cx: 40, cy: 120, delay: '0s' },
    { cx: 110, cy: 60, delay: '0.3s' },
    { cx: 110, cy: 170, delay: '0.6s' },
    { cx: 190, cy: 30, delay: '0.9s' },
    { cx: 190, cy: 110, delay: '0.2s' },
    { cx: 190, cy: 190, delay: '0.7s' },
    { cx: 270, cy: 70, delay: '0.4s' },
    { cx: 270, cy: 150, delay: '1s' },
    { cx: 340, cy: 110, delay: '0.5s' },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 4], [2, 5],
    [3, 6], [4, 6], [4, 7], [5, 7], [6, 8], [7, 8],
  ];

  return (
    <svg viewBox="0 0 380 220" className="w-full max-w-md mx-auto">
      <defs>
        <linearGradient id="edgeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#FFC107" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FFC107" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="url(#edgeGrad)"
          strokeWidth="1"
          className="neural-path"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r="4"
          fill="#FFC107"
          className="neural-node"
          style={{ animationDelay: n.delay }}
        />
      ))}
    </svg>
  );
}

export default function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex bg-nexus-bg overflow-hidden">
      {/* Coluna esquerda — 60% */}
      <div className="hidden lg:flex lg:w-[60%] relative flex-col justify-between px-16 py-14 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 30% 20%, rgba(255,193,7,0.05) 0%, transparent 55%), radial-gradient(circle at 80% 80%, rgba(255,193,7,0.04) 0%, transparent 55%)',
          }}
        />

        <div className="relative z-10 animate-fade-slide-up">
          <Logo size="lg" />
        </div>

        <div className="relative z-10 animate-fade-slide-up" style={{ animationDelay: '80ms' }}>
          <Label className="text-nexus-yellow">Plataforma Premium</Label>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.08] tracking-tight text-white">
            Acesse agentes
            <br />
            inteligentes
            <br />
            <span className="text-nexus-yellow">especializados</span>
            <br />
            em um único lugar.
          </h1>
          <p className="mt-6 max-w-md text-base text-nexus-muted leading-relaxed">
            Potencialize sua produtividade com agentes de IA de alto desempenho, treinados
            para o seu negócio.
          </p>
        </div>

        <div className="relative z-10 animate-fade-slide-up" style={{ animationDelay: '160ms' }}>
          <NeuralIllustration />
        </div>

        <div
          className="relative z-10 flex items-center gap-6 text-xs text-nexus-muted animate-fade-slide-up"
          style={{ animationDelay: '240ms' }}
        >
          <span className="inline-flex items-center gap-1.5">
            <Bot size={13} className="text-nexus-yellow" /> 3 Agentes
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Zap size={13} className="text-nexus-yellow" /> 99.9% Uptime
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-nexus-yellow" /> Dados seguros
          </span>
        </div>
      </div>

      {/* Coluna direita — 40% */}
      <div className="w-full lg:w-[40%] bg-[#0e0e0e] flex items-center justify-center px-8 sm:px-16 py-14 relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 0%, rgba(255,193,7,0.03) 0%, transparent 60%)',
          }}
        />
        <div className="w-full max-w-sm relative z-10 animate-fade-slide-up">
          <div className="lg:hidden mb-10">
            <Logo size="md" />
          </div>

          <h2 className="text-3xl font-bold text-white">Bem-vindo de volta</h2>
          <p className="mt-2 text-sm text-nexus-muted">
            Entre com suas credenciais para continuar.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              onLogin();
            }}
          >
            <div>
              <Label>E-mail</Label>
              <div className="relative mt-2">
                <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-nexus-muted" />
                <input
                  type="email"
                  defaultValue="alexandre@empresa.com"
                  className="w-full bg-white/[0.04] border border-nexus-border rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-nexus-yellow/40 focus:bg-white/[0.06] transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <Label>Senha</Label>
              <div className="relative mt-2">
                <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-nexus-muted" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  defaultValue="••••••••••"
                  className="w-full bg-white/[0.04] border border-nexus-border rounded-xl pl-10 pr-11 py-3 text-sm text-white focus:outline-none focus:border-nexus-yellow/40 focus:bg-white/[0.06] transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-nexus-muted hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-xs font-semibold text-nexus-yellow hover:text-nexus-yellow-hover transition-colors">
                Esqueci minha senha
              </a>
            </div>

            <Button type="submit" size="lg" className="w-full mt-2">
              Entrar
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-nexus-muted">
            Não tem conta?{' '}
            <a href="#" className="text-nexus-yellow font-semibold hover:text-nexus-yellow-hover transition-colors">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
