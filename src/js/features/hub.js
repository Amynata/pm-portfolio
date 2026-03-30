// Même mécanique de toggle pour les vues du hub.
export function bindHubToggle(buttonId, targetView, getCurrentView, setHubView) {
  var btn = document.getElementById(buttonId);
  if (!btn) return;
  btn.addEventListener('click', function () {
    var current = getCurrentView();
    setHubView(current === targetView ? 'photo' : targetView);
  });
}
