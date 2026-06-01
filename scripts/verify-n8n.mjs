import { chromium } from '@playwright/test';

// Vérifie l'intégration "Workflows n8n" en mode prototype : la vue est chargée dans une
// IFRAME plein-cadre (#workflow-view / #workflow-frame), entre header & footer fixes,
// en One Page App (aucun rechargement), URL #workflow, retour navigateur + lien partageable.
// La vue embarquée (automatisations-n8n.html) masque son propre chrome et renvoie un
// postMessage('workflow-close') au parent. Les régressions de l'accueil sont aussi contrôlées.

const BASE = 'http://127.0.0.1:8099/index.html';
const results = [];
function check(name, cond, detail) { results.push({ name, ok: !!cond, detail: detail || '' }); }

const browser = await chromium.launch();
const ctx = await browser.newContext();
const page = await ctx.newPage();

const consoleErrors = [];
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text()); });
page.on('pageerror', (e) => consoleErrors.push('pageerror: ' + e.message));

await page.goto(BASE, { waitUntil: 'load' });
await page.waitForFunction(() => {
  var b = document.getElementById('btn-hero-automations');
  return b && /n8n/i.test(b.textContent || '');
}, { timeout: 10000 });

// Baseline accueil
check('Bouton CV header présent', await page.locator('#btn-cv').count() === 1);
check('Bouton hero Projets produit', (await page.locator('#btn-hero-projects').innerText()).trim().length > 0);
const heroAutoText = (await page.locator('#btn-hero-automations').innerText()).trim();
check('Hero "Workflows n8n" présent', /workflows/i.test(heroAutoText) && /n8n/i.test(heroAutoText), heroAutoText);

// Overlay iframe présent mais fermé au départ
check('Overlay #workflow-view présent', await page.locator('#workflow-view').count() === 1);
check('iframe #workflow-frame présente', await page.locator('#workflow-frame').count() === 1);
check('Vue fermée au départ (aria-hidden=true)', await page.locator('#workflow-view').getAttribute('aria-hidden') === 'true');
check('iframe non chargée tant que fermée (src vide)', !(await page.locator('#workflow-frame').getAttribute('src')), 'lazy');

// Critère 1 : clic hero → overlay is-open, hash #workflow, body.workflow-open, iframe chargée
await page.locator('#btn-hero-automations').click();
await page.waitForFunction(() => document.getElementById('workflow-view').classList.contains('is-open'), { timeout: 5000 }).catch(() => {});
check('1. Overlay is-open après clic hero', await page.evaluate(() => document.getElementById('workflow-view').classList.contains('is-open')));
check('1. Hash = #workflow', page.url().endsWith('#workflow'), page.url());
check('1. body.workflow-open', await page.evaluate(() => document.body.classList.contains('workflow-open')));
const frameSrc = await page.locator('#workflow-frame').getAttribute('src');
check('1. iframe src = automatisations-n8n.html', frameSrc === 'automatisations-n8n.html', frameSrc);

// One Page App : aucun rechargement (le DOM de l'accueil reste monté)
check('1bis. Accueil toujours monté (hero présent)', await page.locator('#btn-hero-automations').count() === 1);

// Contenu de la vue dans l'iframe
const wf = page.frameLocator('#workflow-frame');
await wf.locator('body').waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
await page.waitForTimeout(400);
check('2. Vue embarquée : body.is-embedded (chrome masqué)', await page.evaluate(() => {
  const f = document.getElementById('workflow-frame');
  try { return f.contentDocument.body.classList.contains('is-embedded'); } catch (_) { return false; }
}));
const viewText = await wf.locator('body').innerText();
check('2. Onglet Stock présent', /Stock/i.test(viewText));
check('2. Onglet Jarvis présent', /Jarvis/i.test(viewText));
check('2. 3 emplacements "À venir" / "Coming soon"', (viewText.match(/À venir|Coming soon/gi) || []).length >= 3, 'soon=' + (viewText.match(/À venir|Coming soon/gi) || []).length);

