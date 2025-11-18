export default class AccountObjest{
    constructor(page){
        this.page =page;
        this.username = this.page.locator("//input[@placeholder='Username']");
        this.Pass = this.page.locator("//input[@placeholder='Password']");
        this.Login = this.page.locator("//input[contains(@class,'submit-button')]");
        this.Error= this.page.locator("//h3[contains(text(),'Epic')]")
        this.Firstname = this.page.locator("//input[@placeholder='First Name']");
        this.Lastname = this.page.locator("//input[@placeholder='Last Name']");
        this.postalcode = this.page.locator("//input[@placeholder='Zip/Postal Code']");
        this.Continue = this.page.locator("//input[@id='continue']");
    }
}