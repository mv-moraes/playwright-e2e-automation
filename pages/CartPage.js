class CartPage {
  constructor(page) {
    this.page = page;
    this.addBackpackButton = '[data-test="add-to-cart-sauce-labs-backpack"]';
    this.removeBackpackButton = '[data-test="remove-sauce-labs-backpack"]';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
  }

  async addBackpackToCart() {
    await this.page.click(this.addBackpackButton);
  }

  async removeBackpackFromCart() {
    await this.page.click(this.removeBackpackButton);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }
}

module.exports = CartPage;