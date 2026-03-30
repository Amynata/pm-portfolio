import { setTextIfPresent, setAttrIfPresent, setTextEntries } from './utils/dom.js';

// Centralise la traduction UI pour éviter un bloc monolithique dans main.js.
export function applyTranslations(deps) {
  var t = deps.t;
  var lang = deps.lang;
  var syncPortfolioLangBlocks = deps.syncPortfolioLangBlocks;
  var syncAutomationModalLang = deps.syncAutomationModalLang;
  var renderFormationModal = deps.renderFormationModal;
  var getVisibleAutomationRoot = deps.getVisibleAutomationRoot;
  var setActiveAutomationAgent = deps.setActiveAutomationAgent;
  var getLastAutomationAgentId = deps.getLastAutomationAgentId;
  var renderCVModalBody = deps.renderCVModalBody;

  setTextIfPresent('header-name', t('name'));
  setTextIfPresent('lang-label', lang);
  var mobileLangEl = document.getElementById('mobile-lang-label');
  if (mobileLangEl) mobileLangEl.textContent = lang;
  setTextEntries([
    ['hero-vision', t('vision')],
    ['hero-driven', t('drivenBy')],
    ['hero-impact', t('impact')],
    ['hero-badge', t('heroBadge')],
    ['hub-btn-tools-label', t('tools')],
    ['hub-btn-tools-sub', t('hubBtnToolsSub')],
    ['hub-btn-certs-label', t('hubCertifsShort')],
    ['hub-btn-certs-sub', t('hubBtnCertsSub')],
    ['hub-btn-notion-label', t('hubNotionShort')],
    ['hub-btn-notion-sub', t('hubBtnNotionSub')],
    ['hub-notion-heading', t('hubNotionHeading')],
    ['hub-notion-item-1', t('hubNotionItem1')],
    ['hub-notion-item-2', t('hubNotionItem2')],
    ['hub-notion-item-3', t('hubNotionItem3')],
    ['btn-hero-projects', t('heroCtaProjects')],
    ['btn-hero-cv', t('heroCtaCv')],
    ['hub-tools-heading', t('hubToolsHeading')],
    ['btn-formation', t('about')],
    ['mobile-nav-formation', t('about')],
    ['btn-projects', t('projects')],
    ['mobile-nav-projects', t('projects')],
    ['mobile-nav-cv', 'CV'],
    ['mobile-nav-contact', t('contactMe')],
    ['cv-modal-title', t('cvTitle')],
    ['contact-modal-title', t('contactMe')],
    ['contact-modal-subtitle', t('directSend')],
    ['contact-label-phone', t('contactPhoneLabel')],
    ['formation-modal-title', t('about')],
    ['formation-modal-subtitle', t('formationSubtitle')],
    ['automation-modal-heading', t('projects')],
    ['automation-modal-tagline', t('automationModalSub')],
    ['automation-tab-workflow-desc', t('automationTabWorkflowDesc')],
    ['automation-tab-pos-desc', t('automationTabPosDesc')],
    ['automation-tab-portfolio-desc', t('automationTabPortfolioDesc')],
  ]);
  var descIds = ['desc1', 'desc2', 'desc3', 'desc4', 'desc5', 'desc6', 'desc7', 'desc8', 'desc9', 'desc10', 'desc11', 'desc12', 'desc13'];
  descIds.forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = t(id);
  });
  var clickHintEl = document.getElementById('click-hint');
  if (clickHintEl) {
    clickHintEl.textContent = t('clickToDiscover');
  }
  var hubBack = document.getElementById('hub-back-btn');
  if (hubBack) {
    setAttrIfPresent('hub-back-btn', 'aria-label', t('hubBackProfile'));
    setTextIfPresent('hub-back-btn-label', t('hubBackShort'));
  }
  var photoProjBtn = document.getElementById('btn-hub-photo-projects');
  if (photoProjBtn) {
    setAttrIfPresent('btn-hub-photo-projects', 'aria-label', t('personalProjectsAria'));
    setAttrIfPresent('btn-hub-photo-projects', 'title', t('personalProjectsHover'));
  }
  document.querySelectorAll('.contact-copy-btn').forEach(function (btn) {
    btn.setAttribute('title', t('contactCopyTitle'));
  });
  syncPortfolioLangBlocks();
  syncAutomationModalLang();
  renderFormationModal();
  var wfH3 = document.getElementById('automation-tab-workflow-h3');
  if (wfH3) {
    if (lang === 'FR') {
      wfH3.innerHTML =
        'Workflow <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-emerald-500">Automatisé</span>';
    } else {
      wfH3.innerHTML =
        '<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-emerald-500">Automated</span> Workflow';
    }
  }
  var visAutoRoot = getVisibleAutomationRoot();
  if (visAutoRoot) setActiveAutomationAgent(getLastAutomationAgentId(), visAutoRoot);
  renderCVModalBody();
}
