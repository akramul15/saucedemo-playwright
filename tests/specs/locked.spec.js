import Accounts from "../pages/account";
import { expect, test } from "@playwright/test";
import data from "../../resources/Data.json"
let Errormsg = "Epic"
test.describe.serial("Suacedemo site locked_user test suite", () => {
    let account, page, context;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        page = await context.newPage();
        account = new Accounts(page);
        await page.goto("/");
    });
    test("Try login with locked_out_user and verify the error message", async () => {
        await account.login(data.user.locked, data.user.password);
        await page.waitForTimeout(2000);
        let ErrorExpected = await account.getError();
        await expect(ErrorExpected).toContain(Errormsg);
    });
});