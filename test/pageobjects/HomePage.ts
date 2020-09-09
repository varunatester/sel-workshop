import SearchResultsPage from "./SearchResultsPage";
import BasePage from "./BasePage";

export default class HomePage extends BasePage {
    constructor() {
        super();
    }

    static open(): HomePage {
        browser.maximizeWindow();
        browser.url("http://www.amazon.in");
        return new HomePage();
    }

    get searchTerm() {
        return $('#twotabsearchtextbox');
    }

    searchFor(searchTerm: string): SearchResultsPage {
        let key = searchTerm + "\uE007"
        this.searchTerm.setValue(key);
        return new SearchResultsPage();
    }
}
