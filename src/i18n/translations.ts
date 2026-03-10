export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const translations = {
  en: {
    // Nav
    'nav.about': 'About',
    'nav.problem': 'The Problem',
    'nav.how': 'How It Works',
    'nav.phases': 'What We Do',
    'nav.credentials': 'Track Record',
    'nav.framework': 'Framework',
    'nav.tools': 'Open Source',
    'nav.cta': 'Talk to Us',

    // Hero
    'hero.tag': 'AI SDLC Transformation Partners',
    'hero.title.line1': 'Your engineering team',
    'hero.title.line2': 'is shipping faster.',
    'hero.title.line3': 'But is it shipping better?',
    'hero.subtitle': 'We embed Field Developer Engineers into your team to transform your software development lifecycle with AI — systematically, not chaotically.',
    'hero.cta': 'Book a Discovery Call',
    'hero.cta2': 'Read the AI SDLC Guide',

    // Problem
    'problem.tag': '01 / The Problem',
    'problem.title': 'Everyone is adopting AI. Almost no one is getting results.',
    'problem.stat1.number': '88%',
    'problem.stat1.label': 'of orgs adopt AI regularly',
    'problem.stat1.source': 'McKinsey 2025',
    'problem.stat2.number': '6%',
    'problem.stat2.label': 'report measurable results',
    'problem.stat2.source': 'McKinsey 2025',
    'problem.stat3.number': '3x',
    'problem.stat3.label': 'more process rework by top performers',
    'problem.stat3.source': 'McKinsey 2025',
    'problem.insight': 'Individual developers complete 21% more tasks and generate 98% higher PR merge rates with AI. Yet organizational throughput stays flat.',
    'problem.insight.source': 'Across 5,000 respondents',
    'problem.quote': 'The most dangerous outcome is slow, invisible risk accumulation — exposed only through production failures, security audits, or critical technical debt thresholds.',

    // How it works
    'how.tag': '02 / How It Works',
    'how.title': 'We don\'t sell licenses. We embed engineers.',
    'how.subtitle': 'Our FDEs join your team as embedded specialists. They work alongside your developers, restructuring workflows around AI capabilities — not just installing tools.',
    'how.step1.title': 'Assess',
    'how.step1.desc': 'We map your current SDLC maturity, tool usage, governance gaps, and baseline metrics. No guessing — data-driven diagnosis.',
    'how.step2.title': 'Embed',
    'how.step2.desc': 'FDEs join your squads. They pair with developers, restructure workflows, set guardrails, and introduce AI at each SDLC phase with precision.',
    'how.step3.title': 'Measure',
    'how.step3.desc': 'Cycle time, bug escape rate, review quality, test coverage — we track what matters and prove ROI with real numbers.',
    'how.step4.title': 'Scale',
    'how.step4.desc': 'Once patterns are validated, we codify them into your org. Your teams carry the new operating model forward independently.',

    // Phases
    'phases.tag': '03 / What We Do',
    'phases.title': 'AI across every phase of your SDLC.',
    'phases.subtitle': 'We don\'t just help with code generation. We transform every phase of how software gets built.',
    'phases.1.title': 'Requirements & Design',
    'phases.1.desc': 'AI-assisted PRDs, user stories, acceptance criteria. Architecture exploration at the speed of thought.',
    'phases.2.title': 'Coding',
    'phases.2.desc': 'From autocomplete to autonomous agents. We help your team shift from writing to verifying and selecting.',
    'phases.3.title': 'Code Review',
    'phases.3.desc': 'AI as a first-pass review layer — catching patterns, flagging risks, reducing reviewer fatigue. Our specialty via Kodus.',
    'phases.4.title': 'Testing',
    'phases.4.desc': 'Accelerated test generation. Unit tests, edge cases, and fixture coverage that actually catches bugs.',
    'phases.5.title': 'CI/CD',
    'phases.5.desc': 'Pipeline configuration, release notes, infra code, build failure diagnosis — all AI-augmented.',
    'phases.6.title': 'Incident Response',
    'phases.6.desc': 'Alert synthesis, log condensation, status updates. Faster response, clearer communication.',
    'phases.7.title': 'Governance',
    'phases.7.desc': 'Policies, data classification, vendor evaluation, logging. We build the foundation others skip.',

    // Credentials
    'credentials.tag': '04 / Track Record',
    'credentials.title': 'We\'ve been in the trenches.',
    'credentials.subtitle': 'We\'re not advisors watching from the sidelines. We\'re builders who\'ve shipped AI tooling and helped real teams transform.',
    'credentials.stat1.number': '100+',
    'credentials.stat1.label': 'engineering teams transformed',
    'credentials.stat2.number': '2024',
    'credentials.stat2.label': 'working with LLMs since',
    'credentials.stat3.number': 'Kodus',
    'credentials.stat3.label': 'founders of AI code review tool',
    'credentials.text': 'As the founders of Kodus, we built one of the leading AI code review platforms. We\'ve seen firsthand what works and what doesn\'t when engineering teams adopt AI. We know the shortcuts, the pitfalls, and the patterns that actually generate ROI.',

    // Framework
    'framework.tag': '05 / The Framework',
    'framework.title': 'The AI SDLC Maturity Model.',
    'framework.subtitle': 'We built the open guide that engineering leaders use to assess and evolve their AI adoption. It\'s the backbone of our methodology.',
    'framework.level0': 'No AI',
    'framework.level0.desc': 'Zero integration. Fully manual workflows.',
    'framework.level1': 'Ad Hoc',
    'framework.level1.desc': 'Individual developers self-adopt tools. No shared standards.',
    'framework.level2': 'Guardrails',
    'framework.level2.desc': 'Approved tools, basic rules, some logging.',
    'framework.level3': 'Measured',
    'framework.level3.desc': 'Cross-team standards. Metrics tracked. Regular reviews.',
    'framework.level4': 'Governed',
    'framework.level4.desc': 'Automated compliance. Continuous improvement. Clear ownership.',
    'framework.cta': 'Read the Full AI SDLC Guide',

    // Tools
    'tools.tag': '06 / Open Source',
    'tools.title': 'Tools we built for the community.',
    'tools.subtitle': 'We don\'t just consult — we ship. These are open-source tools we\'ve built to accelerate AI adoption in engineering teams.',
    'tools.stars': 'stars',
    'tools.view': 'View on GitHub',
    'tools.kodus.name': 'Kodus AI',
    'tools.kodus.desc': 'AI Code Review with full control over model choice and costs. Our flagship product — autonomous review that learns your team\'s patterns.',
    'tools.readiness.name': 'Agent Readiness',
    'tools.readiness.desc': 'The open-source alternative to Factory.ai\'s Agent Readiness. Assess how prepared your codebase is for AI agents.',
    'tools.skills.name': 'Awesome Agent Skills',
    'tools.skills.desc': 'Curated list of Agent Skills for AI coding agents like Claude Code, Codex, and Cursor.',
    'tools.review.name': 'Awesome AI Code Review',
    'tools.review.desc': 'Curated list of AI Code Review agents, copilots, and research papers.',

    // CTA
    'cta.title': 'Ready to transform your SDLC?',
    'cta.subtitle': 'Stop buying tools. Start changing how your team builds software.',
    'cta.button': 'Book a Discovery Call',
    'cta.note': 'No pitch decks. We start with a diagnostic of where you are today.',

    // Footer
    'footer.built': 'Built by the founders of',
    'footer.rights': 'All rights reserved.',
  },
  pt: {
    // Nav
    'nav.about': 'Sobre',
    'nav.problem': 'O Problema',
    'nav.how': 'Como Funciona',
    'nav.phases': 'O Que Fazemos',
    'nav.credentials': 'Track Record',
    'nav.framework': 'Framework',
    'nav.tools': 'Open Source',
    'nav.cta': 'Fale Conosco',

    // Hero
    'hero.tag': 'Parceiros de Transformação AI SDLC',
    'hero.title.line1': 'Seu time de engenharia',
    'hero.title.line2': 'está entregando mais rápido.',
    'hero.title.line3': 'Mas está entregando melhor?',
    'hero.subtitle': 'Colocamos Field Developer Engineers dentro do seu time para transformar seu ciclo de desenvolvimento com IA — de forma sistemática, não caótica.',
    'hero.cta': 'Agendar Conversa',
    'hero.cta2': 'Ler o Guia AI SDLC',

    // Problem
    'problem.tag': '01 / O Problema',
    'problem.title': 'Todo mundo está adotando IA. Quase ninguém está tendo resultado.',
    'problem.stat1.number': '88%',
    'problem.stat1.label': 'das empresas adotam IA regularmente',
    'problem.stat1.source': 'McKinsey 2025',
    'problem.stat2.number': '6%',
    'problem.stat2.label': 'reportam resultados mensuráveis',
    'problem.stat2.source': 'McKinsey 2025',
    'problem.stat3.number': '3x',
    'problem.stat3.label': 'mais rework de processos pelos top performers',
    'problem.stat3.source': 'McKinsey 2025',
    'problem.insight': 'Desenvolvedores individuais completam 21% mais tarefas e geram 98% mais merges de PR com IA. Mesmo assim, o throughput organizacional permanece estagnado.',
    'problem.insight.source': 'Dados de 5.000 respondentes',
    'problem.quote': 'O resultado mais perigoso é o acúmulo lento e invisível de risco — exposto apenas por falhas em produção, auditorias de segurança ou limiares críticos de dívida técnica.',

    // How it works
    'how.tag': '02 / Como Funciona',
    'how.title': 'Não vendemos licenças. Incorporamos engenheiros.',
    'how.subtitle': 'Nossos FDEs entram no seu time como especialistas incorporados. Trabalham lado a lado com seus devs, reestruturando workflows com IA — não apenas instalando ferramentas.',
    'how.step1.title': 'Diagnóstico',
    'how.step1.desc': 'Mapeamos sua maturidade atual de SDLC, uso de ferramentas, gaps de governança e métricas baseline. Sem achismo — diagnóstico baseado em dados.',
    'how.step2.title': 'Imersão',
    'how.step2.desc': 'FDEs entram nos seus squads. Pareiam com devs, reestruturam workflows, definem guardrails e introduzem IA em cada fase do SDLC com precisão.',
    'how.step3.title': 'Mensuração',
    'how.step3.desc': 'Cycle time, bug escape rate, qualidade de review, cobertura de testes — rastreamos o que importa e provamos ROI com números reais.',
    'how.step4.title': 'Escala',
    'how.step4.desc': 'Quando os padrões são validados, codificamos na organização. Seus times levam o novo modelo operacional de forma independente.',

    // Phases
    'phases.tag': '03 / O Que Fazemos',
    'phases.title': 'IA em cada fase do seu SDLC.',
    'phases.subtitle': 'Não ajudamos só com geração de código. Transformamos cada fase de como software é construído.',
    'phases.1.title': 'Requisitos & Design',
    'phases.1.desc': 'PRDs, user stories e critérios de aceite assistidos por IA. Exploração de arquitetura na velocidade do pensamento.',
    'phases.2.title': 'Codificação',
    'phases.2.desc': 'De autocomplete a agentes autônomos. Ajudamos seu time a migrar de escrever para verificar e selecionar.',
    'phases.3.title': 'Code Review',
    'phases.3.desc': 'IA como camada de review inicial — identificando padrões, sinalizando riscos, reduzindo fadiga do reviewer. Nossa especialidade via Kodus.',
    'phases.4.title': 'Testes',
    'phases.4.desc': 'Geração acelerada de testes. Testes unitários, edge cases e cobertura que realmente pega bugs.',
    'phases.5.title': 'CI/CD',
    'phases.5.desc': 'Configuração de pipelines, release notes, infra code, diagnóstico de build failures — tudo aumentado por IA.',
    'phases.6.title': 'Resposta a Incidentes',
    'phases.6.desc': 'Síntese de alertas, condensação de logs, status updates. Resposta mais rápida, comunicação mais clara.',
    'phases.7.title': 'Governança',
    'phases.7.desc': 'Políticas, classificação de dados, avaliação de vendors, logging. Construímos a fundação que outros pulam.',

    // Credentials
    'credentials.tag': '04 / Track Record',
    'credentials.title': 'Estivemos nas trincheiras.',
    'credentials.subtitle': 'Não somos consultores assistindo de fora. Somos builders que entregaram ferramentas de IA e ajudaram times reais a se transformar.',
    'credentials.stat1.number': '100+',
    'credentials.stat1.label': 'times de engenharia transformados',
    'credentials.stat2.number': '2024',
    'credentials.stat2.label': 'trabalhando com LLMs desde',
    'credentials.stat3.number': 'Kodus',
    'credentials.stat3.label': 'fundadores da ferramenta de AI code review',
    'credentials.text': 'Como fundadores da Kodus, construímos uma das principais plataformas de AI code review. Vimos de perto o que funciona e o que não funciona quando times de engenharia adotam IA. Conhecemos os atalhos, as armadilhas e os padrões que realmente geram ROI.',

    // Framework
    'framework.tag': '05 / O Framework',
    'framework.title': 'O Modelo de Maturidade AI SDLC.',
    'framework.subtitle': 'Construímos o guia aberto que líderes de engenharia usam para avaliar e evoluir sua adoção de IA. É a espinha dorsal da nossa metodologia.',
    'framework.level0': 'Sem IA',
    'framework.level0.desc': 'Zero integração. Workflows totalmente manuais.',
    'framework.level1': 'Ad Hoc',
    'framework.level1.desc': 'Devs adotam ferramentas por conta. Sem padrões compartilhados.',
    'framework.level2': 'Guardrails',
    'framework.level2.desc': 'Ferramentas aprovadas, regras básicas, algum logging.',
    'framework.level3': 'Mensurado',
    'framework.level3.desc': 'Padrões cross-team. Métricas rastreadas. Reviews regulares.',
    'framework.level4': 'Governado',
    'framework.level4.desc': 'Compliance automatizado. Melhoria contínua. Ownership claro.',
    'framework.cta': 'Leia o Guia Completo AI SDLC',

    // Tools
    'tools.tag': '06 / Open Source',
    'tools.title': 'Ferramentas que construímos para a comunidade.',
    'tools.subtitle': 'Não apenas consultamos — entregamos. Estas são ferramentas open-source que criamos para acelerar a adoção de IA em times de engenharia.',
    'tools.stars': 'stars',
    'tools.view': 'Ver no GitHub',
    'tools.kodus.name': 'Kodus AI',
    'tools.kodus.desc': 'AI Code Review com controle total sobre escolha de modelo e custos. Nosso produto principal — review autônomo que aprende os padrões do seu time.',
    'tools.readiness.name': 'Agent Readiness',
    'tools.readiness.desc': 'A alternativa open-source ao Agent Readiness da Factory.ai. Avalie o quão preparado seu codebase está para agentes de IA.',
    'tools.skills.name': 'Awesome Agent Skills',
    'tools.skills.desc': 'Lista curada de Agent Skills para agentes de código como Claude Code, Codex e Cursor.',
    'tools.review.name': 'Awesome AI Code Review',
    'tools.review.desc': 'Lista curada de agentes de AI Code Review, copilots e artigos de pesquisa.',

    // CTA
    'cta.title': 'Pronto para transformar seu SDLC?',
    'cta.subtitle': 'Pare de comprar ferramentas. Comece a mudar como seu time constrói software.',
    'cta.button': 'Agendar Conversa',
    'cta.note': 'Sem pitch decks. Começamos com um diagnóstico de onde você está hoje.',

    // Footer
    'footer.built': 'Construído pelos fundadores da',
    'footer.rights': 'Todos os direitos reservados.',
  },
} as const;

export function t(lang: Lang, key: keyof typeof translations['en']): string {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}
