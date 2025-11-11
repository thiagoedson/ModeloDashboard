# 🧩 Guia de Componentes - Modelo Dashboard

Este guia documenta todos os componentes disponíveis no projeto e como utilizá-los.

---

## 📋 Índice

1. [Componentes NextUI](#1-componentes-nextui)
2. [Cards de Estatísticas](#2-cards-de-estatísticas)
3. [Botões e Controles](#3-botões-e-controles)
4. [Layout e Container](#4-layout-e-container)
5. [Ícones](#5-ícones)
6. [Chips e Badges](#6-chips-e-badges)
7. [Tema e Dark Mode](#7-tema-e-dark-mode)
8. [Criando Componentes Customizados](#8-criando-componentes-customizados)

---

## 1. Componentes HeroUI

O projeto usa [HeroUI v2](https://heroui.com/) como biblioteca de componentes base.

### 1.1 Card

**Importação:**
```typescript
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/react';
```

**Uso Básico:**
```typescript
<Card>
  <CardHeader>
    <h4>Título</h4>
  </CardHeader>
  <CardBody>
    <p>Conteúdo do card</p>
  </CardBody>
  <CardFooter>
    <button>Ação</button>
  </CardFooter>
</Card>
```

**Com Glassmorphism (estilo do projeto):**
```typescript
<Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
  <CardBody>
    <p>Conteúdo com efeito glass</p>
  </CardBody>
</Card>
```

**Props principais:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `className` | string | Classes CSS customizadas |
| `shadow` | 'none' \| 'sm' \| 'md' \| 'lg' | Tamanho da sombra |
| `radius` | 'none' \| 'sm' \| 'md' \| 'lg' | Border radius |
| `isHoverable` | boolean | Efeito hover |
| `isPressable` | boolean | Efeito de pressionar |

**Exemplos:**

```typescript
// Card simples
<Card>
  <CardBody>Conteúdo</CardBody>
</Card>

// Card com hover
<Card isHoverable>
  <CardBody>Card com hover</CardBody>
</Card>

// Card clicável
<Card isPressable onPress={() => console.log('clicked')}>
  <CardBody>Card clicável</CardBody>
</Card>

// Card com customização completa
<Card
  shadow="lg"
  radius="lg"
  className="bg-gradient-to-br from-purple-500 to-blue-500"
>
  <CardBody>
    <p className="text-white">Card customizado</p>
  </CardBody>
</Card>
```

### 1.2 Button

**Importação:**
```typescript
import { Button } from '@heroui/react';
```

**Uso Básico:**
```typescript
<Button>Clique aqui</Button>
```

**Props principais:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `color` | 'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' | Cor do botão |
| `variant` | 'solid' \| 'bordered' \| 'light' \| 'flat' \| 'faded' \| 'shadow' \| 'ghost' | Variante visual |
| `size` | 'sm' \| 'md' \| 'lg' | Tamanho |
| `radius` | 'none' \| 'sm' \| 'md' \| 'lg' \| 'full' | Border radius |
| `isDisabled` | boolean | Desabilitar botão |
| `isLoading` | boolean | Estado de loading |
| `startContent` | ReactNode | Conteúdo antes do texto |
| `endContent` | ReactNode | Conteúdo depois do texto |

**Exemplos:**

```typescript
// Botão primário
<Button color="primary">Primário</Button>

// Botão com ícone
import { PlusIcon } from '@heroicons/react/24/solid';
<Button
  color="primary"
  startContent={<PlusIcon className="w-4 h-4" />}
>
  Adicionar
</Button>

// Botão de loading
<Button isLoading color="primary">
  Carregando...
</Button>

// Botão ghost
<Button variant="ghost">Ghost</Button>

// Botão com todas as variantes
<div className="flex gap-2">
  <Button variant="solid">Solid</Button>
  <Button variant="bordered">Bordered</Button>
  <Button variant="light">Light</Button>
  <Button variant="flat">Flat</Button>
  <Button variant="faded">Faded</Button>
  <Button variant="shadow">Shadow</Button>
  <Button variant="ghost">Ghost</Button>
</div>
```

### 1.3 Divider

**Importação:**
```typescript
import { Divider } from '@heroui/react';
```

**Uso:**
```typescript
<div>
  <p>Conteúdo 1</p>
  <Divider className="my-4" />
  <p>Conteúdo 2</p>
</div>

// Divider vertical
<div className="flex h-20">
  <div>Lado 1</div>
  <Divider orientation="vertical" />
  <div>Lado 2</div>
</div>
```

### 1.4 Chip

**Importação:**
```typescript
import { Chip } from '@heroui/react';
```

**Uso Básico:**
```typescript
<Chip>Tag</Chip>
```

**Props principais:**

| Prop | Tipo | Descrição |
|------|------|-----------|
| `color` | 'default' \| 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' | Cor |
| `variant` | 'solid' \| 'bordered' \| 'light' \| 'flat' \| 'faded' \| 'shadow' \| 'dot' | Variante |
| `size` | 'sm' \| 'md' \| 'lg' | Tamanho |
| `radius` | 'none' \| 'sm' \| 'md' \| 'lg' \| 'full' | Border radius |
| `startContent` | ReactNode | Ícone antes |
| `endContent` | ReactNode | Ícone depois |

**Exemplos:**

```typescript
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

// Chip de sucesso
<Chip color="success" variant="flat">Ativo</Chip>

// Chip com ícone (trend positivo)
<Chip
  size="sm"
  color="success"
  variant="flat"
  startContent={<ArrowUpIcon className="w-3 h-3" />}
>
  +20.1%
</Chip>

// Chip com ícone (trend negativo)
<Chip
  size="sm"
  color="danger"
  variant="flat"
  startContent={<ArrowDownIcon className="w-3 h-3" />}
>
  -4.5%
</Chip>

// Todas as cores
<div className="flex gap-2">
  <Chip color="default">Default</Chip>
  <Chip color="primary">Primary</Chip>
  <Chip color="secondary">Secondary</Chip>
  <Chip color="success">Success</Chip>
  <Chip color="warning">Warning</Chip>
  <Chip color="danger">Danger</Chip>
</div>
```

---

## 2. Cards de Estatísticas

### 2.1 Card de Estatística Básico

**Estrutura atual do projeto:**

```typescript
import { Card, CardBody, Chip } from '@heroui/react';
import { BanknotesIcon, ArrowUpIcon } from '@heroicons/react/24/solid';

<Card className="backdrop-blur-md bg-white/70 dark:bg-gray-800/70 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
  <CardBody>
    <div className="flex items-start justify-between">
      {/* Ícone */}
      <div className="p-3 rounded-lg bg-green-100 dark:bg-green-900/30">
        <BanknotesIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
      </div>

      {/* Trend Indicator */}
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

### 2.2 Componente Reutilizável

**Criar em `/src/components/StatCard.tsx`:**

```typescript
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
import StatCard from '@/components/StatCard';
import { BanknotesIcon, UsersIcon, ShoppingCartIcon } from '@heroicons/react/24/solid';

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  <StatCard
    title="Receita Total"
    value="R$ 45.231"
    trend="+20.1%"
    trendUp={true}
    icon={BanknotesIcon}
    iconColor="text-green-600 dark:text-green-400"
    iconBgColor="bg-green-100 dark:bg-green-900/30"
  />

  <StatCard
    title="Usuários Ativos"
    value="2,350"
    trend="+18.2%"
    trendUp={true}
    icon={UsersIcon}
    iconColor="text-blue-600 dark:text-blue-400"
    iconBgColor="bg-blue-100 dark:bg-blue-900/30"
  />

  <StatCard
    title="Vendas"
    value="1,234"
    trend="-4.5%"
    trendUp={false}
    icon={ShoppingCartIcon}
    iconColor="text-purple-600 dark:text-purple-400"
    iconBgColor="bg-purple-100 dark:bg-purple-900/30"
  />
</div>
```

---

## 3. Botões e Controles

### 3.1 Botão de Toggle de Tema

**Implementação atual:**

```typescript
'use client';

import { useTheme } from 'next-themes';
import { Button } from '@heroui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      isIconOnly
      variant="light"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-5 h-5" />
      ) : (
        <MoonIcon className="w-5 h-5" />
      )}
    </Button>
  );
}
```

**Criar em `/src/components/ThemeToggle.tsx` e usar:**

```typescript
import ThemeToggle from '@/components/ThemeToggle';

<ThemeToggle />
```

---

## 4. Layout e Container

### 4.1 Container Principal

```typescript
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  {/* Conteúdo */}
</div>
```

**Variações:**

```typescript
// Container pequeno
<div className="max-w-4xl mx-auto px-4 py-12">

// Container médio
<div className="max-w-5xl mx-auto px-4 py-12">

// Container grande (padrão)
<div className="max-w-7xl mx-auto px-4 py-12">

// Container extra grande
<div className="max-w-[1600px] mx-auto px-4 py-12">

// Largura completa
<div className="w-full px-4 py-12">
```

### 4.2 Grid Layout

```typescript
// Grid responsivo (usado no projeto)
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* Cards */}
</div>

// Outras opções:
// 3 colunas
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// 2 colunas
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

// Auto-fit (adaptável)
<div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
```

### 4.3 Flex Layout

```typescript
// Flex horizontal
<div className="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Flex vertical
<div className="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Flex com espaçamento entre
<div className="flex justify-between items-center">
  <div>Esquerda</div>
  <div>Direita</div>
</div>

// Flex centralizado
<div className="flex justify-center items-center min-h-screen">
  <div>Centralizado</div>
</div>
```

---

## 5. Ícones

### 5.1 Hero Icons

**Importação:**

```typescript
// Ícones sólidos (24x24)
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/solid';

// Ícones outline (24x24)
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';

// Ícones mini (20x20)
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/20/solid';
```

**Uso:**

```typescript
// Tamanho padrão (24px)
<HomeIcon className="w-6 h-6 text-blue-500" />

// Tamanho pequeno
<HomeIcon className="w-4 h-4 text-blue-500" />

// Tamanho grande
<HomeIcon className="w-8 h-8 text-blue-500" />

// Com cor dinâmica
<HomeIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
```

**Ícones disponíveis (alguns exemplos):**

- **Financeiro:** BanknotesIcon, CurrencyDollarIcon, ChartBarIcon
- **Usuário:** UserIcon, UsersIcon, UserGroupIcon
- **Navegação:** HomeIcon, ArrowRightIcon, ChevronDownIcon
- **Ações:** PlusIcon, TrashIcon, PencilIcon, CheckIcon
- **Setas:** ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon
- **Comércio:** ShoppingCartIcon, ShoppingBagIcon
- **Sistema:** CogIcon, BellIcon, MagnifyingGlassIcon

[Ver todos os ícones](https://heroicons.com/)

---

## 6. Chips e Badges

### 6.1 Chips de Status

```typescript
import { Chip } from '@heroui/react';

// Status ativo
<Chip color="success" variant="flat">Ativo</Chip>

// Status inativo
<Chip color="danger" variant="flat">Inativo</Chip>

// Status pendente
<Chip color="warning" variant="flat">Pendente</Chip>

// Status processando
<Chip color="primary" variant="flat">Processando</Chip>
```

### 6.2 Chips de Trend

```typescript
import { Chip } from '@heroui/react';
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

// Trend positivo
<Chip
  size="sm"
  color="success"
  variant="flat"
  startContent={<ArrowUpIcon className="w-3 h-3" />}
>
  +20.1%
</Chip>

// Trend negativo
<Chip
  size="sm"
  color="danger"
  variant="flat"
  startContent={<ArrowDownIcon className="w-3 h-3" />}
>
  -4.5%
</Chip>

// Trend neutro
<Chip
  size="sm"
  color="default"
  variant="flat"
>
  0.0%
</Chip>
```

---

## 7. Tema e Dark Mode

### 7.1 Usar Tema no Componente

```typescript
'use client';

import { useTheme } from 'next-themes';

export default function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Tema atual: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('light')}>Light</button>
    </div>
  );
}
```

### 7.2 Classes Condicionais de Tema

```typescript
// Usar classes dark: do Tailwind
<div className="bg-white dark:bg-gray-900">
  <p className="text-gray-900 dark:text-white">
    Texto que muda com o tema
  </p>
</div>

// Cores diferentes por tema
<div className="text-blue-600 dark:text-blue-400">
  Azul adaptável
</div>

// Background com gradiente
<div className="bg-gradient-to-br from-purple-50 via-white to-violet-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900">
  Gradiente adaptável
</div>
```

---

## 8. Criando Componentes Customizados

### 8.1 Template de Componente

```typescript
// /src/components/MeuComponente.tsx
'use client'; // Adicione se usar hooks

import { ReactNode } from 'react';

interface MeuComponenteProps {
  children: ReactNode;
  title?: string;
  onClick?: () => void;
}

export default function MeuComponente({
  children,
  title,
  onClick
}: MeuComponenteProps) {
  return (
    <div className="p-4 rounded-lg bg-white dark:bg-gray-800">
      {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
      <div onClick={onClick}>
        {children}
      </div>
    </div>
  );
}
```

### 8.2 Exemplo: Card de Métrica Simples

```typescript
// /src/components/MetricCard.tsx
import { Card, CardBody } from '@heroui/react';

interface MetricCardProps {
  label: string;
  value: string | number;
  description?: string;
}

export default function MetricCard({
  label,
  value,
  description
}: MetricCardProps) {
  return (
    <Card>
      <CardBody>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {label}
        </p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
          {value}
        </p>
        {description && (
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
            {description}
          </p>
        )}
      </CardBody>
    </Card>
  );
}
```

**Usar:**

```typescript
<MetricCard
  label="Total de Vendas"
  value="R$ 125.000"
  description="Últimos 30 dias"
/>
```

---

## 📚 Recursos

- [HeroUI Components](https://heroui.com/docs/components/accordion)
- [Hero Icons](https://heroicons.com/)
- [Tailwind CSS Utility Classes](https://tailwindcss.com/docs/utility-first)

---

## 💡 Dicas

1. **Sempre use TypeScript** para props de componentes
2. **Componentize tudo** que for reutilizado mais de 2 vezes
3. **Use Tailwind** para estilização ao invés de CSS puro
4. **Teste em dark mode** sempre que criar um componente
5. **Mantenha componentes pequenos** (< 200 linhas)

---

**Próximo:** Consulte [CUSTOMIZATION.md](./CUSTOMIZATION.md) para customizar os componentes.
