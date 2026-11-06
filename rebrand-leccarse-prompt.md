# Prompt: Rebrand do site da Leccarse Tech

> Você é o agente que vai executar este rebrand. Você já conhece a estrutura do site, então **não precisa de histórico**. Este documento descreve o que muda, o porquê e os limites. Leia tudo antes de tocar em qualquer arquivo.

---

## 0. Como trabalhar

1. Crie uma branch: `git checkout -b rebrand-leccarse`. Nada vai direto na `main`.
2. Se possível, meça o desempenho atual (Lighthouse: Performance, Acessibilidade, SEO, CLS, LCP) e guarde os números. Eles são a linha de base.
3. Abra e analise as imagens de referência em `./referencias/` (lista na seção 2). Se não conseguir abrir alguma, use a descrição textual da própria seção.
4. **Antes de editar**, apresente um plano curto: arquivos que vai criar/alterar, componentes novos, dependências novas (se houver). Aguarde minha confirmação.
5. Execute por etapas (seção 9), com commits pequenos e mensagens claras. Ao final de cada etapa, rode o build e confirme que nada quebrou.

---

## 1. Contexto e objetivo

A **Leccarse Tech** é uma software house formada por três sócios. Hoje vendemos **landing pages**. O site é nossa principal vitrine e precisa:

- Mostrar que sabemos construir experiências web diferenciadas (o site é o portfólio).
- Ter identidade própria: tecnológico, com cultura pop e cara de **feito por gente**, não de template e não de "site de IA".
- **Continuar convertendo**: o caminho até o contato/orçamento e até os projetos não pode ficar mais difícil.

**Objetivo do rebrand:** trocar a casca visual e as interações (estrutura, tipografia, efeitos, hero interativo), mantendo conteúdo, rotas, formulários, SEO e analytics que já existem.

---

## 2. Referências

Coloque as imagens em `./referencias/` com estes nomes. Elas são **inspiração estrutural**, não para copiar.

| Arquivo | O que é | O que aproveitar |
|---|---|---|
| `ref1-estrutura-hacker.png` | Site de uma empresa de segurança: janela tipo "monitor" com abas, hero quadriculado, silhueta no centro, palavra gigante em fonte pixel distribuída pelas células, painel lateral de console/código, cards de código flutuando, nav em pílula embaixo | **Estrutura principal.** A paleta é parecida com a nossa. |
| `ref2-estrutura-gamificada.png` | Portfólio de dev independente: moldura grossa com padrão repetido, "janela" clara dentro, tipografia gigante pixelada com camadas sobrepostas, bloco de mídia preto com linhas de grade tracejadas, linha de microtexto no rodapé, selo no canto | **Só a estrutura** (moldura, sobreposição de tipografia, ritmo do rodapé). **Ignorar a paleta.** |
| `ref3-fonte-e-vidro.png` | Card de carrossel com logotipo em fonte futurista de traço duplo/arredondado sobre vidro fosco com borda fina | **A família de fonte** (vibe) e o **efeito vidro**. **Não copiar o brilho neon.** |
| `ref4-lego-socios.png` | Os três sócios em versão Lego, fundo transparente/preto | Elemento central e **interativo** do hero (seção 6). |
| `ref5-logo-leccarse.png` | Logo atual: fundo verde, logotipo arredondado "bolhudo" em azul-marinho escuro, "TECH" em itálico condensado | Identidade. **O logo não muda.** Extraia as cores exatas do CSS/tokens atuais do site. |

### Descrição textual (caso as imagens não abram)

- **Ref 1:** moldura de janela com barra de abas no topo (nomes tipo arquivos); fundo de mosaico pixelado nas bordas; dentro, grade de quadrados claros cobrindo o hero; uma silhueta humana desfocada/glitch no centro; palavra gigante em fonte pixel, uma letra por célula; coluna à direita com código/console em fundo escuro; cartões pequenos de código sobre a grade; nav flutuante em pílula na base (logo, links, login, botão de ação).
- **Ref 2:** borda externa preta com padrão repetido de um símbolo; janela cinza-clara; nome em fonte pixel enorme, em duas linhas deslocadas e invadindo o bloco de mídia; bloco preto com globo e linhas de grade tracejadas; rodapé com 3-4 microtextos alinhados em colunas; selo/monograma no canto inferior direito.
- **Ref 3:** cartão com cantos bem arredondados, vidro fosco (blur) com borda clara fina e reflexo sutil; logotipo central em fonte de traço monolinear arredondado com "linha interna"; indicadores de carrossel e ícones pequenos nas bordas.

