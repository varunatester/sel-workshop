import SearchResultsPage from "./SearchResultsPage";
import BasePage from "./BasePage";

class HomePage extends BasePage {
    constructor() {
        super();
    }

    get searchTerm() {
        return $('#twotabsearchtextbox');
    }

    searchFor(searchTerm: string): void {
        let key = searchTerm + "\uE007"
        this.searchTerm.setValue(key);
    }
}

export default new HomePage()