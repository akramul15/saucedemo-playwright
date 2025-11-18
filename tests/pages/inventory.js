import InventoryObjest from "../locators/inventoryobjects";
import data from "../../resources/Data.json";
import { expect, test } from "@playwright/test";
export default class Inventory {
    constructor(page) {
        this.page = page;
        this.locator = new InventoryObjest(page);
    }
    async clickHamburgerBtn() {
        await this.locator.hamburger.click();
    }
    async clickResetApp() {
        await this.locator.resetApp.click();
    }
    async clickCartIcon() {
        await this.locator.cart.click();
    }
    async clickCheckout() {
        await this.locator.Checkout.click();
    }
    async clickFinish() {
        await this.locator.finish.click();
    }
    async clickLogout() {
        await this.locator.Logout.click();
    }
    async selectZtoA() {
        await this.locator.filter.selectOption({ value: 'za' });

    }
    async SuccessMessage() {
        return await this.locator.Successful.innerText();
    }
    async addItems(j) {
        for (let i = 0; i < j; i++) {
            await this.locator.AddtoCart.nth(i).click();;
        }
    }

    async validateCartProducts(cartNames, cartPrices, productsData) {
        let sum = 0;

        for (let i = 0; i < cartNames.length; i++) {
            const name = cartNames[i];
            const priceText = cartPrices[i];
            const product = productsData.find(ProductItem => ProductItem.name === name);
            const priceNum = parseFloat(priceText.replace('$', ''));
            expect(priceNum).toBe(product.price);
            sum = sum+product.price;
        }
        const itemTotalText = await this.locator.ItemTotal.textContent();
        const itemTotal = parseFloat(itemTotalText.replace('Item total: $', ''));

        expect(itemTotal).toBeCloseTo(sum, 2);
    }

    async getCartNames() {
        return await this.locator.CheckoutItems.allTextContents();
    }
    async getCartPrices() {
        return await this.locator.CheckoutPrices.allTextContents(); 
    }
}