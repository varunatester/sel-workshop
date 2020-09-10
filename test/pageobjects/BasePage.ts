export default abstract class BasePage {
    open(path: string): void {
        browser.maximizeWindow();
        browser.url(path);
    }
}

