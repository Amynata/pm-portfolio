// Hub hero : vues photo / outils / certifs / notion + grille d’outils et certifs.
// Extrait de main.js pour isoler le rendu et le comportement du bloc central.
export function createHubHandlers(deps) {
  var state = deps.state;
  var certEntries = deps.certEntries;
  var tools = deps.tools;
  var t = deps.t;
  var escapeHtml = deps.escapeHtml;
  var renderStars = deps.renderStars;

  // Garde-fou visuel : Datadog doit rester affiché à 1/5 même si une donnée amont est stale/cache.
  function getDisplayedLevel(item) {
    if (item && item.name === 'Datadog') return 1;
    return item && typeof item.level === 'number' ? item.level : 0;
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
    var toolsEl = document.getElementById('hub-layer-tools');
    var certs = document.getElementById('hub-layer-certs');
    var notion = document.getElementById('hub-layer-notion');
    if (!toolsEl || !certs || !notion) return;
    if (state.hubView === 'tools') {
      toolsEl.style.pointerEvents = 'auto';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'none';
      toolsEl.setAttribute('aria-hidden', 'false');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'true');
    } else if (state.hubView === 'certs') {
      toolsEl.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'auto';
      notion.style.pointerEvents = 'none';
      toolsEl.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'false');
      notion.setAttribute('aria-hidden', 'true');
    } else if (state.hubView === 'notion') {
      toolsEl.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'auto';
      toolsEl.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'false');
    } else {
      toolsEl.style.pointerEvents = 'none';
      certs.style.pointerEvents = 'none';
      notion.style.pointerEvents = 'none';
      toolsEl.setAttribute('aria-hidden', 'true');
      certs.setAttribute('aria-hidden', 'true');
      notion.setAttribute('aria-hidden', 'true');
    }
  }

  function setHubView(next) {
    if (next !== 'photo' && next !== 'tools' && next !== 'certs' && next !== 'notion') return;
    var photo = document.getElementById('hub-layer-photo');
    var toolsLayer = document.getElementById('hub-layer-tools');
    var certs = document.getElementById('hub-layer-certs');
    var portal = document.getElementById('hub-tools-certs-portal');
    var back = document.getElementById('hub-back-btn');
    var btnTools = document.getElementById('hub-btn-tools');
    var btnCerts = document.getElementById('hub-btn-certs');
    var btnNotion = document.getElementById('hub-btn-notion');
    var notionLayer = document.getElementById('hub-layer-notion');
    if (!photo || !toolsLayer || !certs || !notionLayer) return;

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
      var displayLevel = getDisplayedLevel(item);
      host.classList.remove('hidden');
      host.innerHTML =
        '<span class="block text-[9px] font-black tracking-tight text-slate-900 sm:text-[10px]">' +
        escapeHtml(item.name) +
        '</span>' +
        '<span class="mt-0.5 flex justify-center">' +
        renderStars(displayLevel) +
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
          var displayLevel = getDisplayedLevel(item);
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
            renderStars(displayLevel) +
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

  return {
    setHubView: setHubView,
    renderHubCerts: renderHubCerts,
    clearHubToolsUI: clearHubToolsUI,
    renderTools: renderTools,
  };
}
