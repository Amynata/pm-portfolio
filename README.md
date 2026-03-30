# Portfolio – Aminata Lissa Dia

Ce projet est un **site portfolio** qui présente :

- mes **expériences** de Product Manager ;
- les **projets** que j’ai menés au cours de **presque 10 ans d’expérience** ;
- le tout de manière **interactive** et agréable à explorer (timeline, hub central d’outils, modales, etc.).

Le site a été **réalisé en « vibe coding »** : l’objectif n’est pas de montrer un code « enterprise ready », mais de mettre en avant ma capacité à **prendre un outil** (HTML/CSS/JS, Playwright, etc.), **me l’approprier rapidement** et **en faire ce que je veux** au service d’une expérience produit.

Le site a été développé en **environ une semaine** (conception + intégration + interactions).

---

## Structure fonctionnelle du JavaScript

Le code JavaScript est découpé en plusieurs blocs, chacun avec une responsabilité claire.

### État & données

- **`src/js/state.js`** — État runtime du site (langue courante, expérience sélectionnée, vue du hub, onglets actifs, etc.).
- **`src/js/data.js`** — Données statiques : traductions, formations, expériences, outils, certifications (le détail peut être réparti dans `src/js/data/` selon les évolutions du dépôt).

### Utilitaires & i18n

- **`src/js/utils/dom.js`** — Helpers DOM : ouverture/fermeture de modales, visibilité, etc.
- **`src/js/i18n.js`** — Application des traductions selon la langue et synchronisation des blocs FR/EN.

### Rendu des sections (`render/`)

- **`src/js/render/experience.js`** — Bloc « Expériences & Projets » : timeline, liste des cartes, panneau détail (mission / projets).
- **`src/js/render/hub-view.js`** — Hub central : vue photo, rail outils / certifs / notions, grilles d’outils et badges de certifications.
- **`src/js/render/modals.js`** — Modales : formation, détail d’expérience, CV.

### Comportements ciblés (`features/`)

- **`src/js/features/hub.js`** — Boutons hub (tools / certs / notion) et navigation associée.
- **`src/js/features/mobile-nav.js`** — Navigation mobile.
- **`src/js/features/automation.js`** — Interactions de la modale « Mes projets / automation » (onglets, agents, etc.).

### Sections (`sections/`) — orchestration par domaine

Pour alléger `main.js`, certaines parties sont regroupées en **sections** :

- **`src/js/sections/experience.js`** — Section Expérience (API haut niveau au-dessus de `render/experience.js`).
- **`src/js/sections/hub.js`** — Section Hub : wiring des boutons latéraux, rail, outils et certifs.

### Point d’entrée

- **`main.js`** — Orchestrateur : imports, instanciation des sections, modales globales, écouteurs transverses (langue, resize), lancement de `init()` au chargement du document.
