/**
 * Configuração centralizada do aplicativo
 *
 * Este arquivo contém todas as configurações customizáveis do dashboard.
 * Edite este arquivo para personalizar o projeto para sua marca/empresa.
 */

export const appConfig = {
  /**
   * Informações básicas do aplicativo
   */
  app: {
    name: 'Dashboard Modelo',
    description: 'Base moderna para dashboards com Next.js 15 e React 19',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    locale: 'pt-BR',
    timezone: 'America/Sao_Paulo',
  },

  /**
   * Informações da empresa/marca
   */
  brand: {
    company: 'Sua Empresa',
    logo: '/logo.png',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },

  /**
   * Metadata para SEO
   */
  seo: {
    title: 'Dashboard Modelo',
    titleTemplate: '%s | Dashboard Modelo', // %s será substituído pelo título da página
    description: 'Base moderna para dashboards com Next.js 15 e React 19',
    keywords: [
      'dashboard',
      'admin',
      'painel',
      'analytics',
      'nextjs',
      'react',
      'typescript',
    ],
    author: 'Seu Nome',

    // Open Graph (redes sociais)
    openGraph: {
      type: 'website',
      siteName: 'Dashboard Modelo',
      image: '/og-image.png',
      imageWidth: 1200,
      imageHeight: 630,
      imageAlt: 'Dashboard Modelo',
    },

    // Twitter Card
    twitter: {
      handle: '@seutwitter',
      site: '@seutwitter',
      cardType: 'summary_large_image',
    },
  },

  /**
   * Tema e cores
   */
  theme: {
    // Tema padrão ('light' ou 'dark')
    defaultTheme: 'dark' as 'light' | 'dark',

    // Permitir troca de tema
    enableThemeToggle: true,

    // Cores principais (em formato HSL ou RGB)
    colors: {
      primary: '#6366f1',     // Azul índigo
      secondary: '#8b5cf6',   // Roxo
      accent: '#ec4899',      // Rosa
      success: '#10b981',     // Verde
      warning: '#f59e0b',     // Amarelo
      error: '#ef4444',       // Vermelho
      info: '#3b82f6',        // Azul
    },

    // Gradiente de fundo
    gradient: {
      light: {
        from: 'purple-50',
        via: 'white',
        to: 'violet-50',
      },
      dark: {
        from: 'gray-900',
        via: 'purple-900/20',
        to: 'gray-900',
      },
    },
  },

  /**
   * Layout e UI
   */
  layout: {
    // Largura máxima do container
    containerMaxWidth: '7xl', // '4xl', '5xl', '6xl', '7xl', 'full'

    // Espaçamento padrão
    defaultPadding: {
      x: 'px-4 sm:px-6 lg:px-8',
      y: 'py-12',
    },

    // Grid de cards
    statsGrid: {
      cols: {
        mobile: 1,
        tablet: 2,
        desktop: 4,
      },
      gap: 6,
    },

    // Header
    header: {
      show: true,
      height: 'auto',
    },

    // Sidebar
    sidebar: {
      enabled: false, // Mudar para true para habilitar sidebar
      width: '256px', // 16rem = 256px
      collapsible: false,
    },
  },

  /**
   * Features e funcionalidades
   */
  features: {
    // Analytics e métricas
    analytics: {
      enabled: false,
      googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    },

    // Autenticação
    auth: {
      enabled: false,
      provider: 'nextauth', // 'nextauth', 'clerk', 'auth0', etc
    },

    // API
    api: {
      baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
      timeout: 30000, // 30 segundos
    },

    // Internacionalização
    i18n: {
      enabled: false,
      defaultLocale: 'pt-BR',
      locales: ['pt-BR', 'en-US', 'es-ES'],
    },

    // PWA
    pwa: {
      enabled: false,
    },
  },

  /**
   * Contatos e redes sociais
   */
  contacts: {
    email: 'contato@suaempresa.com',
    phone: '+55 (11) 99999-9999',
    address: 'Sua Cidade, Estado, Brasil',

    social: {
      github: 'https://github.com/seu-usuario',
      linkedin: 'https://linkedin.com/in/seu-nome',
      twitter: 'https://twitter.com/seu-usuario',
      facebook: '',
      instagram: '',
    },
  },

  /**
   * Links úteis
   */
  links: {
    documentation: '/docs',
    support: '/support',
    termsOfService: '/terms',
    privacyPolicy: '/privacy',
    changelog: '/changelog',
  },

  /**
   * Dashboard - Configurações específicas
   */
  dashboard: {
    // Título da página principal
    title: 'Dashboard Modelo',
    subtitle: 'Base moderna para dashboards com Next.js 15 e React 19',

    // Stats/Cards de exemplo
    showExampleStats: true,

    // Welcome card
    showWelcomeCard: true,
    welcomeMessage: 'Bem-vindo ao Dashboard Modelo',

    // Tecnologias para mostrar no welcome card
    technologies: [
      { name: 'Next.js', version: '15' },
      { name: 'React', version: '19' },
      { name: 'Tailwind CSS', version: '3.4' },
      { name: 'NextUI', version: '2.4' },
      { name: 'TypeScript', version: '5.6' },
      { name: 'Hero Icons', version: '2.1' },
    ],
  },

  /**
   * Ambiente
   */
  env: {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
  },
} as const;

/**
 * Helper para acessar configurações de forma type-safe
 */
export type AppConfig = typeof appConfig;

/**
 * Helper para obter URL completa
 */
export function getFullUrl(path: string = ''): string {
  const baseUrl = appConfig.app.url;
  return `${baseUrl}${path}`;
}

/**
 * Helper para obter classe de gradiente do tema
 */
export function getThemeGradientClasses(theme: 'light' | 'dark' = 'light'): string {
  const gradient = appConfig.theme.gradient[theme];
  return `bg-gradient-to-br from-${gradient.from} via-${gradient.via} to-${gradient.to}`;
}

/**
 * Helper para obter classe de container
 */
export function getContainerClasses(): string {
  const { containerMaxWidth, defaultPadding } = appConfig.layout;
  return `max-w-${containerMaxWidth} mx-auto ${defaultPadding.x} ${defaultPadding.y}`;
}

/**
 * Helper para obter classe de grid de stats
 */
export function getStatsGridClasses(): string {
  const { cols, gap } = appConfig.layout.statsGrid;
  return `grid grid-cols-${cols.mobile} md:grid-cols-${cols.tablet} lg:grid-cols-${cols.desktop} gap-${gap}`;
}

export default appConfig;
