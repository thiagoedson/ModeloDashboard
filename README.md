# 🎯 Modelo Dashboard - Base Whitelabel para Dashboards Modernos

> Uma base limpa, moderna e totalmente customizável para criar dashboards e painéis administrativos com as tecnologias mais recentes do ecossistema React.

[![Next.js](https://img.shields.io/badge/Next.js-15.0-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![NextUI](https://img.shields.io/badge/NextUI-2.4-000000)](https://nextui.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Características](#-características)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Desenvolvimento](#️-desenvolvimento)
- [Build e Deploy](#-build-e-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Customização](#-customização)
- [Documentação Adicional](#-documentação-adicional)
- [Casos de Uso](#-casos-de-uso)
- [Roadmap](#-roadmap)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **Modelo Dashboard** é uma base **whitelabel/abstrata** criada para acelerar o desenvolvimento de dashboards, painéis administrativos e aplicações de visualização de dados. Ele foi projetado para ser:

- 🎨 **Totalmente Customizável** - Adapte cores, temas, layouts e componentes facilmente
- 🚀 **Pronto para Produção** - Código otimizado e seguindo as melhores práticas
- 📱 **Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- 🌙 **Dark/Light Mode** - Suporte nativo a temas claro e escuro
- ♿ **Acessível** - Componentes acessíveis por padrão (NextUI)
- 🔧 **Modular** - Arquitetura escalável e fácil de manter
- 📊 **Analytics-Ready** - Cards e componentes prontos para visualização de dados

### Por que usar este template?

✅ Economize **horas de setup inicial** com configuração já otimizada
✅ Stack moderna e atualizada (React 19, Next.js 15)
✅ Componentes UI profissionais prontos para uso
✅ TypeScript configurado para desenvolvimento type-safe
✅ Tailwind CSS para estilização rápida e consistente
✅ Arquitetura escalável desde o início

---

## ✨ Características

### Funcionalidades Principais

- ✅ **Next.js 15 App Router** - Roteamento moderno com React Server Components
- ✅ **React 19** - Versão mais recente com novas funcionalidades
- ✅ **TypeScript 5.6** - Desenvolvimento type-safe e autocomplete
- ✅ **Tailwind CSS 3.4** - Estilização utility-first com dark mode
- ✅ **NextUI 2.4** - Biblioteca de componentes UI modernos e acessíveis
- ✅ **Hero Icons 2.1** - +200 ícones SVG profissionais
- ✅ **Framer Motion** - Biblioteca de animações fluidas
- ✅ **next-themes** - Gerenciamento de tema dark/light
- ✅ **Layout Responsivo** - Grid system adaptável (mobile-first)
- ✅ **Glassmorphism UI** - Design moderno com backdrop blur
- ✅ **ESLint Configurado** - Code quality e linting automático

### Componentes Incluídos

- 📊 **Cards de Estatísticas** - Indicadores de KPIs com trends
- 🎨 **Theme Toggle** - Botão de alternância dark/light
- 📈 **Trend Indicators** - Chips coloridos com setas de tendência
- 🎴 **Card System** - Sistema de cards reutilizáveis
- 🎯 **Responsive Grid** - Grid adaptável para diferentes telas

---

## 🛠️ Tecnologias

### Core Stack

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Next.js** | 15.0.3 | Framework React para produção |
| **React** | 19.0.0 | Biblioteca para interfaces de usuário |
| **TypeScript** | 5.6.3 | JavaScript com tipagem estática |

### UI & Styling

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Tailwind CSS** | 3.4.14 | Framework CSS utility-first |
| **NextUI** | 2.4.8 | Componentes UI modernos |
| **Hero Icons** | 2.1.5 | Ícones SVG de alta qualidade |
| **Framer Motion** | 11.11.17 | Animações e transições |
| **next-themes** | 0.4.3 | Gerenciamento de temas |

### Development Tools

| Ferramenta | Versão | Descrição |
|-----------|--------|-----------|
| **ESLint** | 9.14.0 | Linting e code quality |
| **PostCSS** | 8.4.47 | Processamento de CSS |
| **Autoprefixer** | 10.4.20 | Prefixos CSS automáticos |

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** - Versão 18.17 ou superior ([Download](https://nodejs.org/))
- **npm**, **yarn** ou **pnpm** - Gerenciador de pacotes
- **Git** - Para controle de versão ([Download](https://git-scm.com/))

Verificar instalações:

```bash
node --version  # v18.17.0 ou superior
npm --version   # 9.0.0 ou superior
git --version   # 2.0.0 ou superior
```

---

## 📦 Instalação

### 1. Clonar o Repositório

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/ModeloDashboard.git

# Entre no diretório
cd ModeloDashboard
```

### 2. Instalar Dependências

Escolha seu gerenciador de pacotes preferido:

```bash
# Com npm
npm install

# Com yarn
yarn install

# Com pnpm
pnpm install
```

### 3. Configurar Variáveis de Ambiente (Opcional)

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Exemplo de variáveis de ambiente
NEXT_PUBLIC_APP_NAME=Meu Dashboard
NEXT_PUBLIC_API_URL=https://api.exemplo.com
```

---

## 🛠️ Desenvolvimento

### Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

O servidor recarrega automaticamente quando você edita arquivos.

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build otimizado para produção
npm start            # Inicia servidor de produção

# Code Quality
npm run lint         # Executa ESLint
```

---

## 🏗️ Build e Deploy

### Build Local

```bash
# Criar build de produção
npm run build

# Testar build localmente
npm start
```

### Deploy em Plataformas

#### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte seu repositório GitHub na [Vercel Dashboard](https://vercel.com/new).

#### Outras Plataformas

- **Netlify** - [Guia de Deploy](https://docs.netlify.com/frameworks/next-js/)
- **AWS Amplify** - [Guia de Deploy](https://docs.amplify.aws/nextjs)
- **Docker** - [Exemplo de Dockerfile](https://github.com/vercel/next.js/tree/canary/examples/with-docker)

---

## 📁 Estrutura do Projeto

```
ModeloDashboard/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📄 layout.tsx         # Layout raiz com metadata e providers
│   │   ├── 📄 page.tsx           # Página principal do dashboard
│   │   ├── 📄 providers.tsx      # Configuração de providers (NextUI, Theme)
│   │   └── 📄 globals.css        # Estilos globais e variáveis CSS
│   ├── 📂 components/            # Componentes reutilizáveis (criar conforme necessário)
│   ├── 📂 lib/                   # Utilitários e helpers (criar conforme necessário)
│   ├── 📂 hooks/                 # React hooks customizados (criar conforme necessário)
│   ├── 📂 types/                 # TypeScript types/interfaces (criar conforme necessário)
│   └── 📂 styles/                # Arquivos CSS adicionais (opcional)
├── 📂 public/                    # Arquivos estáticos (imagens, fontes, etc)
├── 📂 docs/                      # Documentação do projeto
├── 📄 next.config.mjs            # Configuração do Next.js
├── 📄 tailwind.config.ts         # Configuração do Tailwind CSS
├── 📄 tsconfig.json              # Configuração do TypeScript
├── 📄 postcss.config.js          # Configuração do PostCSS
├── 📄 .eslintrc.json             # Configuração do ESLint
├── 📄 .gitignore                 # Arquivos ignorados pelo Git
├── 📄 package.json               # Dependências e scripts
└── 📄 README.md                  # Este arquivo
```

### Diretórios Principais

- **`/src/app`** - Páginas e rotas do Next.js (App Router)
- **`/src/components`** - Componentes React reutilizáveis
- **`/public`** - Arquivos estáticos acessíveis publicamente
- **`/docs`** - Documentação adicional do projeto

---

## 🎨 Customização

Este template foi criado para ser **100% customizável**. Aqui está como começar:

### 1. Cores e Tema

Edite `/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#sua-cor-primaria',
      secondary: '#sua-cor-secundaria',
      // ... adicione suas cores
    }
  }
}
```

### 2. Metadata e SEO

Edite `/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Seu Dashboard',
  description: 'Sua descrição',
  // ... mais metadata
}
```

### 3. Conteúdo do Dashboard

Edite `/src/app/page.tsx`:

```typescript
// Substitua os cards de exemplo pelos seus dados reais
// Conecte com sua API
// Adicione seus componentes
```

### 4. Componentes NextUI

Customize o tema do NextUI em `/tailwind.config.ts`:

```typescript
plugins: [
  nextui({
    themes: {
      light: { /* seu tema claro */ },
      dark: { /* seu tema escuro */ }
    }
  })
]
```

Para mais detalhes, consulte [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md).

---

## 📚 Documentação Adicional

Documentação detalhada disponível em `/docs`:

- 📖 **[CUSTOMIZATION.md](./docs/CUSTOMIZATION.md)** - Guia completo de customização
- 🏛️ **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Arquitetura e decisões de design
- 🧩 **[COMPONENTS.md](./docs/COMPONENTS.md)** - Guia de componentes disponíveis
- 🚀 **[DEPLOYMENT.md](./docs/DEPLOYMENT.md)** - Guia de deploy em produção

---

## 💼 Casos de Uso

Este template é ideal para:

- 📊 **Dashboards Analytics** - Visualização de métricas e KPIs
- 🏢 **Painéis Administrativos** - Admin panels e backoffice
- 📈 **Aplicações SaaS** - Dashboard de produtos SaaS
- 🎯 **Portais Internos** - Intranets e portais corporativos
- 💰 **Fintech Dashboards** - Painéis financeiros e bancários
- 📱 **Apps de Gerenciamento** - CRM, CMS, ERP simplificados
- 🎓 **Plataformas Educacionais** - Painéis de alunos/professores
- 🏥 **Healthtech** - Dashboards médicos e de saúde

---

## 🗺️ Roadmap

Funcionalidades planejadas:

- [ ] Sistema de autenticação (NextAuth.js)
- [ ] Integração com APIs exemplo
- [ ] Mais componentes de dashboard (gráficos, tabelas)
- [ ] Testes unitários e E2E
- [ ] Storybook para documentação de componentes
- [ ] Mais temas prontos
- [ ] Exemplos de integração com bancos de dados
- [ ] PWA support
- [ ] Internacionalização (i18n)

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Faça um **Fork** do projeto
2. Crie uma **Branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. Faça **Commit** das suas mudanças (`git commit -m 'Add: Nova feature'`)
4. Faça **Push** para a Branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Diretrizes

- Siga o padrão de código existente
- Adicione testes para novas funcionalidades
- Atualize a documentação conforme necessário
- Use commits semânticos (feat:, fix:, docs:, etc)

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Isso significa que você pode:

- ✅ Usar comercialmente
- ✅ Modificar
- ✅ Distribuir
- ✅ Usar privadamente

---

## 👤 Autor

**Seu Nome**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-nome)

---

## 🙏 Agradecimentos

Este projeto utiliza tecnologias incríveis criadas por:

- [Next.js](https://nextjs.org/) - Time da Vercel
- [React](https://react.dev/) - Meta/Facebook
- [Tailwind CSS](https://tailwindcss.com/) - Tailwind Labs
- [NextUI](https://nextui.org/) - NextUI Team
- [Hero Icons](https://heroicons.com/) - Tailwind Labs

---

## 📞 Suporte

Encontrou um bug ou tem uma sugestão?

- 🐛 [Abra uma Issue](https://github.com/seu-usuario/ModeloDashboard/issues)
- 💬 [Discussões](https://github.com/seu-usuario/ModeloDashboard/discussions)
- 📧 Email: seu-email@exemplo.com

---

## 🌟 Mostre seu apoio

Se este projeto foi útil, dê uma ⭐️!

---

**Feito com ❤️ usando Next.js, React e TypeScript**
