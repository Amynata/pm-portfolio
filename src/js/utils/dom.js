export function setTextIfPresent(id, text) {
  var el = document.getElementById(id);
  if (el) el.textContent = text;
}

export function setAttrIfPresent(id, attr, value) {
  var el = document.getElementById(id);
  if (el) el.setAttribute(attr, value);
}

export function setTextEntries(entries) {
  entries.forEach(function (entry) {
    setTextIfPresent(entry[0], entry[1]);
  });
}

// Helper partagé pour uniformiser l'ouverture/fermeture des modales.
export function setModalVisibility(modalId, isOpen) {
  var modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.toggle('invisible', !isOpen);
  modal.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

export function bindModalOpen(triggerId, modalId) {
  var trigger = document.getElementById(triggerId);
  if (!trigger) return;
  trigger.addEventListener('click', function () {
    setModalVisibility(modalId, true);
  });
}

export function bindModalClose(triggerId, modalId) {
  var trigger = document.getElementById(triggerId);
  if (!trigger) return;
  trigger.addEventListener('click', function () {
    setModalVisibility(modalId, false);
  });
}
