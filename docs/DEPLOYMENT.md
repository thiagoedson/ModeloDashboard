# 🚀 Guia de Deploy - Modelo Dashboard

Este guia mostra como fazer deploy do Modelo Dashboard em várias plataformas.

---

## 📋 Índice

1. [Pré-requisitos](#1-pré-requisitos)
2. [Build Local](#2-build-local)
3. [Deploy na Vercel](#3-deploy-na-vercel)
4. [Deploy na Netlify](#4-deploy-na-netlify)
5. [Deploy na AWS Amplify](#5-deploy-na-aws-amplify)
6. [Deploy com Docker](#6-deploy-com-docker)
7. [Deploy em VPS (Ubuntu)](#7-deploy-em-vps-ubuntu)
8. [Variáveis de Ambiente](#8-variáveis-de-ambiente)
9. [Otimizações de Produção](#9-otimizações-de-produção)

---

## 1. Pré-requisitos

Antes de fazer deploy, certifique-se de:

- ✅ Código está versionado no Git
- ✅ Build local funciona sem erros (`npm run build`)
- ✅ Variáveis de ambiente configuradas
- ✅ Testes passando (se houver)
- ✅ Linting sem erros (`npm run lint`)

---

## 2. Build Local

### 2.1 Testar Build

```bash
# Criar build de produção
npm run build

# Iniciar servidor de produção local
npm start
```

Abra [http://localhost:3000](http://localhost:3000) para testar.

### 2.2 Verificar Output

O build do Next.js deve mostrar:

```
Route (app)                              Size     First Load JS
┌ ○ /                                    X kB          XX kB
└ ○ /_not-found                          X kB          XX kB
+ First Load JS shared by all            XX kB
  ├ chunks/framework-xxx.js              XX kB
  ├ chunks/main-app-xxx.js               XX kB
  └ other shared chunks (total)          XX kB

○  (Static)  prerendered as static content
```

---

## 3. Deploy na Vercel

### 3.1 Via Dashboard (Recomendado)

**Passo 1:** Acesse [vercel.com](https://vercel.com)

**Passo 2:** Clique em "Add New Project"

**Passo 3:** Importe seu repositório GitHub

**Passo 4:** Configure o projeto:
- **Framework Preset:** Next.js (detectado automaticamente)
- **Root Directory:** `./` (padrão)
- **Build Command:** `npm run build` (padrão)
- **Output Directory:** `.next` (padrão)

**Passo 5:** Adicione variáveis de ambiente (se necessário)

**Passo 6:** Clique em "Deploy"

### 3.2 Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy para produção
vercel --prod
```

### 3.3 Configuração Customizada

Crie `vercel.json` na raiz:

```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["gru1"],
  "env": {
    "NEXT_PUBLIC_APP_URL": "https://seuapp.vercel.app"
  }
}
```

**Regiões disponíveis:**
- `gru1` - São Paulo, Brasil
- `iad1` - Washington D.C., EUA
- `cdg1` - Paris, França
- [Mais regiões](https://vercel.com/docs/concepts/edge-network/regions)

---

## 4. Deploy na Netlify

### 4.1 Via Dashboard

**Passo 1:** Acesse [netlify.com](https://netlify.com)

**Passo 2:** Clique em "Add new site" → "Import an existing project"

**Passo 3:** Conecte com GitHub e selecione o repositório

**Passo 4:** Configure:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Base directory:** (deixe vazio)

**Passo 5:** Adicione variáveis de ambiente

**Passo 6:** Clique em "Deploy site"

### 4.2 Via CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Inicializar
netlify init

# Deploy
netlify deploy

# Deploy para produção
netlify deploy --prod
```

### 4.3 Configuração (netlify.toml)

Crie `netlify.toml` na raiz:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--legacy-peer-deps"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Instalar plugin:**
```bash
npm install -D @netlify/plugin-nextjs
```

---

## 5. Deploy na AWS Amplify

### 5.1 Via Console

**Passo 1:** Acesse [AWS Amplify Console](https://console.aws.amazon.com/amplify)

**Passo 2:** Clique em "New app" → "Host web app"

**Passo 3:** Conecte com GitHub

**Passo 4:** Selecione o repositório e branch

**Passo 5:** Configure build settings:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**Passo 6:** Adicione variáveis de ambiente

**Passo 7:** Clique em "Save and deploy"

### 5.2 Via CLI

```bash
# Instalar Amplify CLI
npm install -g @aws-amplify/cli

# Configurar
amplify configure

# Inicializar
amplify init

# Adicionar hosting
amplify add hosting

# Publicar
amplify publish
```

---

## 6. Deploy com Docker

### 6.1 Criar Dockerfile

Crie `Dockerfile` na raiz:

```dockerfile
# Stage 1: Dependencies
FROM node:18-alpine AS deps
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Builder
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 3: Runner
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### 6.2 Criar .dockerignore

```
node_modules
.next
.git
.gitignore
README.md
.env*.local
.dockerignore
Dockerfile
docker-compose.yml
```

### 6.3 Atualizar next.config.mjs

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
};

export default nextConfig;
```

### 6.4 Build e Run

```bash
# Build
docker build -t modelo-dashboard .

# Run
docker run -p 3000:3000 modelo-dashboard
```

### 6.5 Docker Compose

Crie `docker-compose.yml`:

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_API_URL=https://api.exemplo.com
    restart: unless-stopped
```

**Usar:**
```bash
docker-compose up -d
```

---

## 7. Deploy em VPS (Ubuntu)

### 7.1 Preparar o Servidor

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar PM2
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx

# Instalar Git
sudo apt install -y git
```

### 7.2 Clonar e Configurar

```bash
# Criar diretório
sudo mkdir -p /var/www
cd /var/www

# Clonar repositório
sudo git clone https://github.com/seu-usuario/ModeloDashboard.git
cd ModeloDashboard

# Instalar dependências
sudo npm install

# Build
sudo npm run build
```

### 7.3 Configurar PM2

```bash
# Criar arquivo ecosystem.config.js
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'modelo-dashboard',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/ModeloDashboard',
    instances: 2,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Iniciar com PM2
pm2 start ecosystem.config.js

# Salvar configuração
pm2 save

# Configurar auto-start
pm2 startup
```

### 7.4 Configurar Nginx

```bash
# Criar configuração
sudo nano /etc/nginx/sites-available/modelo-dashboard
```

Adicione:

```nginx
server {
    listen 80;
    server_name seudominio.com www.seudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Ativar site
sudo ln -s /etc/nginx/sites-available/modelo-dashboard /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 7.5 SSL com Let's Encrypt

```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obter certificado
sudo certbot --nginx -d seudominio.com -d www.seudominio.com

# Testar renovação automática
sudo certbot renew --dry-run
```

---

## 8. Variáveis de Ambiente

### 8.1 Arquivo .env.local (desenvolvimento)

```env
# App
NEXT_PUBLIC_APP_NAME=Meu Dashboard
NEXT_PUBLIC_APP_URL=http://localhost:3000

# API
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Auth (se usar)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=sua-chave-secreta-aqui

# Database (se usar)
DATABASE_URL=postgresql://user:pass@localhost:5432/db
```

### 8.2 Configurar na Plataforma

**Vercel:**
- Settings → Environment Variables

**Netlify:**
- Site settings → Build & deploy → Environment

**AWS Amplify:**
- App settings → Environment variables

**Docker:**
- Via `.env` file ou `docker-compose.yml`

---

## 9. Otimizações de Produção

### 9.1 Next.js Config

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações
  reactStrictMode: true,
  swcMinify: true,

  // Compressão
  compress: true,

  // Imagens
  images: {
    domains: ['exemplo.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Headers de segurança
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
```

### 9.2 Análise de Bundle

```bash
# Instalar analyzer
npm install -D @next/bundle-analyzer

# Atualizar next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

# Analisar
ANALYZE=true npm run build
```

### 9.3 Cache e CDN

- **Vercel:** CDN automático
- **Netlify:** CDN automático
- **CloudFlare:** Adicionar na frente da aplicação
- **AWS CloudFront:** Configurar para Amplify

### 9.4 Monitoring

Adicionar ferramentas de monitoramento:

- **Vercel Analytics** (se usar Vercel)
- **Google Analytics**
- **Sentry** (error tracking)
- **LogRocket** (session replay)

```bash
# Exemplo: Sentry
npm install @sentry/nextjs

# Configurar sentry.client.config.ts e sentry.server.config.ts
```

---

## 📊 Checklist de Deploy

Antes de fazer deploy para produção:

- [ ] Build local funcionando
- [ ] Testes passando
- [ ] Linting sem erros
- [ ] Variáveis de ambiente configuradas
- [ ] Imagens otimizadas
- [ ] SEO metadata configurada
- [ ] Analytics configurado (se necessário)
- [ ] Error tracking configurado
- [ ] SSL/HTTPS habilitado
- [ ] Domínio customizado configurado
- [ ] Backup configurado
- [ ] Monitoring configurado

---

## 🔄 CI/CD

### GitHub Actions

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🆘 Troubleshooting

### Build Failing

```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Variáveis de Ambiente não funcionam

- Variáveis `NEXT_PUBLIC_*` são expostas no browser
- Variáveis sem `NEXT_PUBLIC_` só funcionam no servidor
- Reiniciar servidor após adicionar variáveis

### Problemas de Memória

```bash
# Aumentar limite de memória
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

---

**Deploy bem-sucedido! 🎉**
