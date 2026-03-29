const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const testData = require('../data/testData');

let loginPage;
let cartPage;
let checkoutPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);

  await loginPage.navigate();

  await loginPage.login(
    testData.users.validUser.username,
    testData.users.validUser.password
  );
});

test('complete checkout successfully', async ({ page }) => {
  await cartPage.addBackpackToCart();
  await cartPage.openCart();

  await checkoutPage.startCheckout();
  await checkoutPage.fillCheckoutForm(
    testData.checkoutData.firstName,
    testData.checkoutData.lastName,
    testData.checkoutData.postalCode
  );

  await checkoutPage.finishCheckout();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});