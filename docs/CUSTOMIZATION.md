# 🎨 Guia de Customização - Modelo Dashboard

Este guia completo mostra como personalizar o Modelo Dashboard para atender às necessidades do seu projeto.

---

## 📋 Índice

1. [Customização Visual](#1-customização-visual)
2. [Configuração de Marca](#2-configuração-de-marca)
3. [Temas e Cores](#3-temas-e-cores)
4. [Layout e Estrutura](#4-layout-e-estrutura)
5. [Componentes](#5-componentes)
6. [Dados e API](#6-dados-e-api)
7. [Configurações Avançadas](#7-configurações-avançadas)

---

## 1. Customização Visual

### 1.1 Cores Principais

Edite o arquivo `/tailwind.config.ts` para definir suas cores:

```typescript
import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Suas cores personalizadas
        brand: {
          primary: '#6366f1',    // Cor principal da marca
          secondary: '#8b5cf6',  // Cor secundária
          accent: '#ec4899',     // Cor de destaque
        },
        // Cores para estados
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;
```

### 1.2 Tipografia

Adicione fontes personalizadas no arquivo `/src/app/layout.tsx`:

```typescript
import { Inter, Roboto, Poppins } from 'next/font/google'

// Configurar fonte
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
```

Atualize `/tailwind.config.ts` para usar as fontes:

```typescript
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-inter)'],
      heading: ['var(--font-poppins)'],
    },
  },
}
```

### 1.3 Gradientes de Fundo

Edite o arquivo `/src/app/page.tsx` para personalizar o gradiente:

```typescript
// Gradiente atual
className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"

// Exemplos de outros gradientes:

// Azul
className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900"

// Verde
className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-green-900/20 dark:to-gray-900"

// Rosa
className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 dark:from-gray-900 dark:via-pink-900/20 dark:to-gray-900"

// Neutro
className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-slate-50 dark:from-gray-900 dark:via-slate-800 dark:to-gray-900"
```

---

## 2. Configuração de Marca

### 2.1 Metadata e SEO

Edite `/src/app/layout.tsx`:

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Minha Empresa - Dashboard",
  description: "Dashboard administrativo da Minha Empresa",
  keywords: ["dashboard", "admin", "analytics"],
  authors: [{ name: "Sua Empresa" }],
  creator: "Sua Empresa",

  // Open Graph (redes sociais)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://seusite.com",
    title: "Minha Empresa - Dashboard",
    description: "Dashboard administrativo da Minha Empresa",
    siteName: "Minha Empresa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Minha Empresa Dashboard",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Minha Empresa - Dashboard",
    description: "Dashboard administrativo da Minha Empresa",
    images: ["/twitter-image.png"],
    creator: "@seutwitter",
  },

  // Ícones
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
```

### 2.2 Logo e Favicon

1. Substitua o arquivo `/src/favicon.ico` pelo seu favicon
2. Adicione logo da empresa:

```typescript
// Em /src/app/page.tsx
import Image from 'next/image'

<div className="flex items-center gap-4">
  <Image
    src="/logo.png"
    alt="Logo"
    width={50}
    height={50}
    priority
  />
  <h1 className="text-4xl font-bold">
    Minha Empresa
  </h1>
</div>
```

### 2.3 Título e Subtítulo

Edite `/src/app/page.tsx`:

```typescript
// Substitua:
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
  Dashboard Modelo
</h1>
<p className="text-lg text-gray-600 dark:text-gray-300">
  Base moderna para dashboards com Next.js 15 e React 19
</p>

// Por:
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
  Seu Título Aqui
</h1>
<p className="text-lg text-gray-600 dark:text-gray-300">
  Seu subtítulo ou descrição
</p>
```

---

## 3. Temas e Cores

### 3.1 Tema HeroUI Personalizado

Edite `/tailwind.config.ts` para customizar o tema do HeroUI:

```typescript
import { heroui } from "@heroui/react";

plugins: [
  heroui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF",
          foreground: "#11181C",
          primary: {
            DEFAULT: "#6366f1",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#8b5cf6",
            foreground: "#FFFFFF",
          },
          success: {
            DEFAULT: "#10b981",
            foreground: "#FFFFFF",
          },
          warning: {
            DEFAULT: "#f59e0b",
            foreground: "#000000",
          },
          danger: {
            DEFAULT: "#ef4444",
            foreground: "#FFFFFF",
          },
        },
      },
      dark: {
        colors: {
          background: "#000000",
          foreground: "#ECEDEE",
          primary: {
            DEFAULT: "#818cf8",
            foreground: "#000000",
          },
          secondary: {
            DEFAULT: "#a78bfa",
            foreground: "#000000",
          },
          success: {
            DEFAULT: "#34d399",
            foreground: "#000000",
          },
          warning: {
            DEFAULT: "#fbbf24",
            foreground: "#000000",
          },
          danger: {
            DEFAULT: "#f87171",
            foreground: "#000000",
          },
        },
      },
      // Criar tema customizado
      "purple-dark": {
        extend: "dark",
        colors: {
          background: "#1a0b2e",
          foreground: "#ffffff",
          primary: {
            DEFAULT: "#7c3aed",
            foreground: "#ffffff",
          },
        },
      },
    },
  }),
]
```

### 3.2 Variáveis CSS Globais

Edite `/src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  /* Cores personalizadas */
  --color-primary: 99 102 241;      /* RGB do azul índigo */
  --color-secondary: 139 92 246;    /* RGB do roxo */
  --color-accent: 236 72 153;       /* RGB do rosa */

  /* Espaçamentos */
  --spacing-unit: 8px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;

  /* Sombras */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.dark {
  --color-primary: 129 140 248;     /* RGB do azul índigo claro */
  --color-secondary: 167 139 250;   /* RGB do roxo claro */
  --color-accent: 244 114 182;      /* RGB do rosa claro */
}

/* Classes utilitárias personalizadas */
@layer utilities {
  .text-primary {
    color: rgb(var(--color-primary));
  }

  .bg-primary {
    background-color: rgb(var(--color-primary));
  }

  .border-primary {
    border-color: rgb(var(--color-primary));
  }
}
```

---

## 4. Layout e Estrutura

### 4.1 Grid de Cards

Ajuste o grid em `/src/app/page.tsx`:

```typescript
// Grid atual (4 colunas em desktop)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// Opções:
// 3 colunas em desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 2 colunas em desktop
className="grid grid-cols-1 md:grid-cols-2 gap-6"

// 5 colunas em desktop (para mais cards)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
```

### 4.2 Container e Espaçamento

```typescript
// Container atual
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"

// Opções:
// Container maior
className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12"

// Container menor
className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12"

// Largura completa
className="w-full px-4 sm:px-6 lg:px-8 py-12"
```

### 4.3 Adicionar Sidebar

Crie um novo layout com sidebar:

```typescript
// Em /src/app/page.tsx
<div className="flex min-h-screen">
  {/* Sidebar */}
  <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
    <nav className="p-4">
      <ul className="space-y-2">
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="#" className="block p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
            Relatórios
          </a>
        </li>
        {/* Mais itens */}
      </ul>
    </nav>
  </aside>

  {/* Conteúdo principal */}
  <main className="flex-1 bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
    {/* Seu conteúdo atual aqui */}
  </main>
</div>
```

---

## 5. Componentes

### 5.1 Customizar Cards de Estatísticas

Edite os cards em `/src/app/page.tsx`:

```typescript
// Estrutura de um card
<Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
  <CardBody>
    <div className="flex items-start justify-between">
      {/* Ícone */}
      <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
        <BanknotesIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
      </div>

      {/* Trend */}
      <Chip
        size="sm"
        color="success"
        variant="flat"
        startContent={<ArrowUpIcon className="w-3 h-3" />}
      >
        +20.1%
      </Chip>
    </div>

    <div className="mt-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Receita Total
      </p>
      <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
        R$ 45.231
      </p>
    </div>
  </CardBody>
</Card>
```

**Adicione mais cards:**

```typescript
const stats = [
  {
    title: 'Receita Total',
    value: 'R$ 45.231',
    trend: '+20.1%',
    trendUp: true,
    icon: BanknotesIcon,
    color: 'green'
  },
  {
    title: 'Usuários Ativos',
    value: '2,350',
    trend: '+18.2%',
    trendUp: true,
    icon: UsersIcon,
    color: 'blue'
  },
  // Adicione mais...
];

// Mapear os cards
{stats.map((stat, index) => (
  <Card key={index} className="...">
    {/* Renderizar card */}
  </Card>
))}
```

### 5.2 Adicionar Novos Componentes

Crie componentes reutilizáveis em `/src/components/`:

**Exemplo: Card de Estatística Reutilizável**

```typescript
// /src/components/StatCard.tsx
import { Card, CardBody, Chip } from '@heroui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
  icon: React.ComponentType<{ className?: string }>;
  iconColor?: string;
  iconBgColor?: string;
}

