const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../data/loginData.json');

test.describe('Login Flow', () => {
  loginData.forEach((data) => {
    test(`Login with ${data.email}`, async ({ page }) => {
      const login = new LoginPage(page);
      await login.goto();
      await login.login(data.email, data.password);

      if (data.valid) {
        await expect(page).toHaveURL(/dashboard/);
      } else {
        await expect(page.locator('text=Invalid')).toBeVisible();
      }
    });
  });
});