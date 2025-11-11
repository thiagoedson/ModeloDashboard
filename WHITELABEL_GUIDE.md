# Guia de Uso - Dashboard Whitelabel

## Visão Geral

Este é um dashboard whitelabel moderno e completo, pronto para ser personalizado e integrado com sua API. Desenvolvido com as melhores práticas e tecnologias mais recentes.

## Características Principais

- **Design Premium**: Interface moderna em preto e branco, totalmente customizável
- **Autenticação Completa**: Sistema de login com localStorage
- **Dados Mock**: Funciona sem API para testes e desenvolvimento
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Dark Mode**: Tema claro/escuro integrado
- **TypeScript**: Totalmente tipado para segurança e produtividade
- **Componentes Reutilizáveis**: Base sólida com shadcn/ui

## Estrutura do Projeto

```
src/
├── app/                      # Rotas do Next.js 15
│   ├── dashboard/           # Área autenticada
│   │   ├── layout.tsx       # Layout com sidebar e header
│   │   ├── page.tsx         # Dashboard principal
│   │   ├── users/           # Página de usuários
│   │   └── products/        # Página de produtos
│   ├── login/               # Página de login
│   ├── layout.tsx           # Layout raiz
│   ├── page.tsx             # Página inicial (redireciona)
│   └── globals.css          # Estilos globais
│
├── components/              # Componentes React
│   ├── ui/                  # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── avatar.tsx
│   │   ├── label.tsx
│   │   └── dropdown-menu.tsx
│   └── layout/              # Componentes de layout
│       ├── sidebar.tsx
│       └── header.tsx
│
├── hooks/                   # React Hooks customizados
│   └── useAuth.ts          # Hook de autenticação
│
├── lib/                     # Utilitários
│   └── utils.ts            # Funções auxiliares
│
├── mock-data/              # Dados para testes
│   ├── users.ts
│   └── dashboard.ts
│
└── types/                  # Tipos TypeScript
    └── index.ts
```

## Começando

### 1. Instalação

```bash
npm install
```

### 2. Configuração da API

Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Edite `.env.local` e configure a URL da sua API:

```env
NEXT_PUBLIC_API_URL=https://sua-api.com
API_TIMEOUT=30000
```

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### 4. Build para Produção

```bash
npm run build
npm start
```

## Autenticação

### Credenciais de Teste (Mock)

O sistema vem com 3 usuários de teste:

| Email | Senha | Perfil |
|-------|-------|--------|
| admin@example.com | admin123 | Administrador |
| user@example.com | user123 | Usuário |
| manager@example.com | manager123 | Gerente |

### Integração com API Real

Para conectar com sua API, edite o arquivo `src/hooks/useAuth.ts`:

```typescript
// Remova o código mock:
const data = await mockLogin(credentials);

// Adicione sua chamada de API:
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(credentials),
});

if (!response.ok) throw new Error("Erro ao fazer login");

const data = await response.json();
```

### Formato Esperado da Resposta da API

```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "admin" | "user" | "manager";
  },
  token: string;
}
```

## Dados Mock

O projeto inclui dados mock para funcionar sem API:

- `src/mock-data/users.ts` - Usuários de exemplo
- `src/mock-data/dashboard.ts` - Estatísticas e itens de menu

Para usar dados reais, substitua as importações dos arquivos mock pelas chamadas à sua API.

## Personalização

### Cores e Tema

As cores estão definidas em `src/app/globals.css` usando variáveis CSS:

```css
:root {
  --background: 0 0% 100%;      /* Branco */
  --foreground: 0 0% 3.9%;      /* Preto */
  --primary: 0 0% 9%;           /* Preto primário */
  /* ... outras cores ... */
}
```

Para customizar, edite essas variáveis HSL.

### Fonte

A fonte atual é **Inter** (Google Fonts). Para trocar, edite `src/app/layout.tsx`:

```typescript
import { SuaFonte } from "next/font/google";

const suaFonte = SuaFonte({
  subsets: ["latin"],
  variable: "--font-sua-fonte",
  display: "swap",
});
```

### Logo e Branding

- **Sidebar**: Edite `src/components/layout/sidebar.tsx` (linha 27-30)
- **Login**: Edite `src/app/login/page.tsx` (linha 42-45)
- **Metadata**: Edite `src/app/layout.tsx` (linha 12-15)

### Menu de Navegação

Para adicionar/remover itens do menu, edite `src/mock-data/dashboard.ts`:

```typescript
export const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    label: "Meu Item",
    icon: "seu-icone",  // Ícone do lucide-react
    href: "/dashboard/meu-item",
    badge: 5, // Opcional
  },
  // ... mais itens
];
```

## Criando Novas Páginas

### 1. Criar a Rota

Crie uma pasta em `src/app/dashboard/sua-pagina/`:

```typescript
// src/app/dashboard/sua-pagina/page.tsx
export default function SuaPagina() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Sua Página</h1>
      {/* Seu conteúdo */}
    </div>
  );
}
```

### 2. Adicionar no Menu

Adicione em `src/mock-data/dashboard.ts`:

```typescript
{
  id: "7",
  label: "Sua Página",
  icon: "file",
  href: "/dashboard/sua-pagina",
}
```

## Componentes Disponíveis

### Button

```tsx
import { Button } from "@/components/ui/button";

<Button>Clique aqui</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" size="sm">Pequeno</Button>
```

### Input

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="seu@email.com" />
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

## API Integration Pattern

### Exemplo de Chamada à API

```typescript
// src/lib/api.ts (criar este arquivo)
export async function fetchData(endpoint: string) {
  const token = localStorage.getItem("auth_token");

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}
```

### Uso em Componentes

```typescript
"use client";

import { useEffect, useState } from "react";
import { fetchData } from "@/lib/api";

export default function MinhaPagina() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("/endpoint")
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;

  return <div>{/* Renderize seus dados */}</div>;
}
```

## Segurança

### Proteção de Rotas

Todas as rotas em `/dashboard/*` são automaticamente protegidas pelo layout em `src/app/dashboard/layout.tsx`.

### Token de Autenticação

O token é armazenado em `localStorage` com a chave `auth_token`. Em produção, considere:

- Usar httpOnly cookies
- Implementar refresh tokens
- Adicionar expiração de sessão

### Variáveis de Ambiente

NUNCA commite `.env.local`. Use variáveis diferentes para desenvolvimento e produção.

## Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte no Vercel
3. Configure as variáveis de ambiente
4. Deploy automático

### Outras Plataformas

```bash
npm run build
```

O output estará em `.next/` - siga as instruções da sua plataforma de deploy.

## Troubleshooting

### Erro de Autenticação

- Verifique se o localStorage está habilitado
- Confirme que a API está retornando o formato correto
- Verifique o token no console do navegador

### Erro de Build

```bash
rm -rf .next node_modules
npm install
npm run build
```

### Problemas com Tailwind

Certifique-se que todos os arquivos estão no `content` do `tailwind.config.ts`.

## Suporte

Para dúvidas e problemas:

1. Verifique a documentação do Next.js 15
2. Consulte a documentação do shadcn/ui
3. Revise os exemplos em `src/app/dashboard/`

## Licença

MIT - Sinta-se livre para usar em projetos comerciais.

---

Desenvolvido com Next.js 15, React 19, TypeScript, Tailwind CSS e shadcn/ui.
