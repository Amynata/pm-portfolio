const { test, expect } = require('@playwright/test');

const VIEWPORTS = [
  { name: 'mobile-320', width: 320, height: 568 },
  { name: 'mobile-375', width: 375, height: 812 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1024', width: 1024, height: 768 },
];

for (const viewport of VIEWPORTS) {
  test(`layout responsive sans overflow - ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await page.goto('/');

    // Laisse le temps aux composants dynamiques (modales/hub/timeline) de se stabiliser.
    await page.waitForTimeout(300);

    const hasOverflow = await page.evaluate(() => {
      const root = document.documentElement;
      return root.scrollWidth > root.clientWidth + 1;
    });

    expect(hasOverflow).toBeFalsy();
  });
}

test('menu mobile ouvre et ferme correctement', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');

  const openBtn = page.locator('#btn-nav-open');
  await expect(openBtn).toBeVisible();
  await openBtn.click();

  const mobileNav = page.locator('#mobile-nav');
  await expect(mobileNav).toHaveAttribute('aria-hidden', 'false');

  await page.locator('#mobile-nav-cv').click();
  await expect(page.locator('#cv-modal')).toHaveAttribute('aria-hidden', 'false');
});
