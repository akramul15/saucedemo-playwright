import Accounts from "../pages/account"; 
import { expect, test } from "@playwright/test"; 
import Inventory from "../pages/inventory";
import InventoryObjest from "../locators/inventoryobjects";
import data from "../../resources/Data.json"


test.describe.serial("Suacedemo site performance_glitch_user test suite", () => {
    let account, page, context, inventory, inventoryObjest;

    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        account = new Accounts(page);
        inventory = new Inventory(page);
        inventoryObjest = new InventoryObjest(page);
        await page.goto("/");
    });

    test("Login with performance_glitch_user", async () => {
        await account.login(data.user.performance, data.user.password);
    });

    test("Reset App State and sort products Z to A and add item", async () => {
        await inventory.clickHamburgerBtn();
        await inventory.clickResetApp();
        await inventory.selectZtoA();
        await inventory.addItems(1);
    });

    

    test("Go to checkout and fill user info", async () => {
        await inventory.clickCartIcon();
        await inventory.clickCheckout();
        await account.FillInfo(data.user.Firstname, data.user.Lastname, data.user.postalcode);
    });

    test("Validate cart items and total price", async () => {
        const cartNames = await inventory.getCartNames();
        const cartPrices = await inventory.getCartPrices();
        await inventory.validateCartProducts(cartNames, cartPrices, data.products);
    });

    test("Finish purchase and verify success message", async () => {
        await inventory.clickFinish();
        const SuccessExpected = await inventory.SuccessMessage();
        await expect(SuccessExpected).toContain("Thank");
    });

    test("Reset App State and logout", async () => {
        await inventory.clickHamburgerBtn();
        await inventory.clickResetApp();
        await inventory.clickLogout();
    });
});
