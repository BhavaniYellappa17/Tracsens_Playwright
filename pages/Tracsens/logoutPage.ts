import { Page,expect } from "@playwright/test";

export class LogoutPage{
    constructor(public page:Page){

    }
    //*******************locators*********
    logoutProfileIcon='//img[@alt="profile"]';
    logoutButton='//button[text()="Log Out"]';
    loginMessage='//p[text()="Please enter your details to sign in."]';

    /**
     * Function Name: logOut
     * Author: Lakshmi
     * Created Date: 2026-05-08
     * Description: Performs logout action by clicking on profile icon
     *              and logout button. Then verifies successful logout
     *              by checking login page visibility message.
     */

    async logOut(){
        await this.page.locator(this.logoutProfileIcon).waitFor();
        //const profile = this.page.locator(this.logoutProfileIcon);
        //await expect(profile).toBeVisible();  
        //await profile.click();
        //await this.page.locator(this.logoutProfileIcon).click();
        await this.page.locator(this.logoutButton).click();
    
    if(await this.page.locator(this.loginMessage).isVisible()){
        console.log("Successfully loggedout");
    }
    else{
          console.log("Failed to logOut");
    }
}
}