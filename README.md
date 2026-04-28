# Coopstar Express - Modernização e Refatoração

Este repositório contém o projeto de modernização do site institucional da **Coopstar Express**, uma cooperativa de transporte e logística. O projeto foi refatorado de uma estrutura legada para uma arquitetura moderna utilizando **Next.js**.

## 🏗️ Estrutura do Projeto

- `/coopstar`: Aplicação principal desenvolvida em Next.js 15+ com React 19.
- `/legacy-site`: Arquivos do site original (PHP/HTML) mantidos para referência histórica e transição.

## 🚀 Tecnologias Utilizadas (Pasta /coopstar)

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS v4
- **Animações:** Framer Motion
- **Ícones:** Lucide React

## 🛠️ Como Iniciar

### Pré-requisitos
- Node.js 20+
- npm ou yarn

### Instalação e Execução
1. Entre na pasta do projeto:
   ```bash
   cd coopstar
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000` no seu navegador.

## 📦 Produção
Para gerar a build de produção:
```bash
npm run build
npm run start
```

## 🔒 Segurança e DevOps
- Arquivos sensíveis são ignorados via `.gitignore`.
- Arquivo `.env.example` disponível para configuração de chaves de ambiente.
- Estrutura pronta para deploy em plataformas como Vercel ou Netlify.

---
*Projeto mantido por [trizvcx](https://github.com/trizvcx)*
