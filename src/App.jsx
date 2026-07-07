import { useEffect, useRef, useState } from 'react';
import Shell from './components/Shell';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import MyAgents from './screens/MyAgents';
import Hub from './screens/Hub';
import Course from './screens/Course';
import History from './screens/History';
import Subscription from './screens/Subscription';
import SettingsScreen from './screens/Settings';
import Support from './screens/Support';
import Chat from './screens/Chat';

// Estado global simples: tela atual, sidebar recolhida, agente selecionado,
// autenticação — sem rotas reais, sem persistência (localStorage), tudo em memória.
export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [screen, setScreen] = useState('dashboard');
  const [collapsed, setCollapsed] = useState(false);
  const [activeAgentId, setActiveAgentId] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadingTimer = useRef(null);

  function navigate(nextScreen) {
    if (nextScreen === screen) return;
    setScreen(nextScreen);
    setLoading(true);
    clearTimeout(loadingTimer.current);
    loadingTimer.current = window.setTimeout(() => setLoading(false), 800);
  }

  function openChat(agentId) {
    setActiveAgentId(agentId);
    navigate('chat');
  }

  useEffect(() => () => clearTimeout(loadingTimer.current), []);

  if (!authenticated) {
    return <Login onLogin={() => setAuthenticated(true)} />;
  }

  function renderScreen() {
    switch (screen) {
      case 'dashboard':
        return <Dashboard onNavigate={navigate} onOpenChat={openChat} />;
      case 'my-agents':
        return <MyAgents onOpenChat={openChat} onNavigate={navigate} />;
      case 'hub':
        return <Hub onOpenChat={openChat} />;
      case 'course':
        return <Course />;
      case 'history':
        return <History onOpenChat={openChat} />;
      case 'subscription':
        return <Subscription />;
      case 'settings':
        return <SettingsScreen />;
      case 'support':
        return <Support />;
      case 'chat':
        return <Chat agentId={activeAgentId} onBack={() => navigate('dashboard')} />;
      default:
        return <Dashboard onNavigate={navigate} onOpenChat={openChat} />;
    }
  }

  return (
    <Shell
      current={screen === 'chat' ? null : screen}
      onNavigate={navigate}
      collapsed={collapsed}
      onToggleCollapse={() => setCollapsed((v) => !v)}
      onLogout={() => setAuthenticated(false)}
      loading={loading}
    >
      {renderScreen()}
    </Shell>
  );
}
