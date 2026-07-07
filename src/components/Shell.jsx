import Sidebar from './Sidebar';
import Header from './Header';
import { AmbientGlow, SkeletonScreen } from './ui';

export default function Shell({ current, onNavigate, collapsed, onToggleCollapse, onLogout, loading, children }) {
  return (
    <div className="min-h-screen bg-nexus-bg relative">
      <AmbientGlow />
      <Sidebar
        current={current}
        onNavigate={onNavigate}
        collapsed={collapsed}
        onToggleCollapse={onToggleCollapse}
      />
      <Header onNavigate={onNavigate} onLogout={onLogout} sidebarCollapsed={collapsed} />
      <main
        className={`transition-[padding] duration-300 ease-out pt-16 ${collapsed ? 'pl-[76px]' : 'pl-64'}`}
      >
        <div className="p-8 max-w-7xl mx-auto">{loading ? <SkeletonScreen /> : children}</div>
      </main>
    </div>
  );
}
