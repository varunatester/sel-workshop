import homePage from "../pageobjects/HomePage";
import searchResultsPage from "../pageobjects/SearchResultsPage"
import itemPage from "../pageobjects/ItemPage"
import {assert} from "chai";

describe('My web application', () => {
    before('setup', () => {
        homePage.open("/")
    });

    it('should add item to cart', () => {
        let item = 'book';
        homePage.searchFor(item);
        assert.strictEqual(searchResultsPage.getSearchText(), '"book"');
        searchResultsPage.navigateToItem(1);
        itemPage.addItemToCart();
    });
});


