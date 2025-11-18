import AccountObjest from "../locators/accountobjects";

export default class Accounts{
    constructor(page){
        this.page =page;
        this.locator = new AccountObjest(page);
    }
    
    async clickAccountIcon(){
        await this.locator.accountIcon.click();
    }    

    async clickcreateaccount(){
        await this.locator.createaccount.click();
    }   
    
    async enterUsername(username){
        
        await this.locator.username.type(username);
    }  
    async enterfirstname(firstname){
        await this.locator.Firstname.type(firstname);
    }  

     async enterlastname(lastname){
        await this.locator.Lastname.type(lastname);
    }  
     async enterpostal(postal){
        await this.locator.postalcode.type(postal);
    }  
    
    async enterpass(password){
        
        await this.locator.Pass.type(password);
    }
    
    
    async clickbtnLogIN(){
        await this.locator.Login.click();
    }
    async clickbtnContinue(){
        await this.locator.Continue.click();
    }
    
    async clickbtnLogOut(){
        await this.locator.logout.click();
    }
    async getError(){
    return await this.locator.Error.innerText();
}
    async login(username,password){
        await this.page.waitForTimeout(2000);
        await this.enterUsername(username);
        await this.enterpass(password);
        await this.clickbtnLogIN();

    }

     async FillInfo(firstname,lastname,postal){
        await this.page.waitForTimeout(2000);
        await this.enterfirstname(firstname);
        await this.enterlastname(lastname);
        await this.enterpostal(postal);
        await this.clickbtnContinue();

    }
}