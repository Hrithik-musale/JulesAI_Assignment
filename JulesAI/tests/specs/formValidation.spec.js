const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Form Validation', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('', '');
  await expect(page.locator('text=required')).toBeVisible();
});