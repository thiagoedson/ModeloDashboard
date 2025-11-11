# 🏛️ Arquitetura - Modelo Dashboard

Este documento explica a arquitetura, decisões de design e organização do código do Modelo Dashboard.

---

## 📋 Índice

1. [Visão Geral](#1-visão-geral)
2. [Stack Tecnológica](#2-stack-tecnológica)
3. [Estrutura de Pastas](#3-estrutura-de-pastas)
4. [Arquitetura do Next.js](#4-arquitetura-do-nextjs)
5. [Sistema de Design](#5-sistema-de-design)
6. [Gerenciamento de Estado](#6-gerenciamento-de-estado)
7. [Renderização e Performance](#7-renderização-e-performance)
8. [Decisões de Design](#8-decisões-de-design)
9. [Padrões e Convenções](#9-padrões-e-convenções)
10. [Escalabilidade](#10-escalabilidade)

---

## 1. Visão Geral

O Modelo Dashboard é construído com uma arquitetura moderna e escalável, baseada em:

- **App Router do Next.js 15** - Sistema de roteamento baseado em arquivos
- **React Server Components** - Renderização no servidor por padrão
- **TypeScript** - Type safety em todo o código
- **Tailwind CSS** - Utility-first CSS framework
- **HeroUI** - Sistema de componentes UI consistente

### Princípios Arquiteturais

1. **Separação de Responsabilidades** - Cada parte do código tem uma responsabilidade clara
2. **Componentização** - Tudo é um componente reutilizável
3. **Type Safety** - TypeScript garante segurança de tipos
4. **Performance First** - Otimizações de performance desde o início
5. **Developer Experience** - Foco em DX (Developer Experience)
6. **Acessibilidade** - Componentes acessíveis por padrão

---

## 2. Stack Tecnológica

### 2.1 Framework e Biblioteca

```
┌─────────────────────────────────────────┐
│           Next.js 15                    │
│  (App Router + React Server Components) │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│           React 19                      │
│    (UI Library + Hooks + Context)       │
└─────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│         TypeScript 5.6                  │
│      (Type Safety + Intellisense)       │
└─────────────────────────────────────────┘
```

### 2.2 Styling e UI

```
┌─────────────────┐     ┌─────────────────┐
│  Tailwind CSS   │────▶│     HeroUI      │
│  (Utility CSS)  │     │  (Components)   │
└─────────────────┘     └─────────────────┘
         │                       │
         └───────────┬───────────┘
                     ▼
            ┌─────────────────┐
            │  Framer Motion  │
            │  (Animations)   │
            └─────────────────┘
```

### 2.3 Ferramentas de Desenvolvimento

- **ESLint** - Linting e code quality
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Compatibilidade cross-browser

---

## 3. Estrutura de Pastas

### 3.1 Estrutura Atual

```
ModeloDashboard/
├── src/                          # Código fonte
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout (Server Component)
│   │   ├── page.tsx             # Home page (Client Component)
│   │   ├── providers.tsx        # Client-side providers
│   │   └── globals.css          # Estilos globais
│   │
│   ├── components/              # Componentes reutilizáveis
│   │   └── (vazio - criar conforme necessário)
│   │
│   ├── lib/                     # Utilitários e helpers
│   │   └── (vazio - criar conforme necessário)
│   │
│   ├── hooks/                   # React hooks customizados
│   │   └── (vazio - criar conforme necessário)
│   │
│   ├── types/                   # TypeScript types/interfaces
│   │   └── (vazio - criar conforme necessário)
│   │
│   └── styles/                  # CSS adicional
│       └── (vazio - opcional)
│
├── public/                      # Arquivos estáticos
│   └── (imagens, fontes, etc)
│
├── docs/                        # Documentação
│   ├── CUSTOMIZATION.md
│   ├── ARCHITECTURE.md
│   └── COMPONENTS.md
│
├── next.config.mjs              # Config Next.js
├── tailwind.config.ts           # Config Tailwind
├── tsconfig.json                # Config TypeScript
├── postcss.config.js            # Config PostCSS
└── package.json                 # Dependencies
```

### 3.2 Estrutura Recomendada para Crescimento

```
src/
├── app/                          # Rotas e páginas
│   ├── (auth)/                  # Grupo de rotas de autenticação
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/               # Rota do dashboard
│   ├── api/                     # API routes
│   │   └── stats/
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
│
├── components/                   # Componentes UI
│   ├── ui/                      # Componentes base (Button, Card, etc)
│   ├── features/                # Componentes de features
│   │   ├── stats/
│   │   ├── charts/
│   │   └── tables/
│   └── layout/                  # Componentes de layout
│       ├── Header.tsx
│       ├── Sidebar.tsx
│       └── Footer.tsx
│
├── lib/                         # Utilities e helpers
│   ├── utils.ts                 # Funções utilitárias
│   ├── constants.ts             # Constantes
│   └── api.ts                   # API client
│
├── hooks/                       # Custom React hooks
│   ├── useStats.ts
│   ├── useAuth.ts
│   └── useTheme.ts
│
├── types/                       # TypeScript definitions
│   ├── index.ts
│   ├── api.ts
│   └── components.ts
│
├── context/                     # React Context
│   ├── AuthContext.tsx
│   └── DashboardContext.tsx
│
└── config/                      # Configurações
    ├── app.config.ts
    └── theme.config.ts
```

---

## 4. Arquitetura do Next.js

### 4.1 App Router

O projeto usa o **App Router** do Next.js 15, que oferece:

- ✅ React Server Components por padrão
- ✅ Layouts aninhados
- ✅ Loading states
- ✅ Error handling
- ✅ Streaming
- ✅ Parallel routes
- ✅ Intercepting routes

### 4.2 Server vs Client Components

```typescript
// SERVER COMPONENT (padrão)
// /src/app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = { /* ... */ };

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

```typescript
// CLIENT COMPONENT (com 'use client')
// /src/app/page.tsx
'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return <div>Count: {count}</div>;
}
```

**Quando usar cada um:**

| Server Component | Client Component |
|-----------------|------------------|
| Buscar dados | Usar hooks (useState, useEffect) |
| Acessar recursos do backend | Adicionar event listeners |
| Proteger informações sensíveis | Usar Context API |
| Reduzir bundle JS | Animações com Framer Motion |
| | Usar bibliotecas que dependem do browser |

### 4.3 Data Fetching

```typescript
// Server Component - Fetch no servidor
async function getData() {
  const res = await fetch('https://api.example.com/data', {
    cache: 'no-store' // ou 'force-cache'
  });
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.title}</div>;
}
```

```typescript
// Client Component - Fetch no cliente
'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  return <div>{data?.title}</div>;
}
```

---

## 5. Sistema de Design

### 5.1 Hierarquia de Componentes

```
HeroUIProvider
    │
    ├── Card (Container)
    │   ├── CardHeader
    │   ├── CardBody
    │   └── CardFooter
    │
    ├── Button
    ├── Chip
    ├── Divider
    └── ... (outros componentes HeroUI)
```

### 5.2 Sistema de Cores

```typescript
// Tailwind + NextUI
colors: {
  // Cores padrão do Tailwind
  gray: { 50, 100, ..., 900 }
  blue: { 50, 100, ..., 900 }

  // Cores do NextUI
  primary: { DEFAULT, foreground }
  secondary: { DEFAULT, foreground }
  success: { DEFAULT, foreground }
  warning: { DEFAULT, foreground }
  danger: { DEFAULT, foreground }
}
```

### 5.3 Espaçamento e Grid

```
Spacing Scale (Tailwind):
0    - 0px
1    - 4px
2    - 8px
3    - 12px
4    - 16px
6    - 24px
8    - 32px
12   - 48px
16   - 64px

Grid System:
grid-cols-1      - Mobile (< 768px)
md:grid-cols-2   - Tablet (>= 768px)
lg:grid-cols-4   - Desktop (>= 1024px)
```

---

## 6. Gerenciamento de Estado

### 6.1 Estado Local (useState)

Para estado de componente simples:

```typescript
const [isOpen, setIsOpen] = useState(false);
```

### 6.2 Context API

Para estado compartilhado (ex: tema):

```typescript
// /src/app/providers.tsx
'use client';

import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
```

### 6.3 Estado no Servidor (React Server Components)

```typescript
// Dados buscados no servidor não precisam de estado
async function getData() {
  const data = await fetch('...');
  return data;
}

export default async function Page() {
  const data = await getData();
  return <div>{data}</div>;
}
```

### 6.4 Recomendações para Escala

Para aplicações maiores, considere:

- **Zustand** - State management leve
- **Redux Toolkit** - State management robusto
- **TanStack Query** - Data fetching e cache
- **Jotai** - Atomic state management

---

## 7. Renderização e Performance

### 7.1 Estratégias de Renderização

```
┌────────────────────────────────────┐
│   Static Generation (SSG)         │
│   Melhor para: Páginas estáticas  │
└────────────────────────────────────┘
              │
              ▼
┌────────────────────────────────────┐
│   Server-Side Rendering (SSR)     │
│   Melhor para: Dados dinâmicos    │
└────────────────────────────────────┘
              │
              ▼
┌────────────────────────────────────┐
│   Client-Side Rendering (CSR)     │
│   Melhor para: Interatividade     │
└────────────────────────────────────┘
```

### 7.2 Otimizações Implementadas

1. **React Server Components** - Reduz bundle JavaScript
2. **Tailwind CSS** - CSS otimizado e tree-shaken
3. **Next.js Image** - Otimização automática de imagens
4. **Code Splitting** - Automático por rota
5. **TypeScript** - Detecção de erros em build time

### 7.3 Métricas de Performance

Foco nas Core Web Vitals:

- **LCP (Largest Contentful Paint)** - < 2.5s
- **FID (First Input Delay)** - < 100ms
- **CLS (Cumulative Layout Shift)** - < 0.1

---

## 8. Decisões de Design

### 8.1 Por que Next.js 15?

✅ React Server Components nativos
✅ App Router maduro e estável
✅ Otimizações de performance automáticas
✅ Suporte a TypeScript excelente
✅ Deploy fácil (Vercel, Netlify, etc)
✅ API Routes integradas
✅ Streaming e Suspense

### 8.2 Por que HeroUI?

✅ Componentes modernos e bonitos
✅ Acessibilidade built-in (WAI-ARIA)
✅ Dark mode nativo
✅ Integração perfeita com Tailwind
✅ TypeScript first
✅ Customização fácil
✅ Performance otimizada

### 8.3 Por que Tailwind CSS?

✅ Utility-first = desenvolvimento rápido
✅ CSS otimizado (purge unused)
✅ Configuração flexível
✅ Responsividade fácil
✅ Dark mode built-in
✅ Grande comunidade

### 8.4 Por que TypeScript?

✅ Type safety = menos bugs
✅ Autocomplete e IntelliSense
✅ Refactoring seguro
✅ Documentação via tipos
✅ Melhor DX (Developer Experience)

---

## 9. Padrões e Convenções

### 9.1 Nomenclatura

```typescript
// Componentes - PascalCase
export default function StatCard() { }

// Funções - camelCase
function calculateTotal() { }

// Constantes - UPPER_SNAKE_CASE
const API_URL = 'https://api.example.com';

// Tipos/Interfaces - PascalCase
interface UserData { }
type ButtonProps = { }

// Arquivos de componentes - PascalCase.tsx
// StatCard.tsx, UserProfile.tsx

// Arquivos utilitários - camelCase.ts
// formatDate.ts, apiClient.ts
```

### 9.2 Organização de Imports

```typescript
// 1. Imports externos (React, bibliotecas)
import { useState } from 'react';
import { Card } from '@heroui/react';

// 2. Imports internos (seus componentes/utils)
import { StatCard } from '@/components/StatCard';
import { formatDate } from '@/lib/utils';

// 3. Imports de tipos
import type { UserData } from '@/types';

// 4. Imports de estilos
import './styles.css';
```

### 9.3 Estrutura de Componentes

```typescript
// 1. Imports
import { useState } from 'react';
import { Card } from '@heroui/react';
import type { ComponentProps } from '@/types';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

// 3. Componente
export default function MyComponent({ title, onClick }: MyComponentProps) {
  // 3.1 Hooks
  const [isOpen, setIsOpen] = useState(false);

  // 3.2 Funções
  function handleClick() {
    onClick?.();
  }

  // 3.3 Render
  return (
    <Card>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click</button>
    </Card>
  );
}
```

### 9.4 Convenções de Código

- ✅ Use `const` por padrão, `let` quando necessário
- ✅ Prefira arrow functions para callbacks
- ✅ Use destructuring quando possível
- ✅ Use optional chaining (`?.`) e nullish coalescing (`??`)
- ✅ Evite `any` - use tipos específicos
- ✅ Use `interface` para objetos públicos, `type` para unions/intersections

---

## 10. Escalabilidade

### 10.1 Preparado para Crescer

O projeto está estruturado para crescer facilmente:

1. **Adicionar Rotas** - Criar pastas em `/src/app`
2. **Adicionar Componentes** - Criar em `/src/components`
3. **Adicionar API** - Criar em `/src/app/api`
4. **Adicionar Hooks** - Criar em `/src/hooks`
5. **Adicionar Utilitários** - Criar em `/src/lib`

### 10.2 Próximos Passos para Escala

```typescript
// 1. Adicionar autenticação
/src/app/(auth)/login/page.tsx
/src/app/(auth)/register/page.tsx

// 2. Adicionar mais páginas
/src/app/dashboard/page.tsx
/src/app/analytics/page.tsx
/src/app/settings/page.tsx

// 3. Adicionar API routes
/src/app/api/users/route.ts
/src/app/api/stats/route.ts

// 4. Adicionar middleware
/src/middleware.ts

// 5. Adicionar testes
/tests/unit/
/tests/e2e/
```

### 10.3 Integrações Futuras

Fácil adicionar:

- 🔐 **Autenticação** - NextAuth.js, Clerk, Auth0
- 📊 **Gráficos** - Recharts, Chart.js, Tremor
- 📝 **Formulários** - React Hook Form, Formik
- 🗃️ **Database** - Prisma, Drizzle ORM
- 🎨 **Animações** - Framer Motion (já incluído)
- 🌐 **i18n** - next-intl
- 🧪 **Testes** - Jest, Vitest, Playwright
- 📦 **Monorepo** - Turborepo

---

## 📚 Recursos

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [HeroUI Documentation](https://heroui.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## 🔄 Diagrama de Fluxo de Dados

```
┌─────────────────────────────────────────────────┐
│                   Browser                       │
└─────────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│              Next.js App Router                 │
│  ┌───────────────────────────────────────────┐  │
│  │  Server Components (layout.tsx)           │  │
│  │  - Fetch data                             │  │
│  │  - Render HTML                            │  │
│  └───────────────────────────────────────────┘  │
│                      │                          │
│                      ▼                          │
│  ┌───────────────────────────────────────────┐  │
│  │  Client Components (page.tsx)             │  │
│  │  - Interactivity                          │  │
│  │  - State management                       │  │
│  │  - Event handlers                         │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│               HeroUI Components                 │
│  (Card, Button, Chip, etc)                      │
└─────────────────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────┐
│              Tailwind CSS                       │
│  (Styling + Dark mode)                          │
└─────────────────────────────────────────────────┘
```

---

**Este documento é vivo e deve ser atualizado conforme o projeto evolui.**
