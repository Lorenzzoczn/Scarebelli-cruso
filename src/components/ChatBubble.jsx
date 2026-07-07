export function ChatBubble({ role, text, agentIcon: AgentIcon }) {
  const isUser = role === 'user';
  return (
    <div className={`flex items-end gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center shrink-0">
          <AgentIcon size={15} className="text-nexus-yellow" />
        </div>
      )}
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'bg-nexus-yellow/15 border border-nexus-yellow/20 text-white rounded-br-md'
            : 'bg-nexus-surface border border-nexus-border text-white rounded-bl-md'
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export function TypingIndicator({ agentIcon: AgentIcon }) {
  return (
    <div className="flex items-end gap-2.5 justify-start">
      <div className="w-8 h-8 rounded-full bg-nexus-yellow/12 border border-nexus-yellow/25 flex items-center justify-center shrink-0">
        <AgentIcon size={15} className="text-nexus-yellow" />
      </div>
      <div className="bg-nexus-surface border border-nexus-border rounded-2xl rounded-bl-md px-4 py-3.5 flex items-center gap-1.5">
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-nexus-muted" style={{ animationDelay: '0ms' }} />
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-nexus-muted" style={{ animationDelay: '150ms' }} />
        <span className="typing-dot w-1.5 h-1.5 rounded-full bg-nexus-muted" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
}
