interface IBasePage{
    open(path : string) : void;
}

export default abstract class BasePage implements IBasePage{
    open(path: string) {
        browser.maximizeWindow();
        browser.url(path);
    }
}