export default function StatCard({
  title,
  value,
  trend,
  trendUp,
  icon: Icon,
  iconColor = 'text-blue-600 dark:text-blue-400',
  iconBgColor = 'bg-blue-100 dark:bg-blue-900/30'
}: StatCardProps) {
  return (
    <Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
      <CardBody>
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-lg ${iconBgColor}`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>

          <Chip
            size="sm"
            color={trendUp ? "success" : "danger"}
            variant="flat"
            startContent={
              trendUp ?
                <ArrowUpIcon className="w-3 h-3" /> :
                <ArrowDownIcon className="w-3 h-3" />
            }
          >
            {trend}
          </Chip>
        </div>

        <div className="mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}
```

**Usar o componente:**

```typescript
// Em /src/app/page.tsx
import StatCard from '@/components/StatCard';
import { BanknotesIcon } from '@heroicons/react/24/solid';

<StatCard
  title="Receita Total"
  value="R$ 45.231"
  trend="+20.1%"
  trendUp={true}
  icon={BanknotesIcon}
  iconColor="text-green-600 dark:text-green-400"
  iconBgColor="bg-green-100 dark:bg-green-900/30"
/>
```

---

## 6. Dados e API

### 6.1 Integração com API

Crie um hook para buscar dados:

```typescript
// /src/hooks/useStats.ts
'use client';

import { useState, useEffect } from 'react';

interface Stat {
  title: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

export function useStats() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats(data);
      } catch (err) {
        setError('Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return { stats, loading, error };
}
```

**Usar no componente:**

```typescript
// Em /src/app/page.tsx
'use client';

import { useStats } from '@/hooks/useStats';

export default function Home() {
  const { stats, loading, error } = useStats();

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    // Renderizar stats
  );
}
```

### 6.2 Variáveis de Ambiente

Crie `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.seusite.com
NEXT_PUBLIC_APP_NAME=Meu Dashboard
API_SECRET_KEY=sua-chave-secreta
```

**Usar no código:**

```typescript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const appName = process.env.NEXT_PUBLIC_APP_NAME;
```

---

## 7. Configurações Avançadas

### 7.1 Animações com Framer Motion

```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Seu conteúdo */}
</motion.div>
```

### 7.2 Internacionalização (i18n)

Instale `next-intl`:

```bash
npm install next-intl
```

Configure conforme [documentação do next-intl](https://next-intl-docs.vercel.app/).

### 7.3 Adicionar Gráficos

Instale uma biblioteca de gráficos:

```bash
npm install recharts
# ou
npm install chart.js react-chartjs-2
# ou
npm install @tremor/react
```

**Exemplo com Recharts:**

```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', vendas: 4000 },
  { name: 'Fev', vendas: 3000 },
  { name: 'Mar', vendas: 5000 },
];

<LineChart width={600} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="vendas" stroke="#8884d8" />
</LineChart>
```

---

## 📚 Recursos Adicionais

- [Documentação Next.js](https://nextjs.org/docs)
- [Documentação HeroUI](https://heroui.com/docs)
- [Documentação Tailwind CSS](https://tailwindcss.com/docs)
- [Hero Icons](https://heroicons.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

## 💡 Dicas

1. **Sempre teste em modo claro e escuro** após customizar cores
2. **Use variáveis CSS** para valores reutilizados
3. **Componentes pequenos e reutilizáveis** são mais fáceis de manter
4. **Teste em diferentes tamanhos de tela** (mobile, tablet, desktop)
5. **Commit frequentemente** durante customizações grandes

---

**Próximos passos:** Consulte [ARCHITECTURE.md](./ARCHITECTURE.md) para entender a estrutura do projeto em profundidade.
