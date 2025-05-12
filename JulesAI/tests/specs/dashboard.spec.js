const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');

test('Dashboard Navigation', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('qa@julesai.com', 'QaJULES2023!');

  const dashboard = new DashboardPage(page);
  await dashboard.navigateTo('Waste Management');
  await expect(page).toHaveURL(/waste/);
});