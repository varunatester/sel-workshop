import HomePage from "../pageobjects/HomePage";
import {assert} from "chai";

describe('My web application', () => {
    let homePage: HomePage;
    before('setup', () => {
        homePage = HomePage.open()
    });

    it('should add item to cart', () => {
        let item = 'book';
        let searchResultsPage = homePage.searchFor(item);
        assert.strictEqual(searchResultsPage.getSearchTerm(), '"book"');
        let itemPage = searchResultsPage.navigateToItem(1);
        itemPage.addItemToCart();
    });
});


