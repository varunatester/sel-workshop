class SearchResultsPage {
    get toolBarText() {
        return $("span[cel_widget_id=\"UPPER-RESULT_INFO_BAR\"] div span.a-color-state");
    }

    getSearchText(): string {
        return this.toolBarText.getText();
    }

    navigateToItem(index: number): void {
        let searchResult = $(`div[data-index="${index}"] span[data-component-type="s-product-image"] a div`);
        searchResult.click();
        browser.switchToWindow(browser.getWindowHandles()[1]);
    }
}

export default new SearchResultsPage()