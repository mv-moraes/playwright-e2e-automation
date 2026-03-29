const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const testData = require('../data/testData');

test('login successfully with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    testData.users.validUser.username,
    testData.users.validUser.password
  );

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});

test('login should fail with wrong password', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login(
    testData.users.invalidUser.username,
    testData.users.invalidUser.password
  );

  await expect(page.locator('[data-test="error"]')).toBeVisible();
});