// Loom lazy : au plus 1 iframe Loom DANS la vue (placeholder si loom:null → 0)
const loomCount = await wf.locator('iframe[src*="loom"]').count();
check('2. Loom lazy : <=1 iframe Loom', loomCount <= 1, 'loom=' + loomCount);

// Ressources : carte n8n externe (nouvel onglet) + carte Git (popup Shadow DOM)
const n8nRes = wf.locator('a[href="https://n8n-cheatsheet.netlify.app/"]');
check('3. Carte n8n Cheatsheet présente', await n8nRes.count() >= 1);
check('3. n8n externe target=_blank', await n8nRes.first().getAttribute('target') === '_blank');
const gitRes = wf.locator('a[href="assets/documents/git-cheatsheet.html"]');
check('3. Carte Git Cheatsheet présente', await gitRes.count() >= 1);
const gitStatus = await page.evaluate(async () => (await fetch('assets/documents/git-cheatsheet.html', { method: 'HEAD' })).status);
check('3. git-cheatsheet.html servi (200)', gitStatus === 200, 'HTTP ' + gitStatus);

// Critère 4 : retour navigateur referme la vue + nettoie le hash
await page.goBack();
await page.waitForFunction(() => !document.getElementById('workflow-view').classList.contains('is-open'), { timeout: 5000 }).catch(() => {});
check('4. Overlay fermé après retour navigateur', !(await page.evaluate(() => document.getElementById('workflow-view').classList.contains('is-open'))));
check('4. Hash nettoyé (plus #workflow)', !/#workflow/.test(page.url()), page.url());

// Critère 5 : deep-link direct #workflow ouvre la vue au chargement
const page2 = await ctx.newPage();
const consoleErrors2 = [];
page2.on('console', (m) => { if (m.type() === 'error') consoleErrors2.push(m.text()); });
page2.on('pageerror', (e) => consoleErrors2.push('pageerror: ' + e.message));
await page2.goto(BASE + '#workflow', { waitUntil: 'load' });
await page2.waitForFunction(() => document.getElementById('workflow-view').classList.contains('is-open'), { timeout: 5000 }).catch(() => {});
check('5. Deep-link #workflow ouvre la vue', await page2.evaluate(() => document.getElementById('workflow-view').classList.contains('is-open')));
const wf2 = page2.frameLocator('#workflow-frame');
await wf2.locator('body').waitFor({ state: 'visible', timeout: 8000 }).catch(() => {});
await page2.waitForTimeout(400);
check('5. Deep-link : contenu n8n chargé', /Stock|Jarvis/.test(await wf2.locator('body').innerText().catch(() => '')));
await page2.close();

// Régressions accueil : modales Projets / CV / Formation / Contact
async function checkModal(label, btnId, modalId) {
  await page.locator('#' + btnId).click();
  await page.locator('#' + modalId).waitFor({ state: 'visible', timeout: 4000 }).catch(() => {});
  check(label, await page.locator('#' + modalId).isVisible());
  await page.evaluate((id) => { const m = document.getElementById(id); if (m) m.classList.add('hidden'); }, modalId);
  await page.waitForTimeout(120);
}
await checkModal('Régression: modale Projets produit', 'btn-hero-projects', 'automation-card-modal');
await checkModal('Régression: modale CV', 'btn-cv', 'cv-modal');
await checkModal('Régression: modale Formation', 'btn-formation', 'formation-modal');
await checkModal('Régression: modale Contact', 'btn-contact', 'contact-modal');

const allErrors = consoleErrors.concat(consoleErrors2);
check('Aucune erreur console (accueil)', allErrors.length === 0, allErrors.join(' | '));

await browser.close();

let pass = 0, fail = 0;
for (const r of results) {
  console.log((r.ok ? 'PASS ' : 'FAIL ') + r.name + (r.detail ? '  [' + r.detail + ']' : ''));
  r.ok ? pass++ : fail++;
}
console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