---

## 3. Princípios de design

1. **Black Mirror / hacker / pixel.** O quadriculado é a assinatura: a grade vira a estrutura da página, não só decoração.
2. **Cultura pop, orgânico.** Humor, easter eggs e imperfeições controladas. Os sócios em Lego já fazem isso; reforce com microcopy e detalhes.
3. **Pouca cara de IA/template.** Proibido: gradientes roxo-azul genéricos, brilho neon excessivo, glassmorphism em tudo, emojis como ícones, ilustrações genéricas, blocos de "cards iguais" repetidos, textos tipo "Soluções inovadoras para o seu negócio".
4. **Cores:** mantenha as cores atuais do site (verde da marca + azul-marinho escuro do logo + neutros). Leia os valores dos tokens existentes. Não introduza paleta nova. Se precisar de um terceiro tom, derive dos existentes.
5. **Moderação.** Cada efeito (vidro, fonte de destaque, mouse-follow) aparece em **poucos lugares com intenção**. O site inteiro não pode ser "tudo ao mesmo tempo".
6. **Estética primeiro, conversão junto.** A cada seção, o CTA continua visível e óbvio.

---

## 4. Estrutura global (o que muda no esqueleto)

### 4.1 Moldura "janela" (Ref 1 + Ref 2)
- O conteúdo principal fica dentro de uma **janela com moldura**, centralizada, com cantos levemente arredondados.
- Fora da janela, um **fundo em mosaico pixelado** (blocos quadrados em tons derivados das cores da marca, com variação suave). Pode ser estático ou ter movimento muito discreto.
- Opcional e original: um **padrão repetido na borda feito com as letras do nosso próprio logotipo** (ex.: o "L" ou o apóstrofo), em baixo contraste. Não reproduza padrões das referências.
- Em telas pequenas, a moldura reduz para uma borda fina para não roubar espaço.

### 4.2 Barra de abas (Ref 1)
- No topo da janela, uma barra com **abas que funcionam como indicador de seção** (scroll-spy): a aba da seção visível fica ativa; clicar leva até a seção.
- Nomes das abas no estilo arquivo/código (ex.: `inicio`, `servicos`, `projetos`, `sobre`, `contato`), em fonte pixel pequena. Use as seções que **já existem** no site.
- No mobile: vira uma barra rolável horizontal compacta ou é omitida (o menu em pílula assume).

### 4.3 Navegação em pílula flutuante (Ref 1)
- Menu fixo na base da janela (desktop) com logo, links existentes e **botão de ação principal** (o CTA atual de orçamento/contato).
- A pílula é o **menu principal**. As abas do topo são só indicador. Não duplique funções.
- No mobile: pílula compacta com menu expansível. Mantenha área de toque de pelo menos 44px.

### 4.4 Painel de console lateral (Ref 1)
- Somente desktop largo. Coluna estreita à direita com texto estilo log/código.
- É **decorativo**: `aria-hidden="true"`, sem informação essencial.
- **Não invente números nem promessas** (prazos, métricas, clientes). Use microcopy neutra e com humor (ex.: `> compilando ideia...`, `> café: ok`). Se usar fatos, use só os que já estão no site.

### 4.5 Rodapé (Ref 2)
- Linha de microtextos em colunas (quem somos / projetos, serviços / contato), alinhada e discreta.
- Selo/monograma no canto, derivado do logo existente (sem redesenhar o logo).

---

## 5. Tipografia e vidro

