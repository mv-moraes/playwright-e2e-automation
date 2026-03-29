class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.checkoutButton = '[data-test="checkout"]';
    this.firstName = '[data-test="firstName"]';
    this.lastName = '[data-test="lastName"]';
    this.postalCode = '[data-test="postalCode"]';
    this.continueButton = '[data-test="continue"]';
    this.finishButton = '[data-test="finish"]';

    this.successMessage = '.complete-header';
  }

  async startCheckout() {
    await this.page.click(this.checkoutButton);
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.page.fill(this.firstName, firstName);
    await this.page.fill(this.lastName, lastName);
    await this.page.fill(this.postalCode, postalCode);
    await this.page.click(this.continueButton);
  }

  async finishCheckout() {
    await this.page.click(this.finishButton);
  }

}

module.exports = CheckoutPage;