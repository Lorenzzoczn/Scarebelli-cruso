import { Cpu } from 'lucide-react';

// ---------------------------------------------------------------------------
// Primitivos de UI compartilhados por toda a plataforma NexusAI.
// Mantêm a identidade visual (cores, glow, animações) consistente em um só lugar.
// ---------------------------------------------------------------------------

export function Logo({ size = 'md' }) {
  const sizes = {
    sm: { box: 'w-7 h-7', icon: 14, text: 'text-base' },
    md: { box: 'w-9 h-9', icon: 18, text: 'text-xl' },
    lg: { box: 'w-11 h-11', icon: 22, text: 'text-2xl' },
  };
  const s = sizes[size];
  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`${s.box} rounded-xl bg-nexus-yellow flex items-center justify-center shrink-0`}
        style={{ boxShadow: '0 0 24px rgba(255,193,7,0.35)' }}
      >
        <Cpu size={s.icon} strokeWidth={2.5} className="text-nexus-bg" />
      </div>
      <span className={`${s.text} font-bold text-white tracking-tight`}>NexusAI</span>
    </div>
  );
}

export function Card({ children, className = '', glow = false, style, ...props }) {
  return (
    <div
      className={`bg-nexus-surface border border-nexus-border rounded-2xl transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-nexus-yellow/25 ${className}`}
      style={{
        boxShadow: glow ? '0 0 40px rgba(255,193,7,0.12)' : undefined,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon: Icon,
  iconRight,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ease-out active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none';

  const sizes = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2.5',
    lg: 'text-sm px-6 py-3.5',
  };

  const variants = {
    primary:
      'bg-gradient-to-b from-nexus-yellow-hover to-nexus-yellow text-nexus-bg hover:brightness-110 shadow-[0_0_28px_rgba(255,193,7,0.28)] hover:shadow-[0_0_40px_rgba(255,193,7,0.4)]',
    outline:
      'border border-nexus-yellow/40 text-nexus-yellow hover:bg-nexus-yellow/10 hover:border-nexus-yellow',
    ghost: 'text-nexus-muted hover:text-white hover:bg-white/5',
    subtle: 'bg-white/5 text-white hover:bg-white/10 border border-white/5',
  };

  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon size={16} strokeWidth={2.25} />}
      {children}
      {iconRight}
    </button>
  );
}

export function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'bg-white/6 text-nexus-muted border-white/8',
    yellow: 'bg-nexus-yellow/12 text-nexus-yellow border-nexus-yellow/25',
    green: 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20',
    locked: 'bg-white/5 text-nexus-muted border-white/8',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Label({ children, className = '' }) {
  return (
    <span
      className={`text-[11px] font-bold uppercase tracking-[0.12em] text-nexus-muted ${className}`}
    >
      {children}
    </span>
  );
}

export function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors duration-200 shrink-0 ${
        checked ? 'bg-nexus-yellow' : 'bg-white/12'
      }`}
      style={checked ? { boxShadow: '0 0 16px rgba(255,193,7,0.35)' } : undefined}
      aria-label={label}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-200 ease-out ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

export function Skeleton({ className = '' }) {
  return <div className={`rounded-xl bg-white/[0.04] animate-shimmer ${className}`} />;
}

export function SkeletonScreen() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-10 w-32" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
      <Skeleton className="h-64" />
    </div>
  );
}

export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div
        className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,193,7,0.05) 0%, rgba(255,193,7,0) 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,193,7,0.035) 0%, rgba(255,193,7,0) 70%)',
        }}
      />
    </div>
  );
}