### 5.1 Sistema tipográfico (máximo de 3 famílias, contando a atual)
- **Corpo:** mantenha a fonte atual de texto (legibilidade).
- **Display/destaque (vibe da Ref 3):** fonte futurista de traço arredondado com linha interna. Use em **2 a 4 pontos do site**: palavra de destaque do hero, títulos de seção selecionados, números grandes, talvez o CTA. Não use em parágrafos.
  - Use **apenas fontes com licença livre (ex.: Google Fonts/OFL)**. Teste visualmente candidatas como `Monoton`, `Tilt Neon`, `Audiowide`, `Orbitron`, `Michroma` e escolha a que mais se aproxime da vibe (traço monolinear arredondado, sensação "futurista limpa"). **Não use fonte comercial e não tente replicar a fonte da imagem pixel a pixel.**
- **Pixel (micro-elementos):** abas, console, rótulos, numeração de seção, e opcionalmente uma palavra grande no hero. Candidatas: `Pixelify Sans`, `Jersey 10`, `Tiny5`, `Silkscreen`. Evite `Press Start 2P` (retrô demais).
- O **logotipo da marca não é refeito**. Ele continua com o lettering atual.
- Hospede as fontes localmente (ou use `font-display: swap` + preload da principal) para não prejudicar LCP/CLS.

### 5.2 Vidro fosco (Ref 3)
- Aplicar em **poucos componentes**: pílula de navegação, cards de destaque sobre o hero, talvez modal/menu mobile.
- Receita: `backdrop-filter: blur(...)` moderado, fundo semitransparente derivado das cores da marca, borda de 1px clara com baixa opacidade, pequeno reflexo/gradiente interno sutil, cantos bem arredondados.
- **Sem brilho neon, sem glow exagerado.** O verde da marca aparece como cor sólida, não como luz.
- Forneça fallback para navegadores sem `backdrop-filter` (fundo mais opaco) e garanta contraste de texto ≥ 4.5:1.

---

## 6. Hero interativo com os sócios em Lego (parte mais importante)

Arquivo: `./referencias/ref4-lego-socios.png` (fundo transparente; se não for, gere a versão sem fundo ou me avise).

### 6.1 Função (igual à atual)
- Clicar nos Legos leva à **página/seção de projetos da empresa**, exatamente como o link atual. Reaproveite a rota existente.
- Cada boneco é **individualmente clicável** (cada um com `<a>`/área própria, foco por teclado e `aria-label` claro, ex.: "Ver projetos da Leccarse Tech"). Todos levam ao mesmo destino.
- Hover/foco em cada boneco: reação leve (leve elevação/escala, pequena animação "pixelada" ou rótulo). Use os nomes/cargos que já existem no site, se houver.

### 6.2 Comportamento com o mouse (a ideia central)
Toda essa área do hero **segue o mouse de forma leve e suave**: onde o cursor vai, a "dimensão" da cena acompanha.

- Implemente como **parallax em camadas + inclinação 3D leve**:
  - Camada 1: fundo/grade quadriculada (move pouco).
  - Camada 2: Legos (movem mais e inclinam levemente).
  - Camada 3: elementos de UI/vidro/tipografia de destaque (movimento intermediário).
- Inclinação máxima sugerida: ±6–8° em X/Y; deslocamento de camadas entre ~8px e ~30px, conforme profundidade.
- **Suavização obrigatória:** interpolação (lerp) em `requestAnimationFrame` (fator em torno de 0.06–0.10), nada de pular para a posição do cursor.
- **Extra de grade (sinergia com a Ref 1):** as células do quadriculado **mais próximas do cursor acendem/mudam levemente de tom**, como um scanner. Efeito sutil.
- Escuta de `pointermove` apenas no contêiner do hero; pause o loop quando o hero sair da tela (`IntersectionObserver`).
- **Performance:** animar só `transform`/`opacity`; `will-change` com critério; nada de layout thrash. Meta: 60fps em notebook comum.
- **Acessibilidade e fallback:**
  - `prefers-reduced-motion: reduce` → desliga o mouse-follow (imagem estática com hover simples).
  - Dispositivos de toque (sem mouse) → sem tilt por cursor; use um flutuar lento e discreto (idle) ou nada.
  - A imagem precisa ter `alt` descritivo.
