# Infraestrutura Cloud — Costa & Souza Site

## 1. Resumo executivo

O `costa-souza-vistos-site` é uma aplicação **TanStack Start** (React + Vite + TypeScript) gerada via Lovable. Hoje o build é feito pelo `@lovable.dev/vite-tanstack-config`, que usa **Nitro** com target **Cloudflare** como padrão.

Este documento propõe uma infraestrutura cloud **pronta para produção**, mantendo o mesmo stack e fornecedor, mas com:

- Domínio próprio + HTTPS + redirecionamentos
- Edge CDN global para performance
- Ambientes separados (staging / production)
- CI/CD automatizado
- Captura segura de leads (formulário → backend/CRM)
- Observabilidade básica
- Custo controlado para um site institucional

---

## 2. Stack tecnológico atual

| Camada          | Tecnologia                                                    |
| --------------- | ------------------------------------------------------------- |
| Framework       | TanStack Start (React + Vite)                                 |
| Runtime         | Nitro (edge/serverless)                                       |
| Default target  | Cloudflare Workers/Pages                                      |
| Bundler         | Vite 8                                                        |
| Package manager | Bun (lockfile `bun.lock`)                                     |
| UI              | Tailwind CSS 4 + Radix UI + shadcn/ui                         |
| Analytics       | Sonner (frontend); GA4/GTM/Meta Pixel ainda não configurados  |
| Formulário      | Client-side → redireciona para WhatsApp (sem backend próprio) |

---

## 3. Arquitetura proposta

```
┌─────────────────────────────────────┐
│           Usuário final             │
└─────────────┬───────────────────────┘
              │ HTTPS
              ▼
┌─────────────────────────────────────┐
│  Cloudflare DNS + CDN (Orange cloud)│
│  - Caching estático                 │
│  - DDoS protection / WAF            │
│  - Redirecionamentos (www/apex)     │
└─────────────┬───────────────────────┘
              │
              ▼
┌─────────────────────────────────────┐
│   Cloudflare Pages / Workers        │
│   - SSR/ISR do TanStack Start       │
│   - Edge locations globais          │
│   - Funções serverless (API routes) │
└─────────────┬───────────────────────┘
              │
    ┌─────────┴─────────┐
    ▼                   ▼
┌─────────┐      ┌─────────────────┐
│ KV/DO   │      │ External APIs   │
│ (cache, │      │ - WhatsApp      │
│  sessões│      │ - CRM/Zapier    │
│  rate)  │      │ - Email/SMS     │
└─────────┘      └─────────────────┘
```

### Por que Cloudflare?

- O projeto já é buildado para Cloudflare pelo Lovable/Nitro.
- Custo baixo para sites estáticos/SSR leves.
- Edge global próximo ao público brasileiro (Cloudflare tem POPs no Brasil).
- Workers/Pages suportam SSR/edge functions que o TanStack Start precisa.
- DNS, CDN, WAF e certificates em um só lugar.

---

## 4. Componentes de infraestrutura

### 4.1. Cloudflare Pages (host principal)

- **Project name**: `costa-souza-vistos-site`
- **Build command**: `bun run build`
- **Build output directory**: `dist` (verificar após build; Nitro pode usar `.output` ou `.nitro`)
- **Root directory**: `site-costa-souza-vistos`
- **Environment variables** (ver seção 5):
  - `NODE_ENV`
  - `VITE_WHATSAPP_NUMBER`
  - `VITE_GA_ID`
  - `VITE_GTM_ID`
  - `VITE_META_PIXEL_ID`
  - `LEAD_WEBHOOK_URL` (secret, usado em server functions)
  - `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` (proteção do formulário)

### 4.2. Cloudflare Workers (funções serverless)

Se o TanStack Start for deployado via Nitro em Workers, as server functions (`createServerFn`) rodam diretamente no edge. Caso contrário, usar Pages Functions.

Funções necessárias para evoluir o site:

| Rota               | Função                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------- |
| `/api/lead`        | Recebe lead do formulário, valida com Zod, envia para CRM/Zapier/Make, retorna sucesso/erro |
| `/api/contact`     | Enviar mensagem para e-mail institucional (resend/sendgrid)                                 |
| `/api/utm-capture` | Capturar UTM e origem do lead antes do redirecionamento WhatsApp                            |
| `/api/health`      | Health check para monitoramento                                                             |

### 4.3. Cloudflare KV / D1 (opcional)

