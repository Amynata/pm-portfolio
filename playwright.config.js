const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:5000',
    trace: 'on-first-retry',
  },
  // Serveur local statique pour reproduire le site tel qu'en production.
  webServer: {
    command: 'python -m http.server 5000',
    url: 'http://127.0.0.1:5000',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
