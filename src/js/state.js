// État runtime unique du portfolio (langue, sélection, hub, automation).
// Centralisé pour clarifier les mutations et faciliter le débogage.
export const state = {
  lang: 'FR',
  selectedExp: null,
  activeTab: 'mission',
  activeProjIdx: 0,
  activeProjectPage: 0,
  lastAutomationAgentId: 'pm-secretary',
  /** @type {'photo' | 'tools' | 'certs' | 'notion'} */
  hubView: 'photo',
};
