interface IItemPage{
    cartButton : WebdriverIO.Element;
    addItemToCart() : void;
}

class ItemPage implements IItemPage {

    get cartButton() {
        return $('#add-to-cart-button');
    }

    addItemToCart() {
        this.cartButton.click();
    }
}
 export default new ItemPage()
