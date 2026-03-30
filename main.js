import {
  setModalVisibility,
  bindModalOpen,
  bindModalClose,
} from './src/js/utils/dom.js';
import { bindHubToggle } from './src/js/features/hub.js';
import { wireMobileNav } from './src/js/features/mobile-nav.js';
import { wireAutomationInteractions } from './src/js/features/automation.js';
import { applyTranslations as applyAppTranslations } from './src/js/i18n.js';
import { state } from './src/js/state.js';
import { createModalHandlers } from './src/js/render/modals.js';
import {
  translations,
  formationEntries,
  experiences,
  tools,
  certEntries,
} from './src/js/data.js';

(function () {
  'use strict';

  function renderStars(level, maxStars) {
    maxStars = maxStars || 5;
    var html = '<div class="flex gap-0.5">';
    for (var i = 0; i < maxStars; i++) {
      html += '<svg viewBox="0 0 20 20" class="w-3 h-3" fill="' + (i < level ? '#818CF8' : '#E2E8F0') + '">' +
        '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>' +
        '</svg>';
    }
    html += '</div>';
    return html;
  }

  function t(key) {
    return translations[state.lang][key] || key;
  }

  function getBadgeClass(companyType) {
    if (companyType === 'Grand Groupe') return 'bg-[#007ABD] text-white';
    if (companyType === 'Scale-up') return 'bg-violet-500 text-white';
    if (companyType === 'Startup') return 'bg-amber-500 text-white';
    return 'bg-emerald-500 text-white'; // PME
  }

  function companyTypeForLang(type) {
    var map = {
      'Grand Groupe': { FR: 'Grand Groupe', EN: 'Enterprise' },
      'Scale-up': { FR: 'Scale-up', EN: 'Scale-up' },
      PME: { FR: 'PME', EN: 'SME' },
      Startup: { FR: 'Startup', EN: 'Startup' },
    };
    var row = map[type];
    return row ? row[state.lang] : type;
  }

  function renderExperienceTimeline() {
    const container = document.getElementById('experience-timeline-nodes');
    if (!container) return;
    const total = experiences.length;
    const denom = Math.max(1, total - 1);
    container.innerHTML = '';

    experiences.forEach(function (exp, index) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.expIndex = String(index);
      btn.className =
        'exp-orbit-btn exp-timeline-node group relative flex min-w-0 max-w-[22%] flex-1 flex-col items-center text-slate-900 sm:max-w-none';
      btn.style.setProperty('--exp-index', String(index));
      btn.style.setProperty('--exp-denom', String(denom));

      // Pastilles légèrement plus grandes pour équilibrer la timeline avec la ligne
      btn.innerHTML =
        '<span class="exp-orbit-dot flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[1.4rem] border border-white bg-white/95 text-sm font-black uppercase tracking-tighter text-slate-400 shadow-xl backdrop-blur-md transition-all duration-300 sm:h-16 sm:w-16 sm:rounded-[1.75rem] sm:text-base">' +
        escapeHtml(exp.shortName) +
        '</span>' +
        '<span class="exp-timeline-caption mt-2 max-w-full px-0.5 text-center transition-colors duration-200">' +
        '<span class="block truncate text-[8px] font-black leading-tight tracking-tight text-slate-800 sm:text-[9px]">' +
        escapeHtml(exp.company) +
        '</span>' +
        '<span class="mt-0.5 block truncate text-[6px] font-bold uppercase tracking-widest text-[#818CF8] sm:text-[7px]">' +
        escapeHtml(exp.period[state.lang]) +
        '</span>' +
        '</span>';

      var dotEl = btn.querySelector('.exp-orbit-dot');
      if (dotEl && exp.logo) {
        dotEl.innerHTML =
          '<img src="' +
          escapeHtml(exp.logo) +
          '" alt="' +
          escapeHtml(exp.company) +
          ' logo" class="h-10 w-10 object-contain sm:h-12 sm:w-12" />';
      }

      container.appendChild(btn);

      btn.addEventListener('mouseenter', function () {
        var d = btn.querySelector('.exp-orbit-dot');
        if (d && state.selectedExp !== index) {
          d.classList.add('scale-105');
          d.style.boxShadow = '0 0 0 3px ' + exp.color + '33, 0 12px 24px rgba(15,23,42,0.22)';
        }
      });
      btn.addEventListener('mouseleave', function () {
        var d = btn.querySelector('.exp-orbit-dot');
        if (!d) return;
        d.classList.remove('scale-105');
        if (state.selectedExp !== index) {
          d.style.boxShadow = '';
        }
      });
      btn.addEventListener('click', function () {
        var clickHintEl = document.getElementById('click-hint');
        if (clickHintEl) {
          clickHintEl.classList.add('opacity-0', 'pointer-events-none');
        }
        selectExp(index);
        openExpModal();
        updateOrbitActiveState();
      });
    });
    updateOrbitActiveState();
  }

  function updateOrbitActiveState() {
    document.querySelectorAll('.exp-orbit-btn').forEach(function (btn, index) {
      const exp = experiences[index];
      const dot = btn.querySelector('.exp-orbit-dot');
      if (!dot) return;
      var label = btn.querySelector('.exp-orbit-label');
      var isTimeline = btn.classList.contains('exp-timeline-node');
      if (state.selectedExp === index) {
        dot.classList.add('scale-110', 'text-white', 'ring-2', 'ring-[#6366F1]/45');
        dot.classList.remove('bg-white/95', 'text-slate-400');
        if (label && !isTimeline) {
          label.classList.remove('opacity-0', 'scale-90', 'translate-y-2');
          label.classList.add('opacity-100', 'scale-100');
        }
      } else {
        dot.style.backgroundColor = '';
        dot.classList.remove('scale-110', 'text-white', 'ring-2', 'ring-[#6366F1]/45');
        dot.classList.add('bg-white/95', 'text-slate-400');
        if (label && !isTimeline) {
          if (!btn.matches(':hover')) {
            label.classList.add('opacity-0', 'scale-90', 'translate-y-2');
            label.classList.remove('opacity-100', 'scale-100');
          }
        }
      }
    });
  }

  function getHubLiveRegion() {
    var row = document.getElementById('hero-hub-row');
    if (!row) return null;
    var el = document.getElementById('hub-live-region');
    if (el) return el;
    el = document.createElement('span');
    el.id = 'hub-live-region';
    el.className = 'sr-only';
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-atomic', 'true');
    row.appendChild(el);
    return el;
  }

  function announceHubView(view) {
    var lr = getHubLiveRegion();
    if (!lr) return;
    if (view === 'photo') lr.textContent = '';
    else if (view === 'tools') lr.textContent = t('hubViewToolsAnnounce');
    else if (view === 'certs') lr.textContent = t('hubViewCertsAnnounce');
    else if (view === 'notion') lr.textContent = t('hubViewNotionAnnounce');
  }

  /** Positionne le rail Outils / Certifs / Notion (translateY sur 3 panneaux). */
  function setHubTrackPosition(panel, animate) {
    var track = document.getElementById('hub-tools-certs-track');
    if (!track) return;
    var reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var instant = !animate || reduce;
    if (instant) {
      track.classList.add('hub-track-no-transition');
    }
    var y = 'translateY(0)';
    if (panel === 'certs') y = 'translateY(-33.333333%)';
    else if (panel === 'notion') y = 'translateY(-66.666666%)';
    track.style.transform = y;
    if (instant) {
      void track.offsetHeight;
      track.classList.remove('hub-track-no-transition');
    }
  }

  /** Panneau non visible : pas de clic ; aria pour lecteurs d’écran. */
  function updateHubSubviewPointerAndAria() {
    var tools = document.getElementById('hub-layer-tools');
    var certs = document.getElementById('hub-layer-certs');
    var notion = document.getElementById('hub-layer-notion');
    if (!tools || !certs || !notion) return;
    if (state.hubView === 'tools') {
      tools.style.pointerEvents = 'auto';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'none';
      tools.setAttribute('aria-hidden', 'false');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'true');
    } else if (state.hubView === 'certs') {
      tools.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'auto';
      notion.style.pointerEvents = 'none';
      tools.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'false');
      notion.setAttribute('aria-hidden', 'true');
    } else if (state.hubView === 'notion') {
      tools.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'auto';
      tools.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'false');
    } else {
      tools.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'none';
      tools.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'true');
    }
  }

  function setHubView(next) {
    if (next !== 'photo' && next !== 'tools' && next !== 'certs' && next !== 'notion') return;
    var photo = document.getElementById('hub-layer-photo');
    var tools = document.getElementById('hub-layer-tools');
    var certs = document.getElementById('hub-layer-certs');
    var portal = document.getElementById('hub-tools-certs-portal');
    var back = document.getElementById('hub-back-btn');
    var btnTools = document.getElementById('hub-btn-tools');
    var btnCerts = document.getElementById('hub-btn-certs');
    var btnNotion = document.getElementById('hub-btn-notion');
    var notionLayer = document.getElementById('hub-layer-notion');
    if (!photo || !tools || !certs || !notionLayer) return;

    var prev = state.hubView;
    state.hubView = next;
    var showPhoto = next === 'photo';
    var showTools = next === 'tools';
    var showCerts = next === 'certs';
    var showNotion = next === 'notion';

    if (btnTools) {
      btnTools.setAttribute('aria-pressed', showTools ? 'true' : 'false');
      btnTools.classList.toggle('hub-side-btn-active-tools', showTools);
    }
    if (btnCerts) {
      btnCerts.setAttribute('aria-pressed', showCerts ? 'true' : 'false');
      btnCerts.classList.toggle('hub-side-btn-active-certs', showCerts);
    }
    if (btnNotion) {
      btnNotion.setAttribute('aria-pressed', showNotion ? 'true' : 'false');
      btnNotion.classList.toggle('hub-side-btn-active-notion', showNotion);
    }
    if (back) {
      back.classList.toggle('hidden', showPhoto);
      back.setAttribute('aria-hidden', showPhoto ? 'true' : 'false');
    }
    // La vue outils est re-rendue dans les mêmes conditions ; un seul clear suffit.
    clearHubToolsUI();

    function hidePortalSoon() {
      if (!portal) return;
      portal.classList.remove('opacity-100', 'pointer-events-auto');
      portal.classList.add('opacity-0', 'pointer-events-none');
      window.setTimeout(function () {
        if (state.hubView === 'photo') {
          portal.hidden = true;
        }
      }, 320);
    }

    if (showPhoto) {
      hidePortalSoon();
      photo.classList.remove('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');
      photo.classList.add('z-10', 'opacity-100', 'scale-100');
      updateHubSubviewPointerAndAria();
      announceHubView('photo');
      return;
    }

    photo.classList.remove('z-10', 'opacity-100', 'scale-100');
    photo.classList.add('opacity-0', 'scale-95', 'pointer-events-none', 'z-0');

    // Même depuis la photo, on garde un déplacement fluide du rail pour éviter une apparition brusque.
    var animateTrack = prev !== next && next !== 'photo';

    if (showTools || showCerts || showNotion) {
      if (portal) {
        var portalWasHidden = portal.hidden;
        portal.hidden = false;
        var trackPanel = showTools ? 'tools' : showCerts ? 'certs' : 'notion';
        setHubTrackPosition(trackPanel, animateTrack);
        if (portalWasHidden) {
          portal.classList.remove('opacity-100', 'pointer-events-auto');
          portal.classList.add('opacity-0', 'pointer-events-none');
          requestAnimationFrame(function () {
            requestAnimationFrame(function () {
              portal.classList.remove('opacity-0', 'pointer-events-none');
              portal.classList.add('opacity-100', 'pointer-events-auto');
            });
          });
        } else {
          portal.classList.remove('opacity-0', 'pointer-events-none');
          portal.classList.add('opacity-100', 'pointer-events-auto');
        }
      }
      if (showTools) announceHubView('tools');
      else if (showCerts) announceHubView('certs');
      else announceHubView('notion');
    }

    updateHubSubviewPointerAndAria();
  }

  function renderHubCerts() {
    var ul = document.getElementById('hub-certs-list');
    if (!ul) return;
    // Format maquette : carte rectangulaire arrondie, libellé à gauche, picto médaille en contour à droite
    var medalSvg =
      '<svg class="hub-cert-badge-medal" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<circle cx="12" cy="8" r="5.5" stroke="currentColor" stroke-width="1.5" fill="none" />' +
      '<polyline points="8 14 6.5 22 12 18.5 17.5 22 16 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />' +
      '</svg>';
    ul.innerHTML = certEntries
      .map(function (c) {
        return (
          '<li class="hub-cert-badge">' +
          '<span class="hub-cert-badge-label">' +
          escapeHtml(c[state.lang]) +
          '</span>' +
          '<span class="hub-cert-badge-icon" aria-hidden="true">' +
          medalSvg +
          '</span>' +
          '</li>'
        );
      })
      .join('');
  }

  function clearHubToolsUI() {
    var grid = document.getElementById('hub-tools-grid');
    var host = document.getElementById('hub-tool-hover');
    if (grid) {
      grid.querySelectorAll('.tool-hub-wrap').forEach(function (w) {
        w.classList.remove('is-selected');
      });
    }
    if (host) {
      host.innerHTML = '';
      host.classList.add('hidden');
    }
  }

  /** Clic sur une tuile (hub) : affiche la description sous la grille ; second clic sur la même tuile ferme */
  function wireHubToolClicks(gridContainer) {
    var host = document.getElementById('hub-tool-hover');
    if (!host || !gridContainer) return;
    function showDetail(idx) {
      var item = tools[idx];
      if (!item) return;
      host.classList.remove('hidden');
      host.innerHTML =
        '<span class="block text-[9px] font-black tracking-tight text-slate-900 sm:text-[10px]">' +
        escapeHtml(item.name) +
        '</span>' +
        '<span class="mt-0.5 flex justify-center">' +
        renderStars(item.level) +
        '</span>' +
        '<span class="mt-1 block text-[7px] font-medium leading-snug text-slate-600 sm:text-[8px]">' +
        escapeHtml(item.desc[state.lang]) +
        '</span>';
    }
    gridContainer.querySelectorAll('.tool-hub-wrap').forEach(function (wrap) {
      wrap.addEventListener('click', function (e) {
        e.stopPropagation();
        var idx = parseInt(wrap.getAttribute('data-tool-idx'), 10);
        var wasSelected = wrap.classList.contains('is-selected');
        gridContainer.querySelectorAll('.tool-hub-wrap').forEach(function (w) {
          w.classList.remove('is-selected');
        });
        if (wasSelected) {
          host.innerHTML = '';
          host.classList.add('hidden');
          return;
        }
        wrap.classList.add('is-selected');
        showDetail(idx);
      });
    });
  }

  function renderToolsInto(container, options) {
    options = options || {};
    var compact = !!options.compact;
    if (!container) return;

    if (compact) {
      container.innerHTML = tools
        .map(function (item, idx) {
          var imgSizeClass = item.neutralLogoBtn ? 'h-7 w-7 max-h-[1.75rem] max-w-[1.75rem]' : 'h-5 w-5 max-h-5 max-w-5';
          var imgWh = item.neutralLogoBtn ? '28' : '20';
          var iconMarkup = item.iconSrc
            ? '<img src="' +
              escapeHtml(item.iconSrc) +
              '" alt="" class="' +
              imgSizeClass +
              ' object-contain object-center pointer-events-none" width="' +
              imgWh +
              '" height="' +
              imgWh +
              '" decoding="async" />'
            : '<div class="' + item.textColor + ' flex items-center justify-center [&>svg]:h-5 [&>svg]:w-5">' + item.icon + '</div>';
          var btnClass =
            'tool-hub-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/90 shadow-md transition-transform duration-200 sm:h-11 sm:w-11 ';
          var btnStyle = '';
          if (item.neutralLogoBtn) {
            btnClass += 'bg-white ring-1 ring-slate-100';
          } else {
            btnClass += 'border-2';
            btnStyle = 'background-color:' + item.color;
          }
          var styleAttr = btnStyle ? ' style="' + btnStyle + '"' : '';
          // Hub cercle : espacement vertical réduit entre icône et libellé (grille resserrée dans le HTML)
          return (
            '<div class="tool-hub-wrap flex min-w-0 flex-col items-center gap-0.5 text-center" data-tool-idx="' +
            idx +
            '">' +
            '<button type="button" class="' +
            btnClass +
            '"' +
            styleAttr +
            '>' +
            iconMarkup +
            '</button>' +
            '<span class="line-clamp-2 min-h-[1.35em] text-[7px] font-black uppercase leading-tight tracking-tight text-slate-700 sm:text-[8px]">' +
            escapeHtml(item.name) +
            '</span>' +
            '</div>'
          );
        })
        .join('');
      wireHubToolClicks(container);
      return;
    }

    container.innerHTML =
      '<div class="grid w-full grid-cols-3 gap-x-2 gap-y-8 sm:gap-x-4 justify-items-center">' +
      tools
        .map(function (item, idx) {
          var tooltipUp = idx < 3;
          var labelClasses =
            'tool-hover-label absolute left-1/2 z-30 w-[min(240px,calc(100vw-3rem))] -translate-x-1/2 px-3 py-2.5 rounded-2xl text-center ' +
            'bg-white/85 backdrop-blur-md border border-white/70 shadow-xl ' +
            'transition-all duration-300 ease-out opacity-0 scale-90 translate-y-4 flex flex-col items-center gap-1 ' +
            (tooltipUp ? 'bottom-full mb-2' : 'top-full mt-2');
          var labelHtml =
            '<span class="' +
            labelClasses +
            '">' +
            '<span class="text-[10px] font-black text-slate-900 tracking-tight leading-tight whitespace-nowrap">' +
            escapeHtml(item.name) +
            '</span>' +
            '<span class="flex justify-center">' +
            renderStars(item.level) +
            '</span>' +
            '<span class="text-[8px] font-semibold text-slate-600 leading-snug max-w-[220px]">' +
            escapeHtml(item.desc[state.lang]) +
            '</span>' +
            '</span>';
          var imgSizeClass = item.neutralLogoBtn ? 'w-8 h-8 max-w-[2rem] max-h-[2rem]' : 'w-5 h-5';
          var imgWh = item.neutralLogoBtn ? '32' : '20';
          var iconMarkup = item.iconSrc
            ? '<img src="' +
              escapeHtml(item.iconSrc) +
              '" alt="" class="' +
              imgSizeClass +
              ' object-contain object-center pointer-events-none" width="' +
              imgWh +
              '" height="' +
              imgWh +
              '" decoding="async" />'
            : '<div class="' + item.textColor + '">' + item.icon + '</div>';
          var btnClass =
            'tool-btn relative rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 ';
          var btnStyle = '';
          if (item.neutralLogoBtn) {
            btnClass +=
              'w-12 h-12 bg-white border border-slate-200 shadow-md ring-1 ring-slate-100';
          } else {
            btnClass += 'w-11 h-11 shadow-lg border-2 border-white';
            btnStyle = 'background-color:' + item.color;
          }
          var styleAttr = btnStyle ? ' style="' + btnStyle + '"' : '';
          var btnHtml =
            '<button type="button" class="' + btnClass + '"' + styleAttr + '>' + iconMarkup + '</button>';
          var inner =
            '<div class="relative inline-flex flex-col items-center">' +
            (tooltipUp ? labelHtml + btnHtml : btnHtml + labelHtml) +
            '</div>';
          return (
            '<div class="tool-wrap group relative flex flex-col items-center" data-tool-idx="' +
            idx +
            '">' +
            inner +
            '</div>'
          );
        })
        .join('') +
      '</div>';

    container.querySelectorAll('.tool-wrap').forEach(function (wrap) {
      var idx = parseInt(wrap.dataset.toolIdx, 10);
      var toolItem = tools[idx];
      var labelEl = wrap.querySelector('.tool-hover-label');
      var btnEl = wrap.querySelector('.tool-btn');

      wrap.addEventListener('mouseenter', function () {
        labelEl.classList.remove('opacity-0', 'scale-90', 'translate-y-4');
        labelEl.classList.add('opacity-100', 'scale-100');
        btnEl.classList.add('scale-110');
        btnEl.style.boxShadow = '0 0 0 3px ' + toolItem.color + '44, 0 14px 28px rgba(15,23,42,0.25)';
      });
      wrap.addEventListener('mouseleave', function () {
        labelEl.classList.add('opacity-0', 'scale-90', 'translate-y-4');
        labelEl.classList.remove('opacity-100', 'scale-100');
        btnEl.classList.remove('scale-110');
        btnEl.style.boxShadow = '';
      });
    });
  }

  function renderTools() {
    var hub = document.getElementById('hub-tools-grid');
    if (hub) {
      renderToolsInto(hub, { compact: true });
    }
    var list = document.getElementById('tools-list');
    if (list) {
      renderToolsInto(list, { compact: false });
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function schoolLinkName(school) {
    if (!school) return '';
    return typeof school.name === 'string' ? school.name : school.name[state.lang];
  }

  function getAutomationModal() {
    return document.getElementById('automation-card-modal');
  }

  function getVisibleAutomationRoot() {
    var modal = getAutomationModal();
    if (!modal) return null;
    var roots = modal.querySelectorAll('.automation-modal-lang-root');
    for (var i = 0; i < roots.length; i++) {
      if (!roots[i].classList.contains('hidden')) return roots[i];
    }
    return roots.length ? roots[0] : null;
  }

  function syncPortfolioLangBlocks() {
    document.querySelectorAll('[data-portfolio-lang]').forEach(function (el) {
      el.classList.toggle('hidden', el.getAttribute('data-portfolio-lang') !== state.lang);
    });
  }

  function syncAutomationModalLang() {
    var modal = getAutomationModal();
    if (!modal) return;
    modal.querySelectorAll('.automation-modal-lang-root').forEach(function (el) {
      var L = el.getAttribute('data-automation-lang');
      el.classList.toggle('hidden', L !== state.lang);
    });
  }

  function setActiveAutomationProject(projectId) {
    var modal = getAutomationModal();
    if (!modal) return;
    modal.querySelectorAll('[data-automation-project-tab]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-automation-project-tab') === projectId;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    modal.querySelectorAll('.automation-modal-lang-root').forEach(function (root) {
      root.querySelectorAll('[data-automation-project-section]').forEach(function (section) {
        if (section.getAttribute('data-automation-project-section') === projectId) {
          section.classList.remove('hidden');
        } else {
          section.classList.add('hidden');
        }
      });
    });
  }

  function setActiveAutomationAgent(agentId, root) {
    state.lastAutomationAgentId = agentId;
    if (!root) root = getVisibleAutomationRoot();
    if (!root) return;
    root.querySelectorAll('[data-agent-tab]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-agent-tab') === agentId;
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      if (isActive) {
        btn.classList.add('bg-[#EEF2FF]', 'text-[#6366F1]', 'border', 'border-[#6366F1]/25', 'shadow-sm');
        btn.classList.remove('text-slate-500', 'hover:text-slate-900', 'hover:bg-white', 'bg-slate-900', 'text-white');
      } else {
        btn.classList.remove('bg-[#EEF2FF]', 'text-[#6366F1]', 'border', 'border-[#6366F1]/25', 'bg-slate-900', 'text-white');
        btn.classList.add('text-slate-500', 'hover:text-slate-900', 'hover:bg-white');
      }
    });
    root.querySelectorAll('[data-agent-section]').forEach(function (section) {
      if (section.getAttribute('data-agent-section') === agentId) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    });
  }

  function selectExp(index) {
    state.selectedExp = index;
    state.activeProjIdx = 0;
    state.activeProjectPage = 0;
    state.activeTab = 'mission';
    renderProjectDetailPanel();
    renderProjectsList();
  }

  function getProjectPageForExperience(exp, pageIndex) {
    if (!exp || !Array.isArray(exp.projectPages)) return null;
    // Demande métier : sur Decathlon, on inverse le contenu du projet 1 et du projet 3.
    if (exp.id === 0 && exp.projectPages.length >= 3) {
      if (pageIndex === 0) return exp.projectPages[2];
      if (pageIndex === 2) return exp.projectPages[0];
    }
    return exp.projectPages[pageIndex] || null;
  }

  function renderProjectsList() {
    const list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = '';
    experiences.forEach(function (exp, index) {
      const card = document.createElement('button');
      card.type = 'button';
      card.dataset.expIndex = index;
      card.className =
        'project-card w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ' +
        (state.selectedExp === index
          ? 'border-[#818CF8] bg-white shadow-lg'
          : 'border-slate-100 bg-white/60 hover:border-slate-200 hover:bg-white/80');
      card.innerHTML =
        '<span class="text-[9px] font-black uppercase tracking-widest text-slate-400">' +
        escapeHtml(exp.period[state.lang]) +
        '</span>' +
        '<h3 class="text-base font-bold text-slate-900 mt-1">' +
        escapeHtml(exp.title[state.lang]) +
        '</h3>' +
        '<p class="text-sm font-semibold mt-1" style="color:' +
        exp.color +
        '">@' +
        escapeHtml(exp.company) +
        '</p>' +
        '<span class="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase ' +
        getBadgeClass(exp.companyType) +
        '">' +
        escapeHtml(companyTypeForLang(exp.companyType)) +
        '</span>';
      card.addEventListener('click', function () {
        selectExp(index);
      });
      list.appendChild(card);
    });
  }

  function renderProjectDetailPanel() {
    const panel = document.getElementById('project-detail');
    if (!panel) return;
    if (state.selectedExp == null) {
      panel.innerHTML = '<p class="text-slate-400 font-medium">' + escapeHtml(t('selectProject')) + '</p>';
      return;
    }
    const exp = experiences[state.selectedExp];
    const proj = exp.projects[state.activeProjIdx];
    panel.innerHTML =
      '<div class="flex flex-col mb-6">' +
      '<span class="text-[9px] font-black bg-slate-100 text-slate-500 w-fit px-3 py-1 rounded-full uppercase tracking-widest mb-4">' +
      escapeHtml(exp.period[state.lang]) +
      '</span>' +
      '<h3 class="text-2xl font-black tracking-tighter leading-tight mb-2">' +
      escapeHtml(exp.title[state.lang]) +
      '</h3>' +
      '<p class="text-base font-bold mb-2" style="color:' +
      exp.color +
      '">@' +
      escapeHtml(exp.company) +
      '</p>' +
      '<span class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase ' +
      getBadgeClass(exp.companyType) +
      '">' +
      escapeHtml(companyTypeForLang(exp.companyType)) +
      '</span>' +
      '</div>' +
      '<div class="flex items-center justify-between mb-6">' +
      '<div class="flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit">' +
      '<button type="button" class="exp-tab-mission px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (state.activeTab === 'mission' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabMission')) +
      '</button>' +
      '<button type="button" class="exp-tab-project px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (state.activeTab === 'project' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabProject')) +
      '</button>' +
      '</div>' +
      (state.activeTab === 'project' && exp.projectPages && exp.projectPages.length > 1
        ? '<div class="flex gap-1.5">' +
          exp.projectPages.map(function (_, pi) {
            return '<button type="button" class="exp-page-dot w-7 h-7 rounded-lg text-[10px] font-black transition-all ' +
              (pi === state.activeProjectPage ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-400 hover:bg-slate-200') +
              '" data-page="' + pi + '">' + (pi + 1) + '</button>';
          }).join('') +
          '</div>'
        : '') +
      '</div>' +
      (state.activeTab === 'mission'
        ? '<div class="text-slate-600"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('tabMission')) +
          '</p>' +
          (exp.missionHtml
            ? '<div class="text-sm md:text-base font-medium leading-relaxed">' + exp.missionHtml[state.lang] + '</div>'
            : '<p class="text-sm md:text-base font-medium leading-relaxed italic">"' + escapeHtml(exp.mission[state.lang]) + '"</p>') +
          '</div>'
        : (exp.projectPages
          ? // Conteneur .exp-project-content : styles cartes dans styles.css
          '<div class="exp-project-content w-full min-w-0">' + (getProjectPageForExperience(exp, state.activeProjectPage) || exp.projectPages[0])[state.lang] + '</div>'
          : '<div class="space-y-6">' +
          '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelProblem')) +
          '</p><ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">' +
          proj.problem[state.lang].map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') +
          '</ul></div>' +
          '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelSolution')) +
          '</p><ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">' +
          proj.solution[state.lang].map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('') +
          '</ul></div>' +
          '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelImpact')) +
          '</p><ul class="list-disc pl-5 space-y-1 text-sm font-bold text-slate-900">' +
          proj.impact[state.lang].map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') +
          '</ul></div>' +
          '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('labelTech')) +
          '</p><div class="flex flex-wrap gap-2">' +
          proj.techStack.map(function (tech) {
            return '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">' + escapeHtml(tech) + '</span>';
          }).join('') +
          '</div></div>' +
          '</div>'));

    panel.querySelectorAll('.exp-tab-mission').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeTab = 'mission';
        renderProjectDetailPanel();
        renderExpModalBody();
      });
    });
    panel.querySelectorAll('.exp-tab-project').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeTab = 'project';
        state.activeProjectPage = 0;
        renderProjectDetailPanel();
        renderExpModalBody();
      });
    });
    panel.querySelectorAll('.exp-page-dot').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeProjectPage = parseInt(el.dataset.page, 10);
        renderProjectDetailPanel();
        renderExpModalBody();
      });
    });
  }

  // Module modales : conserve la logique existante mais sort le rendu du fichier principal.
  var modalHandlers = createModalHandlers({
    state: state,
    formationEntries: formationEntries,
    experiences: experiences,
    escapeHtml: escapeHtml,
    schoolLinkName: schoolLinkName,
    getBadgeClass: getBadgeClass,
    companyTypeForLang: companyTypeForLang,
    getProjectPageForExperience: getProjectPageForExperience,
    t: t,
    setModalVisibility: setModalVisibility,
    renderProjectDetailPanel: renderProjectDetailPanel,
  });
  var renderFormationModal = modalHandlers.renderFormationModal;
  var renderExpModalBody = modalHandlers.renderExpModalBody;
  var openExpModal = modalHandlers.openExpModal;
  var closeExpModal = modalHandlers.closeExpModal;
  var renderCVModalBody = modalHandlers.renderCVModalBody;

  function applyTranslations() {
    applyAppTranslations({
      t: t,
      lang: state.lang,
      syncPortfolioLangBlocks: syncPortfolioLangBlocks,
      syncAutomationModalLang: syncAutomationModalLang,
      renderFormationModal: renderFormationModal,
      getVisibleAutomationRoot: getVisibleAutomationRoot,
      setActiveAutomationAgent: setActiveAutomationAgent,
      getLastAutomationAgentId: function () { return state.lastAutomationAgentId; },
      renderCVModalBody: renderCVModalBody,
    });
  }

  function init() {
    applyTranslations();
    renderExperienceTimeline();
    renderTools();
    renderHubCerts();

    document.getElementById('btn-lang').addEventListener('click', function () {
      state.lang = state.lang === 'FR' ? 'EN' : 'FR';
      applyTranslations();
      renderExperienceTimeline();
      renderProjectsList();
      renderProjectDetailPanel();
      clearHubToolsUI();
      renderTools();
      renderHubCerts();
      if (state.selectedExp != null) renderExpModalBody();
    });

    document.getElementById('exp-modal-close').addEventListener('click', closeExpModal);
    document.getElementById('exp-modal-backdrop').addEventListener('click', closeExpModal);

    // Factorisation des modales pour retirer la duplication sans changer les IDs déjà en place.
    bindModalOpen('btn-cv', 'cv-modal');
    bindModalClose('cv-modal-close', 'cv-modal');
    bindModalClose('cv-modal-backdrop', 'cv-modal');

    bindModalOpen('btn-formation', 'formation-modal');
    bindModalClose('formation-modal-close', 'formation-modal');
    bindModalClose('formation-modal-backdrop', 'formation-modal');

    bindModalOpen('btn-contact', 'contact-modal');
    bindModalClose('contact-modal-close', 'contact-modal');
    bindModalClose('contact-modal-backdrop', 'contact-modal');

    var headerProjectsBtn = document.getElementById('btn-projects');
    var heroProjectsBtn = document.getElementById('btn-hero-projects');
    function openMesProjetsModal(projectId) {
      setModalVisibility('automation-card-modal', true);
      setActiveAutomationProject(projectId || 'workflow');
    }
    function wireProjectsOpener(btn) {
      if (!btn) return;
      btn.addEventListener('click', function () {
        openMesProjetsModal('workflow');
      });
    }
    wireProjectsOpener(headerProjectsBtn);
    wireProjectsOpener(heroProjectsBtn);

    var hubCircle = document.getElementById('hub-circle');

    if (!hubCircle) return;
    hubCircle.addEventListener('click', function () {
      if (state.hubView !== 'photo') return;
      openMesProjetsModal('workflow');
    });

    var heroCvOpen = document.getElementById('btn-hero-cv');
    if (heroCvOpen) {
      heroCvOpen.addEventListener('click', function () {
        setModalVisibility('cv-modal', true);
      });
    }

    // Même comportement pour les 3 boutons hub, centralisé dans un module dédié.
    bindHubToggle('hub-btn-tools', 'tools', function () { return state.hubView; }, setHubView);
    bindHubToggle('hub-btn-certs', 'certs', function () { return state.hubView; }, setHubView);
    bindHubToggle('hub-btn-notion', 'notion', function () { return state.hubView; }, setHubView);
    var hubBackBtn = document.getElementById('hub-back-btn');
    if (hubBackBtn) {
      // Empêche le clic sur le bouton retour de remonter jusqu'au hubCircle (qui ouvre la modale "projets")
      hubBackBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        setHubView('photo');
      });
    }
    wireAutomationInteractions({
      getAutomationModal: getAutomationModal,
      getVisibleAutomationRoot: getVisibleAutomationRoot,
      setActiveAutomationAgent: setActiveAutomationAgent,
      setActiveAutomationProject: setActiveAutomationProject,
      getLastAgentId: function () { return state.lastAutomationAgentId; },
    });

    var mobileNav = wireMobileNav({});

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) mobileNav.closeMobileNav();
      renderExperienceTimeline();
      updateOrbitActiveState();
    });

    // Centres d’intérêt : clic = sélection exclusive (teinte fixe sans survol)
    (function wireHubPillarCards() {
      var cards = document.querySelectorAll('.hub-pillar-card');
      if (!cards.length) return;
      cards.forEach(function (btn) {
        btn.addEventListener('click', function () {
          var wasPressed = btn.getAttribute('aria-pressed') === 'true';
          cards.forEach(function (b) {
            b.setAttribute('aria-pressed', 'false');
          });
          if (!wasPressed) {
            btn.setAttribute('aria-pressed', 'true');
          }
        });
      });
    })();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
