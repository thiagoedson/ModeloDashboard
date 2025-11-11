# 🎯 Dashboard Whitelabel - Next.js 15 + shadcn/ui

> Sistema de dashboard whitelabel completo e pronto para produção, com autenticação, tema preto e branco, e design premium.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-Latest-000000)](https://ui.shadcn.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📸 Preview

Sistema completo com:
- ✅ Página de Login
- ✅ Dashboard com Sidebar e Header
- ✅ Páginas de Usuários e Produtos
- ✅ Sistema de Autenticação (localStorage)
- ✅ Tema Claro/Escuro
- ✅ Design Premium Preto e Branco

---

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Acessar
http://localhost:3000
```

**Credenciais de teste:**
- Email: `admin@example.com` / Senha: `admin123`
- Email: `user@example.com` / Senha: `user123`

---

## ✨ Características

### 🎨 Design e UI
- **Tema Whitelabel**: Preto e branco premium, sem cores adicionais
- **shadcn/ui**: Componentes modernos e acessíveis
- **Dark Mode**: Tema claro/escuro integrado
- **Fonte Premium**: Inter (Google Fonts)
- **Totalmente Responsivo**: Mobile, tablet e desktop

### 🔐 Autenticação
- Sistema de login completo
- Armazenamento com localStorage
- Proteção automática de rotas
- Hook `useAuth` customizado
- Pronto para integração com API

### 📊 Funcionalidades
- Dashboard com estatísticas e KPIs
- Sidebar com navegação
- Header com menu de usuário
- Páginas de exemplo (Usuários, Produtos)
- Dados mock para testes sem API
- TypeScript em 100% do código

### 🛠️ Stack Tecnológica
- **Next.js 15** - App Router, React Server Components
- **React 19** - Versão mais recente
- **TypeScript 5.6** - Type safety completo
- **Tailwind CSS 3.4** - Estilização utility-first
- **shadcn/ui** - Componentes UI premium
- **Lucide React** - Ícones modernos
- **next-themes** - Gerenciamento de tema

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── dashboard/          # Área autenticada
│   │   ├── layout.tsx     # Layout com sidebar/header
│   │   ├── page.tsx       # Dashboard principal
│   │   ├── users/         # Página de usuários
│   │   └── products/      # Página de produtos
│   ├── login/             # Página de login
│   ├── layout.tsx         # Layout raiz (fonte, metadata)
│   └── page.tsx           # Redirect para login/dashboard
│
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   ├── avatar.tsx
│   │   └── ...
│   └── layout/            # Componentes de layout
│       ├── sidebar.tsx
│       └── header.tsx
│
├── hooks/
│   └── useAuth.ts         # Hook de autenticação
│
├── lib/
│   └── utils.ts           # Utilitários (cn, etc)
│
├── mock-data/
│   ├── users.ts           # Usuários mock
│   └── dashboard.ts       # Dados mock do dashboard
│
└── types/
    └── index.ts           # Tipos TypeScript
```

---

## 🎯 Como Usar

### 1. Instalação

```bash
git clone <seu-repositorio>
cd ModeloDashboard
npm install
```

### 2. Configurar API (Opcional)

```bash
cp .env.example .env.local
```

Edite `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://sua-api.com
```

### 3. Desenvolvimento

```bash
npm run dev
```

### 4. Build para Produção

```bash
npm run build
npm start
```

---

## 🔌 Integração com API

O projeto vem com dados mock para funcionar sem API. Para conectar sua API:

### Autenticação

Edite `src/hooks/useAuth.ts`:

```typescript
// Substitua:
const data = await mockLogin(credentials);

// Por:
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(credentials),
});
const data = await response.json();
```

**Formato esperado da API:**
```json
{
  "user": {
    "id": "1",
    "name": "Nome do Usuário",
    "email": "email@example.com",
    "avatar": "url-avatar",
    "role": "admin"
  },
  "token": "jwt-token"
}
```

### Dados do Dashboard

Substitua as importações em `src/app/dashboard/page.tsx`:
```typescript
// Substitua:
import { mockDashboardStats } from "@/mock-data/dashboard";

// Por chamada à API:
const stats = await fetchStats();
```

---

## 🎨 Customização

### Cores e Tema

As cores estão em `src/app/globals.css`:

```css
:root {
  --background: 0 0% 100%;     /* Branco */
  --foreground: 0 0% 3.9%;     /* Preto */
  --primary: 0 0% 9%;          /* Preto primário */
  /* ... outras variáveis ... */
}
```

### Logo e Branding

**Sidebar** (`src/components/layout/sidebar.tsx`):
```tsx
<h2 className="text-2xl font-bold">Seu Logo</h2>
```

**Login** (`src/app/login/page.tsx`):
```tsx
<h1 className="text-4xl font-bold mb-2">Sua Marca</h1>
```

### Menu de Navegação

Edite `src/mock-data/dashboard.ts`:
```typescript
export const mockMenuItems: MenuItem[] = [
  {
    id: "1",
    label: "Dashboard",
    icon: "layout-dashboard",
    href: "/dashboard",
  },
  // Adicione mais itens...
];
```

### Adicionar Nova Página

1. Crie `src/app/dashboard/sua-pagina/page.tsx`
2. Adicione ao menu em `src/mock-data/dashboard.ts`
3. Use os componentes prontos de `src/components/ui`

---

## 🧩 Componentes Disponíveis

### Button
```tsx
<Button>Clique aqui</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" size="sm">Pequeno</Button>
```

### Input + Label
```tsx
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" placeholder="email@example.com" />
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
```

### Avatar
```tsx
<Avatar>
  <AvatarImage src="/avatar.jpg" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>
```

---

## 📚 Documentação

Para guia completo de uso, consulte:
- **[WHITELABEL_GUIDE.md](./WHITELABEL_GUIDE.md)** - Guia completo de uso e customização

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

Ou conecte seu repositório no [Vercel Dashboard](https://vercel.com).

### Outras Plataformas

- **Netlify**: [Guia](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify**: [Guia](https://docs.amplify.aws/nextjs)
- **Docker**: Build otimizado com Next.js standalone

---

## 🔐 Segurança

- ✅ Rotas protegidas automaticamente
- ✅ Token armazenado em localStorage
- ✅ Validação de autenticação em cada acesso
- ⚠️ **Produção**: Use httpOnly cookies e refresh tokens

---

## 📝 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm start        # Servidor de produção
npm run lint     # Linting com ESLint
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

MIT License - use livremente em projetos comerciais.

---

## 🙏 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide](https://lucide.dev/) - Ícones
- [Radix UI](https://www.radix-ui.com/) - Primitivos UI
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática

---

## 💡 Casos de Uso

Este template é perfeito para:
- 📊 Dashboards Analytics
- 🏢 Painéis Administrativos
- 📈 Aplicações SaaS
- 💼 Sistemas Internos
- 📱 Plataformas de Gestão

---

## 📞 Suporte

- 🐛 [Issues](https://github.com/seu-usuario/ModeloDashboard/issues)
- 💬 [Discussões](https://github.com/seu-usuario/ModeloDashboard/discussions)

---

**Desenvolvido com Next.js 15, React 19, TypeScript, Tailwind CSS e shadcn/ui**

Se este projeto foi útil, dê uma ⭐!
