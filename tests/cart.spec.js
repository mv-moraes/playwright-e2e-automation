const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');
const testData = require('../data/testData');

let loginPage;
let cartPage;

test.beforeEach(async ({ page }) => {

  loginPage = new LoginPage(page);
  cartPage = new CartPage(page);

  await loginPage.navigate();

  await loginPage.login(
    testData.users.validUser.username,
    testData.users.validUser.password
  );

});

test('add item to cart', async ({ page }) => {

  await cartPage.addBackpackToCart();

  await expect(page.locator('.shopping_cart_badge'))
    .toHaveText('1');

});

test('remove item from cart', async ({ page }) => {

  await cartPage.addBackpackToCart();

  await cartPage.removeBackpackFromCart();

  await expect(page.locator('.shopping_cart_badge'))
    .toHaveCount(0);

});