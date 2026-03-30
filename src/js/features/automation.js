// Centralise le wiring des interactions de la modale automation.
export function wireAutomationInteractions(deps) {
  var getAutomationModal = deps.getAutomationModal;
  var getVisibleAutomationRoot = deps.getVisibleAutomationRoot;
  var setActiveAutomationAgent = deps.setActiveAutomationAgent;
  var setActiveAutomationProject = deps.setActiveAutomationProject;
  var getLastAgentId = deps.getLastAgentId;

  var autoClose = document.getElementById('automation-card-close');
  var autoBackdrop = document.getElementById('automation-card-backdrop');
  function closeAutomationCard() {
    var modal = document.getElementById('automation-card-modal');
    if (!modal) return;
    modal.classList.add('invisible');
    modal.setAttribute('aria-hidden', 'true');
  }
  if (autoClose) autoClose.addEventListener('click', closeAutomationCard);
  if (autoBackdrop) autoBackdrop.addEventListener('click', closeAutomationCard);

  var autoModalNode = getAutomationModal();
  if (autoModalNode) {
    autoModalNode.addEventListener('click', function (e) {
      var agentBtn = e.target.closest('[data-agent-tab]');
      if (!agentBtn || !autoModalNode.contains(agentBtn)) return;
      var root = agentBtn.closest('.automation-modal-lang-root');
      if (!root || root.classList.contains('hidden')) return;
      var agentId = agentBtn.getAttribute('data-agent-tab');
      if (agentId) setActiveAutomationAgent(agentId, root);
    });
  }

  var automationProjectTabs = document.querySelectorAll('[data-automation-project-tab]');
  if (automationProjectTabs.length) {
    automationProjectTabs.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var projectId = btn.getAttribute('data-automation-project-tab');
        if (projectId) setActiveAutomationProject(projectId);
      });
    });
    setActiveAutomationProject('workflow');
    var r0 = getVisibleAutomationRoot();
    if (r0) setActiveAutomationAgent(getLastAgentId(), r0);
  }
}
