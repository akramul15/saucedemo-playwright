export default class InventoryObjest {
    constructor(page) {
        this.page = page;
        this.hamburger = this.page.locator("//div[@class='bm-burger-button']");
        this.resetApp = this.page.locator("//a[@id='reset_sidebar_link']");
        this.items = this.page.locator("//div[@class='inventory_item_name']");
        this.prices = this.page.locator("//div[@class='inventory_item_price']");
        this.AddtoCart = this.page.locator("//button[contains(text(),'Add to cart')]");
        this.cart = this.page.locator("//a[@class='shopping_cart_link']");
        this.Checkout = this.page.locator("//button[contains(text(),'Checkout')]")
        this.CheckoutItems = this.page.locator("//div[@class='inventory_item_name']")
        this.CheckoutPrices = this.page.locator("//div[@class='inventory_item_price']");
        this.ItemTotal = this.page.locator("//div[@class='summary_subtotal_label']");
        this.finish = this.page.locator("//button[@id='finish']");
        this.Successful = this.page.locator("//h2[contains(text(),'Thank')]");
        this.Logout = this.page.locator("//a[@id='logout_sidebar_link']");
        this.filter = this.page.locator("//select[@class='product_sort_container']");
        this.ZA = this.page.locator("//option[@value='za']");
    }
}