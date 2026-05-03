// Modales extraites de main.js pour isoler le rendu et les interactions.
export function createModalHandlers(deps) {
  var state = deps.state;
  var formationEntries = deps.formationEntries;
  var experiences = deps.experiences;
  var escapeHtml = deps.escapeHtml;
  var schoolLinkName = deps.schoolLinkName;
  var getBadgeClass = deps.getBadgeClass;
  var companyTypeForLang = deps.companyTypeForLang;
  var getProjectPageForExperience = deps.getProjectPageForExperience;
  var t = deps.t;
  var setModalVisibility = deps.setModalVisibility;
  var getRenderProjectDetailPanel = deps.getRenderProjectDetailPanel;

  function renderFormationModal() {
    var wrap = document.getElementById('formation-modal-body');
    if (!wrap) return;
    wrap.innerHTML = formationEntries
      .map(function (e) {
        var timeline =
          '<div class="flex flex-col items-center">' +
          '<div class="w-3 h-3 rounded-full bg-[#818CF8] shadow-md"></div>' +
          (e.last ? '' : '<div class="w-0.5 flex-1 bg-slate-200 mt-1"></div>') +
          '</div>';
        var mainClass = e.last ? 'flex-1 flex items-start justify-between gap-4' : 'flex-1 pb-2 flex items-start justify-between gap-4';
        var innerTitle =
          '<p class="text-base font-black text-slate-900 leading-tight">' + escapeHtml(e.title) + '</p>';
        if (e.lines) {
          innerTitle +=
            '<p class="text-sm text-slate-600 font-medium">' + escapeHtml(e.lines[0][state.lang]) + '</p>' +
            '<p class="text-sm font-bold text-slate-900 mt-1">' + escapeHtml(e.lines[1][state.lang]) + '</p>';
        }
        var sdName = schoolLinkName(e.school);
        return (
          '<div class="flex gap-4">' +
          timeline +
          '<div class="' +
          mainClass +
          '">' +
          '<div>' +
          '<p class="text-[10px] font-black uppercase tracking-widest text-[#818CF8] mb-1">' +
          escapeHtml(e.date[state.lang]) +
          '</p>' +
          innerTitle +
          '<a href="' +
          escapeHtml(e.school.href) +
          '" target="_blank" rel="noopener noreferrer" class="mt-1 inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-[#818CF8]">' +
          escapeHtml(sdName) +
          '<span aria-hidden="true" class="text-slate-300">•</span>' +
          '</a>' +
          '<p class="mt-2 max-w-prose text-xs leading-relaxed text-slate-500">' +
          escapeHtml(e.desc[state.lang]) +
          '</p>' +
          '</div>' +
          '<div class="flex h-10 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-2 shadow-sm">' +
          '<img src="' +
          escapeHtml(e.logo) +
          '" alt="' +
          escapeHtml(e.logoAlt) +
          '" class="max-w-full max-h-full object-contain" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'block\';" />' +
          '<span class="text-[8px] font-black text-slate-400 hidden">' +
          escapeHtml(e.logoFallback) +
          '</span>' +
          '</div>' +
          '</div>' +
          '</div>'
        );
      })
      .join('');
  }

  function renderExpModalBody() {
    var body = document.getElementById('exp-modal-body');
    if (!body || state.selectedExp == null) return;
    var exp = experiences[state.selectedExp];
    var proj = exp.projects[state.activeProjIdx];
    // Ajoute des classes dédiées pour appliquer des correctifs responsive ciblés en mobile.
    body.innerHTML =
      '<div class="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 opacity-[0.03] rounded-bl-full" style="background-color:' +
      exp.color +
      '"></div>' +
      '<div class="flex flex-col mb-6 text-slate-900">' +
      '<div class="exp-modal-header-row flex items-center justify-between mb-4">' +
      '<span class="text-[9px] md:text-[10px] font-black bg-slate-100 text-slate-500 w-fit px-3 py-1 rounded-full uppercase tracking-widest">' +
      escapeHtml(exp.period[state.lang]) +
      '</span>' +
      '<span class="exp-modal-company-badge px-3 py-1 rounded-full text-[10px] font-bold uppercase ' +
      getBadgeClass(exp.companyType) +
      '">' +
      escapeHtml(companyTypeForLang(exp.companyType)) +
      '</span>' +
      '</div>' +
      '<h3 class="text-2xl md:text-3xl font-black tracking-tighter leading-tight mb-2 pr-8">' +
      escapeHtml(exp.title[state.lang]) +
      '</h3>' +
      '<p class="text-base md:text-xl font-bold mb-2" style="color:' +
      exp.color +
      '">@' +
      escapeHtml(exp.company) +
      '</p>' +
      '</div>' +
      '<div class="flex items-center justify-between mb-8">' +
      '<div role="tablist" class="exp-modal-tablist flex gap-1 p-1 bg-slate-100 rounded-2xl w-fit">' +
      '<button type="button" role="tab" class="exp-modal-tab-btn exp-modal-tab-mission px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (state.activeTab === 'mission' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabMission')) +
      '</button>' +
      '<button type="button" role="tab" class="exp-modal-tab-btn exp-modal-tab-project px-6 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest ' +
      (state.activeTab === 'project' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600') +
      '">' +
      escapeHtml(t('tabProject')) +
      '</button>' +
      '</div>' +
      (state.activeTab === 'project' && exp.projectPages && exp.projectPages.length > 1
        ? '<div class="flex gap-1.5">' +
          exp.projectPages.map(function (_, pi) {
            return '<button type="button" class="exp-page-dot w-7 h-7 rounded-lg text-[10px] font-black transition-all ' +
              (pi === state.activeProjectPage ? 'bg-slate-900 text-white shadow-sm' : 'bg-slate-100 text-slate-400 hover:bg-slate-200') +
              '" data-page="' + pi + '">' + (pi + 1) + '</button>';
          }).join('') +
          '</div>'
        : '') +
      '</div>' +
      (state.activeTab === 'mission'
        ? '<div class="flex gap-4"><div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">ℹ</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('tabMission')) +
          '</p>' +
          (exp.missionHtml
            ? '<div class="text-sm md:text-base text-slate-600 font-medium leading-relaxed">' + exp.missionHtml[state.lang] + '</div>'
            : '<p class="text-sm md:text-lg text-slate-600 font-medium leading-relaxed italic">"' + escapeHtml(exp.mission[state.lang]) + '"</p>') +
          '</div></div>'
        : (exp.projectPages
          ? '<div class="exp-project-content w-full min-w-0">' + (getProjectPageForExperience(exp, state.activeProjectPage) || exp.projectPages[0])[state.lang] + '</div>'
          : '<div class="space-y-8">' +
          '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">⚠</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelProblem')) +
          '</p><ul class="space-y-3 text-sm md:text-base text-slate-600 font-medium">' +
          proj.problem[state.lang].map(function (p) { return '<li>' + escapeHtml(p) + '</li>'; }).join('') +
          '</ul></div></div>' +
          '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">✓</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelSolution')) +
          '</p><ul class="space-y-3 text-sm md:text-base text-slate-600 font-medium">' +
          proj.solution[state.lang].map(function (s) { return '<li>' + escapeHtml(s) + '</li>'; }).join('') +
          '</ul></div></div>' +
          '<div class="flex gap-4"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 opacity-10" style="background-color:' +
          exp.color +
          '">📊</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">' +
          escapeHtml(t('labelImpact')) +
          '</p><div class="text-base md:text-lg font-black text-slate-900">' +
          proj.impact[state.lang].map(function (i) { return '<p class="leading-tight">' + escapeHtml(i) + '</p>'; }).join('') +
          '</div></div></div>' +
          '<div class="flex gap-4 pt-6 border-t border-slate-100"><div class="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 bg-slate-100">◫</div><div class="flex-1"><p class="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">' +
          escapeHtml(t('labelTech')) +
          '</p><div class="flex flex-wrap gap-2">' +
          proj.techStack.map(function (tech) {
            return '<span class="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-tight">' + escapeHtml(tech) + '</span>';
          }).join('') +
          '</div></div></div>' +
          '</div>'));

    body.querySelectorAll('.exp-modal-tab-mission').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeTab = 'mission';
        renderExpModalBody();
        var renderProjectDetailPanel = getRenderProjectDetailPanel();
        if (renderProjectDetailPanel) renderProjectDetailPanel();
      });
    });
    body.querySelectorAll('.exp-modal-tab-project').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeTab = 'project';
        state.activeProjectPage = 0;
        renderExpModalBody();
        var renderProjectDetailPanel = getRenderProjectDetailPanel();
        if (renderProjectDetailPanel) renderProjectDetailPanel();
      });
    });
    body.querySelectorAll('.exp-page-dot').forEach(function (el) {
      el.addEventListener('click', function () {
        state.activeProjectPage = parseInt(el.dataset.page, 10);
        renderExpModalBody();
        var renderProjectDetailPanel = getRenderProjectDetailPanel();
        if (renderProjectDetailPanel) renderProjectDetailPanel();
      });
    });
  }

  function openExpModal() {
    renderExpModalBody();
    var modal = document.getElementById('exp-modal');
    if (!modal) return;
    setModalVisibility('exp-modal', true);
    modal.classList.add('visible');
  }

  function closeExpModal() {
    var modal = document.getElementById('exp-modal');
    if (!modal) return;
    setTimeout(function () {
      modal.classList.remove('visible');
      setModalVisibility('exp-modal', false);
    }, 0);
  }

  function renderCVModalBody() {
    var body = document.getElementById('cv-modal-body');
    if (!body) return;
    // PDF CV sous assets/documents/ — chemins relatifs pour iframe + téléchargement (GitHub Pages).
    // Mise à jour 2026 : version « Senior PM / 10 ans » (fichier TenYears).
    var pdfPath = 'assets/documents/Aminata_Dia_CV_2026_SeniorPM_TenYears.pdf';
    body.innerHTML =
      '<div class="cv-preview-wrap w-full">' +
      '<iframe src="' + pdfPath + '" class="cv-preview-iframe w-full rounded-2xl border border-slate-100" frameborder="0"></iframe>' +
      '</div>' +
      '<div class="flex justify-center mt-6">' +
      '<a href="' + pdfPath + '" download class="cv-download-btn inline-flex items-center gap-2 bg-slate-900 text-white font-black uppercase tracking-widest text-xs px-6 py-3 rounded-2xl shadow-xl hover:bg-[#818CF8] transition-all">' +
      escapeHtml(t('cvDownload')) +
      '</a>' +
      '</div>';
  }

  return {
    renderFormationModal: renderFormationModal,
    renderExpModalBody: renderExpModalBody,
    openExpModal: openExpModal,
    closeExpModal: closeExpModal,
    renderCVModalBody: renderCVModalBody,
  };
}