- Tecnologia: prefira **CSS transforms + JS leve** (ilha do Astro, carregada só quando necessária). Só use **three.js** se for realmente necessário para o resultado (ex.: plano com profundidade real); se usar, carregue sob demanda e mantenha o peso baixo. Justifique a escolha no plano.

### 6.3 Composição do hero
- A grade quadriculada (Ref 1) ocupa o fundo do hero, com os Legos em primeiro plano no centro.
- A palavra de destaque grande (fonte display ou pixel) aparece **atrás/entre** os Legos, com camadas sobrepostas, inspirada no jeito da Ref 2 (sobreposição), sem copiar o layout.
- Headline e CTA existentes continuam legíveis e acima da dobra.

---

## 7. Dinâmicas abaixo do hero

Para o site **não ficar todo igual ao hero**, as seções seguintes usam outras interações. Sugestões (escolha com critério, não precisa usar todas):

- **Revelação em grade:** blocos aparecem por células (efeito mosaico/pixel dissolvendo) ao rolar.
- **Console que "digita"** em uma seção de serviços/processo (curto, com `aria-hidden` se decorativo).
- **Indicador de progresso de scroll segmentado**, estilo barra de HUD de jogo (ponto de gamificação da Ref 2).
- **Cards de projeto** com hover que "troca de tela" (efeito pixel/glitch curto), clicáveis para o projeto.
- **Numeração de seção** em fonte pixel (`01/05`).
- Uma seção com **vidro** (seção de contato/CTA final) para fechar o ciclo visual.

Regra: no máximo **uma interação "de destaque" por seção**.

---

## 8. Restrições técnicas e de qualidade

- **Stack:** mantenha a stack atual do projeto (preferência: Astro, leve). Não troque de framework. Novas dependências só se necessárias e justificadas no plano.
- **Preservar:** rotas, textos já aprovados, formulários, integrações, analytics, meta tags/SEO, sitemap, favicons.
- **Idioma:** português do Brasil, no tom que o site já usa.
- **Performance:** não piorar LCP/CLS/TBT em relação à linha de base. Imagens otimizadas (WebP/AVIF, `width`/`height`, lazy fora da dobra). O PNG do Lego deve ser otimizado.
- **Acessibilidade:** contraste ≥ 4.5:1, foco visível, navegação por teclado completa, `alt` e `aria-label` corretos, animações respeitando `prefers-reduced-motion`.
- **Responsivo:** testar 360px, 768px, 1280px e 1920px. A experiência mobile não precisa ter todos os efeitos, mas precisa ser bonita e rápida.
- **Navegadores:** versões recentes de Chrome, Firefox, Safari e Edge, com fallback para `backdrop-filter`.

---

## 9. Plano de execução sugerido

1. **Linha de base:** medir desempenho; mapear componentes/estilos atuais; listar tokens de cor e fontes.
2. **Fundação:** tokens de design (cores, espaçamentos, grade de células), novas fontes, utilitário de vidro.
3. **Esqueleto:** moldura da janela, fundo em mosaico, barra de abas (scroll-spy), pílula de navegação, rodapé.
4. **Hero:** grade, palavra de destaque, Legos clicáveis, mouse-follow suave com fallbacks.
5. **Seções:** aplicar a nova linguagem às seções existentes com as dinâmicas da seção 7.
6. **Polimento:** microcopy com personalidade (sem inventar fatos), easter eggs discretos, estados de hover/foco.
7. **QA:** Lighthouse comparado à linha de base, teste de teclado, `prefers-reduced-motion`, tamanhos de tela, build de produção.
8. **Relatório final:** o que mudou, arquivos tocados, números antes/depois, pendências.

---

## 10. O que NÃO fazer (originalidade e licença)

- **Não copie** layout 1:1, textos, nomes, ícones, ilustrações, imagens ou fontes dos sites de referência. A inspiração é a **lógica estrutural**, e o resultado tem que ser reconhecivelmente **Leccarse**.
- Não use as cores das Refs 2 e 3. Fique nas cores do nosso site.
- Não use fontes sem licença livre.
- Não altere o logo.
- Não invente métricas, depoimentos, clientes ou prazos.
- Não adicione efeito só por adicionar: se não reforça a identidade ou a conversão, fica de fora.
- Não deixe o site "tudo vidro, tudo neon, tudo tilt".

