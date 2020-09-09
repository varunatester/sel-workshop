import ItemPage from "./ItemPage";

export default class SearchResultsPage {
    get toolBarText() {
        return $("span[cel_widget_id=\"UPPER-RESULT_INFO_BAR\"] div span.a-color-state");
    }

    getSearchTerm(): string {
        return this.toolBarText.getText();
    }

    navigateToItem(index: number): ItemPage {
        let searchResult = $(`div[data-index="${index}"] span[data-component-type="s-product-image"] a div`);
        searchResult.click();
        browser.switchToWindow(browser.getWindowHandles()[1]);
        return new ItemPage();
    }
}