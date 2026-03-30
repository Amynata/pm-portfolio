// Navigation mobile isolée pour éviter un init monolithique.
export function wireMobileNav(options) {
  var onBeforeClose = options.onBeforeClose;

  function closeMobileNav() {
    var overlay = document.getElementById('mobile-nav');
    var drawer = document.getElementById('mobile-nav-drawer');
    var openBtn = document.getElementById('btn-nav-open');
    if (!overlay || !drawer) return;
    if (typeof onBeforeClose === 'function') onBeforeClose();
    overlay.classList.add('invisible', 'opacity-0', 'pointer-events-none');
    overlay.classList.remove('opacity-100');
    overlay.setAttribute('aria-hidden', 'true');
    drawer.classList.add('translate-x-full');
    drawer.classList.remove('translate-x-0');
    document.body.classList.remove('overflow-hidden');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
  }

  function openMobileNav() {
    var overlay = document.getElementById('mobile-nav');
    var drawer = document.getElementById('mobile-nav-drawer');
    var openBtn = document.getElementById('btn-nav-open');
    if (!overlay || !drawer) return;
    overlay.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100');
    overlay.setAttribute('aria-hidden', 'false');
    drawer.classList.remove('translate-x-full');
    drawer.classList.add('translate-x-0');
    document.body.classList.add('overflow-hidden');
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
  }

  var openBtn = document.getElementById('btn-nav-open');
  var closeBtn = document.getElementById('btn-nav-close');
  var backdrop = document.getElementById('mobile-nav-backdrop');
  if (openBtn) openBtn.addEventListener('click', openMobileNav);
  if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
  if (backdrop) backdrop.addEventListener('click', closeMobileNav);

  // Réutilise les boutons desktop (même logique modales / langue)
  [
    ['mobile-nav-lang', 'btn-lang'],
    ['mobile-nav-formation', 'btn-formation'],
    ['mobile-nav-projects', 'btn-hero-projects'],
    ['mobile-nav-cv', 'btn-hero-cv'],
    ['mobile-nav-contact', 'btn-contact'],
  ].forEach(function (pair) {
    var m = document.getElementById(pair[0]);
    if (!m) return;
    m.addEventListener('click', function () {
      var t = document.getElementById(pair[1]);
      if (t) t.click();
      closeMobileNav();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });

  return { closeMobileNav: closeMobileNav, openMobileNav: openMobileNav };
}
