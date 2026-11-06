# Leccarse Tech (Morse & Cacciatori) — Site institucional

Site da **Leccarse Tech**, software house formada por três sócios desenvolvedores (incluindo Athos Morse em dev e treinamento e Romeu Cacciatori em dev e primeiros contatos), especializada em landing pages de alta conversão, sistemas web sob medida e automação.

> A base tecnológica das suas maiores ideias.

## English

Corporate website for **Leccarse Tech** (formerly Morse & Cacciatori), a three-partner software house specializing in high-conversion landing pages, custom web systems, and automation. The site content is in Brazilian Portuguese.

**Stack:** plain HTML5 + CSS3, Bootstrap 5.3 CSS via CDN, Space Grotesk + Monoton + Pixelify Sans via Google Fonts, lightweight vanilla JavaScript (`script.js`), contact form via Formspree. No build step, no backend.

**Files**

- `index.html`: main page inside the Leccarse window frame (interactive Lego hero with 3D mouse-follow & grid scanner, services, methodology, cases, about, glass contact section)
- `projetos.html`: portfolio page with custom projects and live demos
- `style.css`: custom styles; colors and fonts are CSS variables at the top (`:root`)
- `script.js`: vanilla JS for smooth `requestAnimationFrame` lerp parallax/tilt, scroll-spy window tabs, HUD progress bar, console typewriter, and Formspree AJAX submission
- `img/`: minifigure artwork (`lego-socios.png` / `lego-socios.webp`, `avatares.png` / `avatares.webp`) and official Leccarse Tech logo assets
- `referencias/`: structural inspiration references for the Leccarse Tech rebrand
- `GEMINI.md`: project context for the AI agent (in English)

**Run locally:** open `index.html` in a browser (internet needed for the CDN assets), or run `python3 -m http.server 8000` and visit `http://localhost:8000`.

**Deploy:** it is a static site, so GitHub Pages, Netlify or Cloudflare Pages all work on their free plans. No build command is needed.

**Contact form:** it posts to Formspree. Messages arrive at the email of the account that owns the form; recipients can be changed in the Formspree dashboard.

**Roadmap highlights**

- Short term: favicon, Open Graph/Twitter cards, WhatsApp link, 404 page, `robots.txt` and `sitemap.xml`, custom domain with company email
- Medium term: portfolio/case studies, testimonials, privacy policy (LGPD), cookieless analytics, more minifigure poses, self-hosted Bootstrap and font
- Long term: migrate to Flask + Jinja2 with Frozen-Flask, technical blog, English version of the site, one page per service, a training area, automatic deploys with GitHub Actions

The full checklist is in the Portuguese section "Propostas futuras" below.

---

## Stack

- HTML5 + CSS3, sem build e sem backend
- [Bootstrap 5.3](https://getbootstrap.com/) via CDN (grid, navbar, formulário)
- Fonte [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) via Google Fonts
- Formulário de contato via [Formspree](https://formspree.io/)

## Estrutura

```
.
├── index.html        # página única: hero, serviços, sobre e contato
├── style.css         # identidade visual (variáveis de cor e fonte no topo)
├── img/
│   ├── avatares.png  # bonecos LEGO (fallback)
│   └── avatares.webp # mesma imagem, mais leve (usada pelo navegador quando possível)
├── README.md
└── GEMINI.md         # contexto do projeto para o agente de IA
```

## Como rodar localmente

Não precisa instalar nada. Abra o `index.html` no navegador (precisa de internet por causa do Bootstrap e da fonte).

Se preferir um servidor local:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Como editar

| O que mudar | Onde |
|---|---|
| Cores e fonte | variáveis em `:root`, no topo do `style.css` |
| Textos de serviços, sobre e contato | seções comentadas no `index.html` |
| E-mails de contato | seção `#contato` do `index.html` |
| Destino do formulário | atributo `action` do `<form>` (endpoint do Formspree) |
| Imagem dos bonecos | `img/avatares.png` e `img/avatares.webp` (manter as duas) |

### Identidade visual

- Degradê do hero: verde-neon (`#49f96b`) → ciano (`#94f6ef`) → gelo (`#e9f5f3`)
- Títulos em caixa-alta e peso leve (300) no hero
- Subtítulo em azul-acinzentado (`#55708a`)
- Botões em tinta escura (`#06180e`) com formato de pílula

## Como publicar

Por ser um site estático, qualquer um destes serve (todos têm plano gratuito):

1. **GitHub Pages**: suba os arquivos num repositório, depois *Settings → Pages → Deploy from a branch*.
2. **Netlify** ou **Cloudflare Pages**: arraste a pasta ou conecte o repositório. Não precisa de comando de build.

Depois, para usar domínio próprio (ex.: `morseecacciatori.com.br`), registre o domínio e aponte o DNS para o serviço escolhido.

## Formulário de contato

O formulário envia para o Formspree. As mensagens chegam no e-mail da conta onde o formulário foi criado. Para mudar o destino ou receber em mais de um e-mail, ajuste no painel do Formspree.

## Propostas futuras

Ideias organizadas por prioridade. Nada disso é obrigatório; é um mapa do que faz sentido evoluir.

### Curto prazo (antes ou logo após publicar)

- [x] **Favicon** com o símbolo M&C em SVG e múltiplos tamanhos PNG (incluindo padrão Google)
- [x] **Metadados de compartilhamento** (Open Graph e Twitter Card) para o link ficar bonito no WhatsApp e LinkedIn
- [x] **Link de WhatsApp** na seção de contato
- [ ] **Página 404** com tema LEGO
- [ ] **`robots.txt` e `sitemap.xml`** para o Google indexar
- [ ] **Domínio próprio** e e-mail com o domínio da empresa (ex.: `contato@seudominio.com.br`)

### Médio prazo

- [x] **Seção de projetos/portfólio** com cases no formato Problema → Solução → Impacto (BarbeMan e Ranking B3)
- [x] **Seção "Como Trabalhamos" (Metodologia em 4 etapas)** e **Stack tecnológico** na página principal
- [ ] **Depoimentos** de clientes assim que existirem
- [ ] **Política de privacidade** (LGPD), principalmente por causa do formulário
- [ ] **Analytics sem cookies** (Plausible ou Umami) para saber de onde vêm as visitas
- [ ] **Bonecos em outras poses** nas seções "Quem somos" e "Contato", mantendo o diferencial da marca
- [ ] **Hospedar Bootstrap e fonte localmente**, para o site não depender de CDN e carregar mais rápido

### Longo prazo

- [ ] **Migrar para Flask + Jinja2 com Frozen-Flask**: templates reaproveitáveis (header e footer) e exportação para HTML estático, sem mudar a hospedagem
- [ ] **Blog técnico** para atrair busca orgânica (tutoriais, bastidores dos projetos)
- [ ] **Versão em inglês** do site
- [ ] **Página por serviço**, com preço de referência e processo de trabalho
- [ ] **Área de treinamento**, com agenda de turmas e material, já que o Athos atua nessa frente
- [ ] **Deploy automático** com GitHub Actions a cada commit

## Licença

Projeto privado da Morse & Cacciatori. Todos os direitos reservados, incluindo a imagem dos bonecos.

<!-- Vercel deployment trigger: Leccarse Tech rebrand -->
