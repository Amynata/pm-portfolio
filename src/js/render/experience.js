// Rendu expérience (timeline + liste + panneau détail) extrait de main.js.
export function createExperienceHandlers(deps) {
  var state = deps.state;
  var experiences = deps.experiences;
  var escapeHtml = deps.escapeHtml;
  var getBadgeClass = deps.getBadgeClass;
  var companyTypeForLang = deps.companyTypeForLang;
  var t = deps.t;
  var getOpenExpModal = deps.getOpenExpModal;
  var getRenderExpModalBody = deps.getRenderExpModalBody;

  function getProjectPageForExperience(exp, pageIndex) {
    if (!exp || !Array.isArray(exp.projectPages)) return null;
    // Demande métier : sur Decathlon, on inverse le contenu du projet 1 et du projet 3.
    if (exp.id === 0 && exp.projectPages.length >= 3) {
      if (pageIndex === 0) return exp.projectPages[2];
      if (pageIndex === 2) return exp.projectPages[0];
    }
    return exp.projectPages[pageIndex] || null;
  }

  function updateOrbitActiveState() {
    document.querySelectorAll('.exp-orbit-btn').forEach(function (btn, index) {
      var dot = btn.querySelector('.exp-orbit-dot');
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
        if (label && !isTimeline && !btn.matches(':hover')) {
          label.classList.add('opacity-0', 'scale-90', 'translate-y-2');
          label.classList.remove('opacity-100', 'scale-100');
        }
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

  function renderExperienceTimeline() {
    var container = document.getElementById('experience-timeline-nodes');
    if (!container) return;
    var total = experiences.length;
    var denom = Math.max(1, total - 1);
    container.innerHTML = '';

    experiences.forEach(function (exp, index) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.expIndex = String(index);
      btn.className =
        'exp-orbit-btn exp-timeline-node group relative flex min-w-0 max-w-[22%] flex-1 flex-col items-center text-slate-900 sm:max-w-none';
      btn.style.setProperty('--exp-index', String(index));
      btn.style.setProperty('--exp-denom', String(denom));
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
          '<img src="' + escapeHtml(exp.logo) + '" alt="' + escapeHtml(exp.company) + ' logo" class="h-10 w-10 object-contain sm:h-12 sm:w-12" />';
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
        if (state.selectedExp !== index) d.style.boxShadow = '';
      });
      btn.addEventListener('click', function () {
        var clickHintEl = document.getElementById('click-hint');
        if (clickHintEl) clickHintEl.classList.add('opacity-0', 'pointer-events-none');
        selectExp(index);
        var openExpModal = getOpenExpModal();
        if (openExpModal) openExpModal();
        updateOrbitActiveState();
      });
    });
    updateOrbitActiveState();
  }

  function renderProjectsList() {
    var list = document.getElementById('projects-list');
    if (!list) return;
    list.innerHTML = '';
    experiences.forEach(function (exp, index) {
      var card = document.createElement('button');
      card.type = 'button';
      card.dataset.expIndex = index;
      card.className =
        'project-card w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 ' +
        (state.selectedExp === index ? 'border-[#818CF8] bg-white shadow-lg' : 'border-slate-100 bg-white/60 hover:border-slate-200 hover:bg-white/80');
      card.innerHTML =
        '<span class="text-[9px] font-black uppercase tracking-widest text-slate-400">' + escapeHtml(exp.period[state.lang]) + '</span>' +
        '<h3 class="text-base font-bold text-slate-900 mt-1">' + escapeHtml(exp.title[state.lang]) + '</h3>' +
        '<p class="text-sm font-semibold mt-1" style="color:' + exp.color + '">@' + escapeHtml(exp.company) + '</p>' +
        '<span class="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase ' + getBadgeClass(exp.companyType) + '">' +
        escapeHtml(companyTypeForLang(exp.companyType)) +
        '</span>';
      card.addEventListener('click', function () {
        selectExp(index);
      });
      list.appendChild(card);
    });
  }

  function renderProjectDetailPanel() {
    var panel = document.getElementById('project-detail');
    if (!panel) return;
    if (state.selectedExp == null) {
      panel.innerHTML = '<p class="text-slate-400 font-medium">' + escapeHtml(t('selectProject')) + '</p>';
      return;
    }
    var exp = experiences[state.selectedExp];
    var proj = exp.projects[state.activeProjIdx];
    panel.innerHTML =
      '<div class="flex flex-col mb-6">' +
      '<span class="text-[9px] font-black bg-slate-100 text-slate-500 w-fit px-3 py-1 rounded-full uppercase tracking-widest mb-4">' + escapeHtml(exp.period[state.lang]) + '</span>' +
      '<h3 class="text-2xl font-black tracking-tighter leading-tight mb-2">' + escapeHtml(exp.title[state.lang]) + '</h3>' +
      '<p class="text-base font-bold mb-2" style="color:' + exp.color + '">@' + escapeHtml(exp.company) + '</p>' +
      '<span class="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase ' + getBadgeClass(exp.companyType) + '">' + escapeHtml(companyTypeForLang(exp.companyType)) + '</span>' +
      '</div>' +
      '<div class="flex items-center justify-between mb-6">' +
      '<div class="flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit">' +
      '<button type="button" class="exp-tab-mission px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (state.activeTab === 'mission' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') + '">' + escapeHtml(t('tabMission')) + '</button>' +
      '<button type="button" class="exp-tab-project px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (state.activeTab === 'project' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') + '">' + escapeHtml(t('tabProject')) + '</button>' +
      '</div>' +
      (state.activeTab === 'project' && exp.projectPages && exp.projectPages.length > 1
        ? '<div class="flex gap-1.5">' + exp.projectPages.map(function (_, pi) {
            return '<button type="button" class="exp-page-dot w-7 h-7 rounded-lg text-[10px] font-black transition-all ' +
              (pi === state.activeProjectPage ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-400 hover:bg-slate-200') +
              '" data-page="' + pi + '">' + (pi + 1) + '</button>';
          }).join('') + '</div>'
        : '') +
      '</div>' +
      (state.activeTab === 'mission'
        ? '<div class="text-slate-600"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' + escapeHtml(t('tabMission')) + '</p>' +
          (exp.missionHtml ? '<div class="text-sm md:text-base font-medium leading-relaxed">' + exp.missionHtml[state.lang] + '</div>' : '<p class="text-sm md:text-base font-medium leading-relaxed italic">"' + escapeHtml(exp.mission[state.lang]) + '"</p>') +
          '</div>'
        : (exp.projectPages
          ? '<div class="exp-project-content w-full min-w-0">' + (getProjectPageForExperience(exp, state.activeProjectPage) || exp.projectPages[0])[state.lang] + '</div>'
          : '<div class="space-y-6">' +
            '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' + escapeHtml(t('labelProblem')) + '</p><ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">' + proj.problem[state.lang].map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') + '</ul></div>' +
            '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' + escapeHtml(t('labelSolution')) + '</p><ul class="list-disc pl-5 space-y-1 text-sm text-slate-600">' + proj.solution[state.lang].map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('') + '</ul></div>' +
            '<div><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' + escapeHtml(t('labelImpact')) + '</p><ul class="list-disc pl-5 space-y-1 text-sm font-bold text-slate-900">' + proj.impact[state.lang].map(function (i) { return '<li>' + escapeHtml(i) + '</li>'; }).join('') + '</ul></div>' +
            '<div class="pt-6 border-t border-slate-100"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' + escapeHtml(t('labelTech')) + '</p><div class="flex flex-wrap gap-2">' +
            proj.techStack.map(function (tech) { return '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">' + escapeHtml(tech) + '</span>'; }).join('') +
            '</div></div>' +
            '</div>'));

    panel.querySelectorAll('.exp-tab-mission').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeTab = 'mission';
        renderProjectDetailPanel();
        var r = getRenderExpModalBody();
        if (r) r();
      });
    });
    panel.querySelectorAll('.exp-tab-project').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeTab = 'project';
        state.activeProjectPage = 0;
        renderProjectDetailPanel();
        var r = getRenderExpModalBody();
        if (r) r();
      });
    });
    panel.querySelectorAll('.exp-page-dot').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeProjectPage = parseInt(el.dataset.page, 10);
        renderProjectDetailPanel();
        var r = getRenderExpModalBody();
        if (r) r();
      });
    });
  }

  return {
    renderExperienceTimeline: renderExperienceTimeline,
    updateOrbitActiveState: updateOrbitActiveState,
    selectExp: selectExp,
    getProjectPageForExperience: getProjectPageForExperience,
    renderProjectsList: renderProjectsList,
    renderProjectDetailPanel: renderProjectDetailPanel,
  };
}