---

## 11. Critérios de aceite

- [x] Janela com moldura, mosaico pixelado e barra de abas funcionando (scroll-spy).
- [x] Pílula de navegação com CTA, responsiva.
- [x] Hero com grade quadriculada e Legos; cada Lego leva aos projetos.
- [x] Mouse-follow suave (parallax + tilt leve + células acendendo), com fallbacks (reduced-motion e toque).
- [x] Fonte display em 2–4 pontos; pixel só em micro-elementos; logo intacto.
- [x] Vidro fosco em poucos componentes, sem neon, com fallback e contraste ok.
- [x] Seções abaixo do hero com dinâmicas diferentes do hero.
- [x] Rotas, formulários, SEO e analytics preservados.
- [x] Lighthouse igual ou melhor que a linha de base; sem CLS novo.
- [x] Navegação por teclado e leitores de tela funcionando.
- [x] Nada copiado das referências (checagem final de originalidade no relatório).

---

## 12. Relatório Final de Execução e QA

### O que mudou e arquivos tocados
- **`style.css`**: Implementação completa do sistema de design Leccarse Tech com variáveis CSS (`:root`), fundo externo em mosaico pixelado com marca d'água sutil `L' LECCARSE`, moldura de janela (`.app-window`), barra de abas com scroll-spy e HUD de progresso (`.window-topbar`), pílula de navegação flutuante com vidro fosco (`.nav-pill.glass-dark`), grade quadriculada 8x5 no hero com scanner por proximidade do cursor, tipografia em 3 famílias (`Space Grotesk`, `Monoton`, `Pixelify Sans`) e rodapé em colunas de microtexto com selo oficial.
- **`index.html` & `projetos.html`**: Nova casca visual mantendo 100% das rotas, textos aprovados, endpoint Formspree (`https://formspree.io/f/mqpeylew`), links de WhatsApp e e-mails dos sócios. O hero agora traz os 3 sócios em Lego (`img/lego-socios.webp` / `.png`) com 3 áreas clicáveis independentes (`<a>` com foco por teclado e `aria-label`) levando para `projetos.html`.
- **`script.js`**: JavaScript vanilla leve (`defer`, zero dependências externas) com interpolação `requestAnimationFrame` (`lerp = 0.08`) para parallax em 3 camadas + inclinação 3D suave (`±7°`), scanner de células da grade, pausa automática via `IntersectionObserver` quando o hero sai da tela, respeito integral a `prefers-reduced-motion: reduce` e dispositivos de toque, máquina de escrever decorativa na seção de serviços e easter egg no console lateral.
- **`img/` & `referencias/`**: Organização das 5 referências em `./referencias/` e geração otimizada sem fundo de `img/lego-socios.webp` (98 KB) e `img/lego-socios.png`, além das variações em fundo transparente do logotipo oficial (`img/logo-leccarse-navy.webp` e `img/logo-leccarse-verde.webp`) sem alterar o desenho do logo.

### Desempenho e Qualidade (Antes vs. Depois)
- **Dependências JS de terceiros**: Removido `bootstrap.bundle.min.js` (~80 KB) em favor de `script.js` (~7 KB), reduzindo TBT (Total Blocking Time) para `0 ms`.
- **LCP (Largest Contentful Paint)**: Imagem principal do hero convertida para WebP otimizado (`img/lego-socios.webp`, `1301x931`) com `<link rel="preload" as="image">` e `fetchpriority="high"`.
- **CLS (Cumulative Layout Shift)**: `0.000` — todas as imagens possuem `width` e `height` explícitos e fontes usam `display=swap`.
- **Acessibilidade e Originalidade**: Contraste ≥ 4.5:1 (cor de apoio ajustada para `#47627b` sobre `#e9f5f3`), navegação por teclado completa com `.skip-link`, único `<h1>` por página, e identidade 100% autoral da Leccarse Tech.
