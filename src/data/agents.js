import { Brain, Sparkles, LineChart, Bot, Wand2, BarChart3 } from 'lucide-react';

// Fonte única de verdade para os agentes contratáveis da plataforma.
// Adicionar um novo agente = adicionar um objeto aqui, nada mais.
export const AGENTS = [
  {
    id: 'estrategico',
    name: 'Agente Estratégico',
    specialty: 'Estratégia e decisões de negócio',
    description:
      'Analisa cenários, estrutura planos de ação e ajuda a priorizar decisões críticas para o crescimento do seu negócio.',
    price: 19.9,
    status: 'active',
    icon: Brain,
    greeting:
      'Olá, Alexandre. Sou seu Agente Estratégico. Em que decisão de negócio posso te ajudar hoje?',
  },
  {
    id: 'criativo',
    name: 'Agente Criativo',
    specialty: 'Copywriting e ideação de campanhas',
    description:
      'Gera ideias, roteiros e textos persuasivos para campanhas, lançamentos e conteúdo de marca em minutos.',
    price: 19.9,
    status: 'locked',
    icon: Sparkles,
    greeting:
      'Olá! Sou o Agente Criativo. Assine para desbloquear ideias e textos sob medida para sua marca.',
  },
  {
    id: 'analitico',
    name: 'Agente Analítico',
    specialty: 'Dados, métricas e relatórios',
    description:
      'Interpreta dados, cruza métricas e transforma números em recomendações acionáveis para o seu time.',
    price: 19.9,
    status: 'locked',
    icon: LineChart,
    greeting:
      'Olá! Sou o Agente Analítico. Assine para transformar seus dados em decisões claras.',
  },
];

// Assistentes genéricos exibidos no Hub de IA — sem vínculo com marcas reais.
export const HUB_ASSISTANTS = [
  {
    id: 'inteligente',
    name: 'Assistente Inteligente',
    description: 'Responde perguntas, organiza ideias e resolve tarefas do dia a dia com rapidez.',
    icon: Bot,
  },
  {
    id: 'assistente-criativo',
    name: 'Assistente Criativo',
    description: 'Ajuda a criar textos, roteiros e conceitos criativos para qualquer projeto.',
    icon: Wand2,
  },
  {
    id: 'assistente-analitico',
    name: 'Assistente Analítico',
    description: 'Explora dados e números para revelar padrões e oportunidades ocultas.',
    icon: BarChart3,
  },
];

// Conversa de exemplo pré-carregada — negócio/estratégia, realista.
export const SAMPLE_CONVERSATION = [
  {
    role: 'agent',
    text: 'Olá, Alexandre. Sou seu Agente Estratégico. Em que decisão de negócio posso te ajudar hoje?',
  },
  {
    role: 'user',
    text: 'Preciso decidir se expando para um novo mercado ainda este trimestre ou se espero o próximo ano.',
  },
  {
    role: 'agent',
    text: 'Boa pergunta. Antes de decidir o timing, vale mapear três pontos: caixa disponível para sustentar a operação por 6 meses, validação de demanda no novo mercado e capacidade do time atual de tocar a expansão sem comprometer o core. Você já tem clareza sobre algum desses três?',
  },
  {
    role: 'user',
    text: 'Temos caixa, mas o time está no limite. Ainda não validamos demanda de verdade.',
  },
  {
    role: 'agent',
    text: 'Nesse cenário, eu recomendaria priorizar uma validação enxuta antes de comprometer recursos — uma oferta piloto restrita, com métricas claras de conversão, rodando por 4 a 6 semanas. Isso reduz o risco de expandir o time prematuramente e te dá dados reais para decidir o trimestre certo. Quer que eu estruture um plano de validação de 30 dias?',
  },
];

// Histórico de conversas anteriores exibido na tela de Histórico.
export const CONVERSATION_HISTORY = [
  {
    id: 1,
    agentId: 'estrategico',
    date: '05 de julho de 2026',
    preview: 'Preciso decidir se expando para um novo mercado ainda este trimestre...',
  },
  {
    id: 2,
    agentId: 'estrategico',
    date: '02 de julho de 2026',
    preview: 'Como estruturar metas trimestrais para o time comercial?',
  },
  {
    id: 3,
    agentId: 'estrategico',
    date: '28 de junho de 2026',
    preview: 'Vale a pena renegociar o contrato com o fornecedor principal agora?',
  },
];

// Respostas simuladas do agente para qualquer mensagem enviada pelo usuário no chat.
export const SIMULATED_REPLIES = [
  'Entendi o contexto. Com base no que você trouxe, eu sugeriria mapear os riscos antes de avançar — quer que eu detalhe um plano passo a passo?',
  'Boa colocação. Isso costuma se resolver melhor quando quebramos o problema em etapas menores e mensuráveis. Posso te ajudar a estruturar isso.',
  'Faz sentido. Considerando seu cenário, o próximo passo natural seria validar essa hipótese com dados reais antes de comprometer recursos.',
  'Interessante. Recomendo priorizarmos o que gera mais impacto com menos esforço primeiro — assim conseguimos validar rápido e ajustar o rumo se necessário.',
];