| Serviço | Uso                                                                                     |
| ------- | --------------------------------------------------------------------------------------- |
| **KV**  | Cache de páginas, configurações, rate-limit por IP                                      |
| **D1**  | Leads, depoimentos, conteúdo dinâmico leve (se não usar PostgreSQL da Authority Engine) |

> **Recomendação**: para começar, usar KV apenas para cache/rate-limit. Se a Costa & Souza for integrada na Authority Engine, migrar dados para PostgreSQL via Prisma.

### 4.4. Cloudflare Turnstile (CAPTCHA invisible)

- Proteger o formulário de contato contra spam.
- Substituir validações client-side apenas por uma validação server-side com secret.

### 4.5. DNS e domínios

- **Domínio principal**: `costaesouzavistos.com` (exemplo)
- **Registro**: CNAME `www` → `costa-souza-vistos-site.pages.dev`
- **Apex**: usar CNAME flattening do Cloudflare ou redirecionar `costaesouzavistos.com` → `www.costaesouzavistos.com`
- **Redirecionamentos**:
  - `http://*` → `https://*`
  - `www` ↔ apex (definir canonical)

---

## 5. Variáveis de ambiente

### 5.1. Públicas (prefixo `VITE_` para serem injetadas no build)

```env
VITE_SITE_URL=https://costaesouzavistos.com
VITE_WHATSAPP_NUMBER=5562000000000
VITE_WHATSAPP_MESSAGE=Olá, gostaria de falar com um especialista em vistos americanos.
VITE_GA_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXX
VITE_META_PIXEL_ID=XXXXXXXXXX
VITE_TURNSTILE_SITE_KEY=0x4AAAAAA...
```

### 5.2. Secretas (somente no servidor / Cloudflare Secrets)

```env
LEAD_WEBHOOK_URL=https://hooks.zapier.com/...
LEAD_EMAIL=contato@costaesouzavistos.com
TURNSTILE_SECRET_KEY=0x4AAAAAA...
RESEND_API_KEY=re_...
AUTHORITY_ENGINE_API_KEY=...
```

---

## 6. CI/CD (GitHub Actions)

### 6.1. Arquivos necessários

```text
.github/
└── workflows/
    ├── deploy-staging.yml
    └── deploy-production.yml
projects/costa-souza-vistos-site/
├── wrangler.toml
├── wrangler.staging.toml
└── docs/INFRAESTRUTURA.md (este arquivo)
```

### 6.2. Fluxo

```
Pull Request
    │
    ├──► Lint + Typecheck + Build (preview environment)
    │
Merge na main
    │
    ├──► Deploy automático para Staging
    │
Tag vX.Y.Z
    │
    └──► Deploy automático para Production
```

### 6.3. Exemplo de workflow (staging)

```yaml
name: Deploy Costa & Souza — Staging

on:
  push:
    branches: [main]
    paths:
      - "site-costa-souza-vistos/**"
      - ".github/workflows/deploy-costa-silva-staging.yml"

jobs:
  deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: site-costa-souza-vistos
    steps:
      - uses: actions/checkout@v4

      - name: Setup Bun
        uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Lint
        run: bun run lint

      - name: Typecheck
        run: bunx tsc --noEmit

      - name: Build
        run: bun run build
        env:
          VITE_SITE_URL: https://staging.costaesouzavistos.com
          VITE_WHATSAPP_NUMBER: ${{ secrets.VITE_WHATSAPP_NUMBER }}

      - name: Deploy to Cloudflare Pages (staging)
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy .output/public --project-name=costa-souza-vistos-site-staging --branch=main
```

> **Nota**: o diretório de build (`dist`, `.output/public` ou `.nitro`) deve ser confirmado após rodar `bun run build` localmente.

---

## 7. Segurança

| Item                 | Implementação                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------ |
| HTTPS                | Cloudflare SSL/TLS (Full Strict)                                                           |
| WAF                  | Cloudflare managed rules + rate limiting                                                   |
| Formulário           | Validação Zod server-side + Turnstile                                                      |
| Headers de segurança | HSTS, CSP, X-Frame-Options, Referrer-Policy (via Cloudflare Transform Rules ou middleware) |
| Secrets              | Cloudflare Secrets, nunca no código                                                        |
| Rate limit           | Cloudflare Rate Limiting ou KV-based por IP                                                |

