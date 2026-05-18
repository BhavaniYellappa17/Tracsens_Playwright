import { test } from '@playwright/test';
import { LoginPage } from '../pages/Tracsens/loginPage';
import { LogoutPage } from '../pages/Tracsens/logoutPage';
import loginData from '../tests/testdata/loginData.json';

//step:1
// Page Object Model instances declared at module level
// so they are accessible in both beforeEach and afterEach blocks
let loginPage: LoginPage;
let logout: LogoutPage;
declare global {var giSMALLWAIT: number,giMEDIUMWAIT:number,giLARGEWAIT:number;}

// Login to the Applicationi
test.beforeEach(async ({ page,browserName }) => {
    
   // Create objects
    loginPage = new LoginPage(page);
    logout = new LogoutPage(page);
    if(browserName==='firefox'){
     globalThis.giSMALLWAIT = 2000;
     globalThis.giMEDIUMWAIT = 4000;
     globalThis.giLARGEWAIT = 10000;
     

    }
    else{
      globalThis.giSMALLWAIT = 2000;
      globalThis.giMEDIUMWAIT = 4000;
      globalThis.giLARGEWAIT = 10000;
     
    }
    // Login to the application using credentials from JSON test data file
    await loginPage.loginToApplicationT(loginData.username,loginData.password); 
    
    
});


//step:2
// Logout from the Application
test.afterEach(async ({ page }) => {  
    await logout.logOut();
    
    
});
