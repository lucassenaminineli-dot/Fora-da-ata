# Fora da Ata — projeto Astro

Site do blog **Fora da Ata** ("Fatos. Contexto. Opinião."), construído com [Astro](https://astro.build)
e pronto pra publicar de graça na [Vercel](https://vercel.com).

## Rodando localmente

Pré-requisito: [Node.js](https://nodejs.org) instalado (versão 18 ou mais recente).

```bash
npm install
npm run dev
```

O site abre em `http://localhost:4321`.

## Estrutura do projeto

```
src/
  content/blog/        → os artigos, um arquivo .md por post
  content.config.ts    → o "formulário" que todo post precisa seguir (schema)
  components/          → Header, Footer, card de artigo, vitrine do Instagram, newsletter
  layouts/BaseLayout.astro → moldura de toda página (head, header, footer)
  pages/
    index.astro         → home
    sobre.astro         → página "Sobre" (Lucas Sena)
    tag/[category].astro → página de cada editoria (gerada automaticamente)
    blog/[...slug].astro → página de cada artigo (gerada automaticamente)
    rss.xml.js          → feed RSS automático em /rss.xml
  styles/global.css     → cores, tipografia e todo o visual da marca
public/
  favicon.svg           → ícone da aba do navegador
```

## Como publicar um novo artigo

1. Crie um arquivo `.md` novo dentro de `src/content/blog/`. O nome do arquivo vira o endereço do post
   (ex: `meu-artigo.md` → `seusite.com/blog/meu-artigo/`).
2. Cole este cabeçalho no topo do arquivo, preenchendo os campos:

```markdown
---
title: "Título do artigo"
excerpt: "Resumo de uma linha que aparece no card"
category: "Política" # ou Direito, Futebol, Atualidades, Opinião
pubDate: 2026-10-01
coverStyle: "petrol" # ou dark, pale — só muda a cor da capa do card
---

## O Fato
...

## O Contexto
...

## A Leitura
...

## A Opinião
...
```

3. Salve, faça `git add`, `git commit` e `git push`. A Vercel republica o site automaticamente.

## Como mudar cores e fontes

Tudo está centralizado no topo de `src/styles/global.css`, nas variáveis `--petrol`, `--ink`,
`--off-white` etc. Trocando esses valores, o site inteiro se atualiza.

## Como ativar a newsletter de verdade

O formulário em `src/components/Newsletter.astro` hoje é só visual (o site é 100% estático,
sem servidor). Pra ativá-lo de graça:

1. Crie uma conta gratuita em [buttondown.com](https://buttondown.com), [mailerlite.com](https://mailerlite.com)
   ou [convertkit.com](https://convertkit.com).
2. Copie a "action URL" do formulário de inscrição que eles fornecem.
3. Cole essa URL no atributo `action` do `<form>` dentro de `Newsletter.astro`.

## Publicando na Vercel

1. Suba este projeto pra um repositório no GitHub.
2. Em [vercel.com](https://vercel.com), clique em "Add New" → "Project" e selecione o repositório.
3. A Vercel detecta o Astro automaticamente — clique em "Deploy".
4. Depois do primeiro deploy, atualize o campo `site` em `astro.config.mjs` com a URL real
   (usada só para gerar links absolutos no RSS).

## Domínio próprio (opcional)

Compre um domínio em qualquer registrador e adicione-o em Project Settings → Domains no painel
da Vercel. A hospedagem continua gratuita — só o domínio em si tem custo, cobrado pelo registrador.