### Headers recomendados

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data: https://*; connect-src 'self' https://www.google-analytics.com;
```

---

## 8. Observabilidade

| Ferramenta            | Uso                                                  |
| --------------------- | ---------------------------------------------------- |
| Cloudflare Analytics  | Tráfego, cache hit ratio, erros 5xx, Core Web Vitals |
| Google Analytics 4    | Comportamento, conversões, origem de tráfego         |
| Google Search Console | Indexação, keywords, performance de busca            |
| Sentry / Logflare     | Log de erros frontend/backend (opcional)             |
| Uptime monitoring     | Cloudflare Pulse ou UptimeRobot                      |

### Eventos de conversão a rastrear

- `whatsapp_click` (header, float, hero, pacotes)
- `form_submit` (formulário de contato)
- `form_submit_success` / `form_submit_error`
- `phone_click`
- `package_select` (Essencial, Completo, Premium)
- `scroll_depth` (25%, 50%, 75%, 100%)

---

## 9. Custos estimados (mensais)

| Serviço            | Plano                  | Custo estimado   |
| ------------------ | ---------------------- | ---------------- |
| Cloudflare Pages   | Free / Pro             | US$ 0–20         |
| Cloudflare Workers | Free (100k/dia) ou Pro | US$ 0–5          |
| Cloudflare KV      | Free                   | US$ 0            |
| Cloudflare DNS/Pro | Pro                    | US$ 20           |
| Turnstile          | Free                   | US$ 0            |
| Resend (e-mail)    | Free tier              | US$ 0            |
| Analytics          | GA4 + Search Console   | US$ 0            |
| **Total**          |                        | **US$ 0–45/mês** |

> Estimativa para site institucional com tráfego moderado. Escalar conforme volume.

---

## 10. Roadmap de evolução

| Fase                        | Prazo    | Entrega                                                                    |
| --------------------------- | -------- | -------------------------------------------------------------------------- |
| **1. Foundation**           | Semana 1 | Configurar domínio, DNS, HTTPS, deploy manual no Cloudflare Pages          |
| **2. CI/CD**                | Semana 2 | Workflows de GitHub Actions para staging/production                        |
| **3. Backend leve**         | Semana 3 | Implementar `/api/lead` com validação e envio para CRM                     |
| **4. Segurança**            | Semana 4 | Turnstile, rate limit, headers de segurança, política de privacidade       |
| **5. Integração Authority** | Futuro   | Integrar com a plataforma Authority Engine (PostgreSQL, Prisma, dashboard) |

---

## 11. Próximos passos imediatos

1. **Definir domínio** real da Costa & Souza (ex: `costaesouzavistos.com`).
2. **Criar conta/projetos no Cloudflare**: Pages + DNS + Workers.
3. **Gerar `CLOUDFLARE_API_TOKEN`** com permissões para Pages e Workers.
4. **Adicionar secrets** no GitHub (Cloudflare token, account ID, WhatsApp number, etc.).
5. **Criar `wrangler.toml`** para deploy local/preview.
6. **Rodar build local** e confirmar pasta de saída.
7. **Testar deploy manual** antes de automatizar.
8. **Configurar GA4/GTM/Search Console** e Meta Pixel.
9. **Criar política de privacidade** e página de obrigado/thank-you.

---

## 13. Rodando localmente

### Requisitos

- **Node.js 22+** (o projeto usa `@tanstack/react-start` que requer `>=22.12.0`).
- Recomendado usar **Bun** (`bun.lock`), mas `npm` funciona com avisos de engine.

### Passos

```bash
cd site-costa-souza-vistos

# Com Bun (recomendado)
bun install
bun run dev

# Com npm (fallback)
npm install
npm run dev
```

- O servidor sobe em `http://localhost:8080/`.
- O build gera a pasta `.output/public` (usada pelo wrangler e Cloudflare Pages).

### Variáveis locais

Copie `.env.example` para `.env.local` e preencha os valores reais:

```bash
cp .env.example .env.local
```

> `.env.local` e `package-lock.json` (quando usar npm) estão no `.gitignore` e não devem ser commitados.

---

## 14. Arquivos de infraestrutura a criar

```text
site-costa-souza-vistos/
├── wrangler.toml              # Configuração de deploy
├── wrangler.staging.toml      # Configuração de staging
├── .env.example               # Variáveis de ambiente documentadas
├── .github/
│   └── workflows/
│       ├── deploy-costa-silva-staging.yml
│       └── deploy-costa-silva-production.yml
└── docs/
    └── INFRAESTRUTURA.md      # Este documento
```

---

_Documento interno. Ajustar domínios, IDs e secrets conforme a conta real da Costa & Souza._
