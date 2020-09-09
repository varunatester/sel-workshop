export default class ItemPage {

    get cartButton() {
        return $('#add-to-cart-button');
    }

    addItemToCart() {
        this.cartButton.click();
    }
}