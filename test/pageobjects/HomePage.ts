import BasePage from "./BasePage";

interface IHomePage{
    searchTerm : WebdriverIO.Element;
    searchFor(searchTerm : string) : void;
}

class HomePage extends BasePage implements IHomePage{
    constructor() {
        super();
    }

    get searchTerm() {
        return $('#twotabsearchtextbox');
    }

    searchFor(searchTerm: string) {
        let key = searchTerm + "\uE007"
        this.searchTerm.setValue(key);
    }
}

export default new HomePage()
