import {
  setModalVisibility,
  bindModalOpen,
  bindModalClose,
} from './src/js/utils/dom.js';
import { wireMobileNav } from './src/js/features/mobile-nav.js';
import { wireAutomationInteractions } from './src/js/features/automation.js';
import { applyTranslations as applyAppTranslations } from './src/js/i18n.js';
import { state } from './src/js/state.js';
import { createModalHandlers } from './src/js/render/modals.js';
import { createExperienceSection } from './src/js/sections/experience.js';
import { createHubSection } from './src/js/sections/hub.js';
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

  // Section expérience : handlers regroupés derrière une API de section.
  var experienceSection = null;
  function renderExperienceTimeline() {
    if (!experienceSection) return;
    experienceSection.renderExperienceTimeline();
  }

  function updateOrbitActiveState() {
    if (!experienceSection) return;
    experienceSection.updateOrbitActiveState();
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // Section Hub : vue photo + rail outils/certifs/notion.
  var hubSection = createHubSection({
    state: state,
    certEntries: certEntries,
    tools: tools,
    t: t,
    escapeHtml: escapeHtml,
    renderStars: renderStars,
  });
  var setHubView = hubSection.setHubView;
  var renderHubCerts = hubSection.renderHubCerts;
  var clearHubToolsUI = hubSection.clearHubToolsUI;
  var renderTools = hubSection.renderTools;

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
    if (!experienceSection) return;
    experienceSection.selectExp(index);
  }

  function getProjectPageForExperience(exp, pageIndex) {
    if (!experienceSection) return null;
    return experienceSection.getProjectPageForExperience(exp, pageIndex);
  }

  function renderProjectsList() {
    if (!experienceSection) return;
    experienceSection.renderProjectsList();
  }

  function renderProjectDetailPanel() {
    if (!experienceSection) return;
    experienceSection.renderProjectDetailPanel();
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
    getRenderProjectDetailPanel: function () { return renderProjectDetailPanel; },
  });
  var renderFormationModal = modalHandlers.renderFormationModal;
  var renderExpModalBody = modalHandlers.renderExpModalBody;
  var openExpModal = modalHandlers.openExpModal;
  var closeExpModal = modalHandlers.closeExpModal;
  var renderCVModalBody = modalHandlers.renderCVModalBody;

  // Section expérience : timeline, liste et panneau détail regroupés.
  experienceSection = createExperienceSection({
    state: state,
    experiences: experiences,
    escapeHtml: escapeHtml,
    getBadgeClass: getBadgeClass,
    companyTypeForLang: companyTypeForLang,
    t: t,
    getOpenExpModal: function () { return openExpModal; },
    getRenderExpModalBody: function () { return renderExpModalBody; },
  });

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

    // Hub : wiring des boutons latéraux et du bouton retour via la section dédiée.
    hubSection.initHub();
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
