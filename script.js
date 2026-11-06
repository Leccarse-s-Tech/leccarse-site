/* =====================================================
   Leccarse Tech — Interactive Behavior (Vanilla JS)
   - Smooth rAF mouse-follow parallax + 3D tilt in Hero
   - Grid scanner cell illumination near cursor
   - Scroll-spy window tabs + segmented HUD progress bar
   - Mobile floating pill navigation toggle
   - Section reveal + decorative console typewriter + Easter egg
   - Formspree AJAX contact form handler
   ===================================================== */

(function () {
  'use strict';

  document.documentElement.classList.add('js-enabled');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)');

  /* ---------------------------------------------------
     1. Mobile Floating Pill Navigation
     --------------------------------------------------- */
  const pillToggle = document.getElementById('nav-pill-toggle');
  const pillLinks = document.getElementById('nav-pill-links');

  if (pillToggle && pillLinks) {
    pillToggle.addEventListener('click', function () {
      const isOpen = pillLinks.classList.toggle('is-open');
      pillToggle.setAttribute('aria-expanded', String(isOpen));
      pillToggle.textContent = isOpen ? '[ fechar ]' : '[ menu ]';
    });

    pillLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        pillLinks.classList.remove('is-open');
        pillToggle.setAttribute('aria-expanded', 'false');
        pillToggle.textContent = '[ menu ]';
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && pillLinks.classList.contains('is-open')) {
        pillLinks.classList.remove('is-open');
        pillToggle.setAttribute('aria-expanded', 'false');
        pillToggle.textContent = '[ menu ]';
        pillToggle.focus();
      }
    });
  }

  /* ---------------------------------------------------
     2. Hero Mouse-Follow (Lerp Parallax + 3D Tilt + Grid Scanner)
     --------------------------------------------------- */
  const heroSection = document.getElementById('inicio');
  const gridCells = heroSection ? Array.from(heroSection.querySelectorAll('.grid-cell:not(.grid-cell--accent)')) : [];

  if (heroSection && !prefersReducedMotion.matches && !isCoarsePointer.matches) {
    let targetX = 0; // Normalized -1 to 1
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHeroVisible = true;
    let rafId = null;
    const LERP_FACTOR = 0.08;

    function updateHeroTransforms() {
      currentX += (targetX - currentX) * LERP_FACTOR;
      currentY += (targetY - currentY) * LERP_FACTOR;

      // Layer 1: Grid backdrop (subtle shift: max 8px)
      const l1x = (currentX * 8).toFixed(2);
      const l1y = (currentY * 8).toFixed(2);

      // Layer 2: Lego figures (stronger shift: max 24px + 3D tilt: max 7deg)
      const l2x = (currentX * 24).toFixed(2);
      const l2y = (currentY * 18).toFixed(2);
      const tiltX = (-currentY * 7).toFixed(2);
      const tiltY = (currentX * 7).toFixed(2);

      // Layer 3: Glass UI card (intermediate shift: max 14px)
      const l3x = (currentX * 14).toFixed(2);
      const l3y = (currentY * 11).toFixed(2);

      heroSection.style.setProperty('--layer1-x', l1x + 'px');
      heroSection.style.setProperty('--layer1-y', l1y + 'px');
      heroSection.style.setProperty('--layer2-x', l2x + 'px');
      heroSection.style.setProperty('--layer2-y', l2y + 'px');
      heroSection.style.setProperty('--tilt-x', tiltX + 'deg');
      heroSection.style.setProperty('--tilt-y', tiltY + 'deg');
      heroSection.style.setProperty('--layer3-x', l3x + 'px');
      heroSection.style.setProperty('--layer3-y', l3y + 'px');

      const delta = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      if (isHeroVisible && delta > 0.001) {
        rafId = requestAnimationFrame(updateHeroTransforms);
      } else {
        rafId = null;
      }
    }

    function startLoopIfNeeded() {
      if (!rafId && isHeroVisible && !prefersReducedMotion.matches) {
        rafId = requestAnimationFrame(updateHeroTransforms);
      }
    }

    heroSection.addEventListener('pointermove', function (event) {
      if (prefersReducedMotion.matches || !isHeroVisible) return;

      const rect = heroSection.getBoundingClientRect();
      const relX = (event.clientX - rect.left) / rect.width;
      const relY = (event.clientY - rect.top) / rect.height;

      targetX = (relX - 0.5) * 2;
      targetY = (relY - 0.5) * 2;
      startLoopIfNeeded();

      // Grid scanner: illuminate cells near pointer
      if (gridCells.length > 0) {
        const cols = 8;
        const rows = 5;
        const activeCol = Math.floor(relX * cols);
        const activeRow = Math.floor(relY * rows);

        gridCells.forEach(function (cell) {
          const cCol = Number(cell.dataset.col);
          const cRow = Number(cell.dataset.row);
          const dist = Math.abs(cCol - activeCol) + Math.abs(cRow - activeRow);
          if (dist <= 1) {
            cell.classList.add('is-near');
          } else {
            cell.classList.remove('is-near');
          }
        });
      }
    }, { passive: true });

    heroSection.addEventListener('pointerleave', function () {
      targetX = 0;
      targetY = 0;
      startLoopIfNeeded();
      gridCells.forEach(function (cell) {
        cell.classList.remove('is-near');
      });
    }, { passive: true });

    // Pause loop when Hero leaves viewport
    if ('IntersectionObserver' in window) {
      const heroObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          isHeroVisible = entry.isIntersecting;
          if (!isHeroVisible && rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
        });
      }, { threshold: 0.05 });

      heroObserver.observe(heroSection);
    }
  }

  /* ---------------------------------------------------
     3. Scroll-Spy Window Tabs & HUD Segmented Progress
     --------------------------------------------------- */
  const trackedSections = Array.from(document.querySelectorAll('main section[id]'));
  const windowTabs = Array.from(document.querySelectorAll('.window-tab[data-section]'));
  const pillNavLinks = Array.from(document.querySelectorAll('.nav-pill-link[data-section]'));
  const hudSegments = Array.from(document.querySelectorAll('.hud-seg'));
  const hudCounter = document.getElementById('hud-counter');

  if (trackedSections.length > 0 && 'IntersectionObserver' in window) {
    const spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute('id');
        const idx = trackedSections.findIndex(function (s) { return s.id === id; });

        windowTabs.forEach(function (tab) {
          const isMatch = tab.dataset.section === id;
          tab.classList.toggle('active', isMatch);
          if (isMatch) {
            tab.setAttribute('aria-current', 'location');
          } else {
            tab.removeAttribute('aria-current');
          }
        });

        pillNavLinks.forEach(function (link) {
          link.classList.toggle('active', link.dataset.section === id);
        });

        if (idx !== -1 && hudSegments.length > 0) {
          hudSegments.forEach(function (seg, sIdx) {
            seg.classList.toggle('filled', sIdx <= idx);
          });
          if (hudCounter) {
            const currentNum = String(idx + 1).padStart(2, '0');
            const totalNum = String(trackedSections.length).padStart(2, '0');
            hudCounter.textContent = currentNum + '/' + totalNum;
          }
        }
      });
    }, {
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0
    });

    trackedSections.forEach(function (sec) {
      spyObserver.observe(sec);
    });
  }

  /* ---------------------------------------------------
     4. Scroll Reveal & Decorative Console Typewriter
     --------------------------------------------------- */
  const revealItems = Array.from(document.querySelectorAll('.reveal-grid-item'));
  if (revealItems.length > 0) {
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach(function (el) { el.classList.add('is-visible'); });
    } else {
      const revealObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealItems.forEach(function (el) { revealObserver.observe(el); });
    }
  }

  // Decorative console typewriter in #servicos
  const typeTarget = document.getElementById('services-typewriter');
  if (typeTarget) {
    const fullText = typeTarget.dataset.text || '> leccarse --listar-servicos --modo=sob-medida';
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      typeTarget.textContent = fullText;
    } else {
      let typed = false;
      const typeObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !typed) {
            typed = true;
            typeTarget.textContent = '';
            let charIdx = 0;
            const timer = setInterval(function () {
              charIdx += 1;
              typeTarget.textContent = fullText.slice(0, charIdx);
              if (charIdx >= fullText.length) {
                clearInterval(timer);
              }
            }, 28);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      typeObserver.observe(typeTarget);
    }
  }

  /* ---------------------------------------------------
     5. Decorative Console Easter Egg
     --------------------------------------------------- */
  const easterBtn = document.getElementById('console-easter-btn');
  const easterOutput = document.getElementById('console-easter-output');
  if (easterBtn && easterOutput) {
    const messages = [
      '> cafe_status: recarregado [100%]',
      '> blocos_lego: 3 socios alinhados',
      '> templates_prontos: 0 (feito a mao)',
      '> modo_conversao: ativo_e_rapido',
      '> easter_egg: voce achou o terminal!'
    ];
    let msgIdx = 0;
    easterBtn.addEventListener('click', function () {
      easterOutput.textContent = messages[msgIdx];
      msgIdx = (msgIdx + 1) % messages.length;
    });
  }

  /* ---------------------------------------------------
     6. Formspree Contact Form AJAX Submission
     --------------------------------------------------- */
  const form = document.getElementById('form-contato');
  const formStatus = document.getElementById('form-status');
  const btnSubmit = document.getElementById('btn-submit');

  if (form && formStatus && btnSubmit) {
    form.addEventListener('submit', async function (event) {
      event.preventDefault();

      btnSubmit.disabled = true;
      const originalText = btnSubmit.innerHTML;
      btnSubmit.innerHTML = 'Enviando...';
      formStatus.className = 'form-status d-none mt-3';
      formStatus.textContent = '';

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          formStatus.className = 'form-status form-status-success alert alert-success mt-3';
          formStatus.innerHTML = '<strong>Mensagem enviada com sucesso!</strong> Obrigado pelo contato. Responderemos em breve.';
          form.reset();
        } else {
          const data = await response.json();
          const message = data.errors
            ? data.errors.map(function (e) { return e.message; }).join(', ')
            : 'Houve um erro no envio.';
          formStatus.className = 'form-status form-status-error alert alert-danger mt-3';
          formStatus.innerHTML = '<strong>Não foi possível enviar:</strong> ' + message + '. Você também pode nos chamar no WhatsApp ou por e-mail.';
        }
      } catch (error) {
        formStatus.className = 'form-status form-status-error alert alert-danger mt-3';
        formStatus.innerHTML = '<strong>Erro de conexão:</strong> Não conseguimos enviar sua mensagem. Por favor, tente pelo WhatsApp ou envie um e-mail.';
      } finally {
        btnSubmit.disabled = false;
        btnSubmit.innerHTML = originalText;
      }
    });
  }
})();
