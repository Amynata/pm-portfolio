// Section Hub : vue photo + rail outils/certifs/notion, boutons latéraux et retour.
// S'appuie sur le renderer dédié du hub pour garder main.js comme orchestrateur.
import { createHubHandlers } from '../render/hub-view.js';
import { bindHubToggle } from '../features/hub.js';

export function createHubSection(deps) {
  var state = deps.state;
  var certEntries = deps.certEntries;
  var tools = deps.tools;
  var t = deps.t;
  var escapeHtml = deps.escapeHtml;
  var renderStars = deps.renderStars;

  var hubHandlers = createHubHandlers({
    state: state,
    certEntries: certEntries,
    tools: tools,
    t: t,
    escapeHtml: escapeHtml,
    renderStars: renderStars,
  });

  function initHub() {
    // Boutons latéraux : même comportement, mais centralisé dans une section claire.
    bindHubToggle('hub-btn-tools', 'tools', function () { return state.hubView; }, hubHandlers.setHubView);
    bindHubToggle('hub-btn-certs', 'certs', function () { return state.hubView; }, hubHandlers.setHubView);
    bindHubToggle('hub-btn-notion', 'notion', function () { return state.hubView; }, hubHandlers.setHubView);

    var hubBackBtn = document.getElementById('hub-back-btn');
    if (hubBackBtn) {
      // Empêche le clic sur le bouton retour de remonter jusqu'au hubCircle (qui ouvre la modale "projets").
      hubBackBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        hubHandlers.setHubView('photo');
      });
    }
  }

  return {
    initHub: initHub,
    setHubView: hubHandlers.setHubView,
    renderHubCerts: hubHandlers.renderHubCerts,
    clearHubToolsUI: hubHandlers.clearHubToolsUI,
    renderTools: hubHandlers.renderTools,
  };
}

