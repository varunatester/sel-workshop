describe('My web application', () => {
    it('should add item to cart', () => {
      browser.maximizeWindow();
      browser.url("http://www.amazon.in");
      $("#twotabsearchtextbox").setValue('book\uE007');
      $('div[data-index="1"] span[data-component-type="s-product-image"] a div').click();
      browser.switchToWindow(browser.getWindowHandles()[1]);
      $('#add-to-cart-button').click();
    });
});


