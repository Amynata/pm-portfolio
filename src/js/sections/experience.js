// Section Expérience : regroupe la timeline, la liste et le panneau détail.
// S'appuie sur le renderer dédié mais expose une API plus haut niveau pour main.js.
import { createExperienceHandlers } from '../render/experience.js';

export function createExperienceSection(deps) {
  var state = deps.state;
  var experiences = deps.experiences;
  var escapeHtml = deps.escapeHtml;
  var getBadgeClass = deps.getBadgeClass;
  var companyTypeForLang = deps.companyTypeForLang;
  var t = deps.t;
  var getOpenExpModal = deps.getOpenExpModal;
  var getRenderExpModalBody = deps.getRenderExpModalBody;

  // On instancie une seule fois le bloc expérience et on renvoie ses handlers.
  var handlers = createExperienceHandlers({
    state: state,
    experiences: experiences,
    escapeHtml: escapeHtml,
    getBadgeClass: getBadgeClass,
    companyTypeForLang: companyTypeForLang,
    t: t,
    getOpenExpModal: getOpenExpModal,
    getRenderExpModalBody: getRenderExpModalBody,
  });

  return {
    renderExperienceTimeline: handlers.renderExperienceTimeline,
    updateOrbitActiveState: handlers.updateOrbitActiveState,
    selectExp: handlers.selectExp,
    getProjectPageForExperience: handlers.getProjectPageForExperience,
    renderProjectsList: handlers.renderProjectsList,
    renderProjectDetailPanel: handlers.renderProjectDetailPanel,
  };
}

