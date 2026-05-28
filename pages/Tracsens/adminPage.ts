import { Page,expect } from "@playwright/test";

export class AdminPage{
   
    constructor(public page:Page){
        
    }

    
    customerPagetext='Manage companies and customer accounts (';
    
    // Sidebar main menu items (Home, Administration,outletmanagment,product managemnet )
     homePageMenuItems='//a[contains(@class,"sidebar-link")]//span';

    // Submenu items under Administration (Customers, Users)
     adminSubMenu='//span[@class="lan-4"]';
     //adminSubMenu='//span[contains(@class,"lan-4") or contains(@class,"lan-5")]';

    // Button to open Create Customer form
     createCustomerButton='//button[text()="Create customer"]';

    // Input fields in Create Customer form
     customerName='//input[@id="modal-name"]';
     email='//input[@id="modal-email"]';
     phone='//input[@id="modal-phone"]';

     // File upload field 
     choose_File='//input[@type="file"]';


     // Submit button for creating customer
     submitButton='//button[@type="submit"]';

     // Heading or title of Create Customer modal
     createCustomerPageText='//h5[text()="Create customer"]';

     // Search box inside customer page
     //searchBox='//input[@placeholder="Search by name, email or ID..."]';
     searchBox = `(//p[contains(text(),"${this.customerPagetext}")]/following::input)[1]`;

     //editButton
     editButton='(//button[@title="Edit"])[1]';

     //CustomerName table
     customerNameTableFirstRow = '//div[@class="customer-row-neat outlet-row-neat"][1]';

     //deleteButton
     deleteButton='(//button[@title="Deactivate (soft delete)"])[1]';
     
     
    /**
 * Function Name: adminMenuAndSubMenus
 * Author: Lakshmi
 * Created Date: 2026-05-11
 * Description: This function navigates through the sidebar menu by:-
 * 1. Finding the given main menu (e.g., "Administration")
 * 2. Clicking on it if found
 * 3. Logs success or failure based on availability
 *This function navigates through the Administration sub menu by:
 * 1. Reading all available sub menu items under the selected main menu
 * 2. Finding the given sub menu item (e.g., "Customers")
 * 3. Clicking on it if found
 * 4. Logs success or failure based on availability
 * Parameters:
 * @param menu - Main menu name to be clicked (e.g., "Administration")
 * Example Usage:adminMenuAndSubMenus('Administration', 'Customers');
 * Main Menu → Click "Administration"
 */
   
   
    // Navigate to Administration → Customers → Open Create Customer form
    async adminMenuAndSubMenus(menu:string,sSubMenu:string){
         let found = false;

    // Wait for sidebar menu to be visible
      await this.page.locator(this.homePageMenuItems).first().waitFor();
     // await this.page.locator(this.homePageMenuItems).waitFor();
      const texts=await this.page.locator(this.homePageMenuItems).allTextContents();
      for (const item of texts) {
      if (item === menu) {
        try {
            await this.page.locator(`//span[text()='${item.trim()}']`).click();
            console.log(`Successfully clicked ${item}`);
            found = true;
            break;
        } catch (error) {
            console.log(`Error while clicking ${item}:`, error);
        }
    }
}

if (!found) {
    console.log(`Not matched MenuItems`);
}
        
        
    /*This function navigates through the Administration sub menu by:
      1. Reading all available sub menu items under the selected main menu
      2. Finding the given sub menu item (e.g., "Customers")
      3. Clicking on it if found
      4. Logs success or failure based on availability
     Parameters:
      @param sSubMenu - Sub menu name to be clicked (e.g., "Customers")
      Example Usage:
     *await adminPage.adminMenuAndSubMenus('Administration', 'Customers');
      Sub Menu → Click "Customers"
    */
 
     //Administration sub menu
     await this.page.locator(this.adminSubMenu).first().isVisible(); 
     // Get all menu texts as an array
     const text=await this.page.locator(this.adminSubMenu).allTextContents();
     // Loop through each menu item texts
     for(const items of text){
        console.log(items);
        // Check if current item matches the menu
         if (items === sSubMenu) {
           try {
            // Click the matched submenu
            await this.page.locator(`//span[text()='${items.trim()}']`).click();
            console.log(`Successfully clicked ${items}`);
            found = true;
            break;
        }  catch (error) {
            console.log(`Error while clicking ${items}:`, error);
        }
    }
}
        // After loop, if no match found
        if(!found){
               console.log(`Not matched SubMenuItems`);
        }
     } 

     /**
 * Function Name: createCustomerPage
 * Author: Lakshmi
 * Created Date: 2026-05-12
 * Description:This function creates a new customer in the system if the customer does not already exist.
 * It performs the following steps:-
 * 1. Searches for an existing customer using the given name
 * 2. Checks whether the customer already exists in the list
 * 3. If not found, clicks on the "Create Customer" button
 * 4. Enters customer details such as Name, Email, and Phone Number
 * 5. Submits the form to create the customer
 * 6. Logs success or shows message if customer already exists
 * Parameters:
 * @param Name - Customer name to be created/searched
 * @param Email - Customer email address
 * @param phno - Customer phone number
 * Example Usage:createCustomerPage("John Doe", "john@test.com", "9876543210");
 */
      //Enter Customer Detail
     async createCustomerPage(Name: string, Email: string, phno: string) {
      
       await this.page.locator(this.customerNameTableFirstRow).waitFor();
       await this.page.locator(this.searchBox).fill(Name);
       await this.page.waitForTimeout(globalThis.giSMALLWAIT);
       console.log(globalThis.giSMALLWAIT);
       //await expect(this.page.locator('customerNameTable').first()).toBeVisible();
       console.log(((await this.page.locator(`text=${Name}`).count())));
       if (!(await this.page.locator(`text=${Name}`).count())) {   
        await this.page.locator(this.createCustomerButton).click();
        await this.page.locator(this.customerName).fill(Name);
        await this.page.locator(this.email).fill(Email);
        await this.page.locator(this.phone).fill(phno);
        await this.page.locator(this.submitButton).click();
        console.log("Customer created Successfully");
    } else {
        console.log("Customer already exists");
    }
}
    //Verify CustomerName
     async verifyCustomerName(verifyName:string){
        await this.page.locator(this.searchBox).fill(verifyName);
        //if ((await this.page.locator(`text=${verifyName}`).isVisible())) {
          if ((await this.page.locator(`//span[text()="${verifyName}"]`).isVisible())) {
            console.log(`Customer "${verifyName}" is Present`);

         }
         else{
               console.log(`Customer "${verifyName}" is not Present`);
         }
        }

//Edit CustomerName
          async editCustomerName(Name:string,editCustomerName: string)
          {
              await this.page.locator(this.searchBox).clear();
              await this.page.locator(this.searchBox).fill(Name);
              await this.page.locator(this.editButton).click();
              await this.page.locator(this.customerName).clear();
              await this.page.locator(this.customerName).fill(editCustomerName);
              await this.page.locator(this.submitButton).click();
              await this.page.waitForTimeout(1000);
              await this.page.reload();
              console.log("Customer Updated Successfully");
          }
//Verify CustomerName
     async verifyEditCustomer(verifyEditCustomerName:string){
        await this.page.locator(this.searchBox).clear();
        await this.page.locator(this.searchBox).fill(verifyEditCustomerName);
        await this.page.locator(this.customerNameTableFirstRow).waitFor({ state: 'visible' });
        //if ((await this.page.locator(`text=${verifyEditCustomerName}`).isVisible())) {
        if ((await this.page.locator(`//span[text()="${verifyEditCustomerName}"]`).isVisible())) {
            console.log(`CustomerName "${verifyEditCustomerName}" Edited Successfully`);

         }
         else{
               console.log(`CustomerName "${verifyEditCustomerName}" is failed to edit`);
         }
        }

    //Delete CustomerName
    async deleteCustomerName(deleteCustomerName:string){
        
        await this.page.locator(this.searchBox).clear();
        await this.page.locator(this.searchBox).fill(deleteCustomerName);
        await this.page.locator(this.customerNameTableFirstRow).waitFor({ state: 'visible' });
        await this.page.locator(this.deleteButton).waitFor({ state: 'visible' });
        this.page.once('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept(); 
    });
        await this.page.locator(this.deleteButton).click();
        console.log("Customer Name Deleted Successfully");
       
    }


     

/**
 * Function Name: createCustomerFlow
 * Author: Lakshmi
 * Created Date: 2026-05-12
 * Description:This function combines complete Admin flow:-
 * 1. Navigates to Administration → Customers
 * 2. Searches or creates a new customer
 * Parameters:
 * @param menu - Main menu name (e.g., "Administration")
 * @param subMenu - Sub menu name (e.g., "Customers")
 * @param Name - Customer name
 * @param Email - Customer email
 * @param phno - Customer phone number
 * Example:createCustomerFlow("Administration",
 *   "Customers",
 *   "John",
 *   "john@test.com",
 *   "9876543210");
 */
    async createCustomerT(menu: string,subMenu: string,Name: string,Email: string,phno: string,verifyName:string) {
     //this.Name = Name;
    // Step 1: Navigate to Admin → Submenu
    await this.adminMenuAndSubMenus(menu, subMenu);

    // Step 2: Create/Search Customer
    await this.createCustomerPage(Name, Email, phno);
    
    //Verify Customer Name
    await this.verifyCustomerName(verifyName);

    //Edit CustomerName
    //await this.editCustomerName(editCustomerName);
}
async editCustomerT(Name:string,editCustomerName:string,verifyEditCustomerName:string){
    await this.editCustomerName(Name,editCustomerName);
    await this.verifyEditCustomer(verifyEditCustomerName);
    

}
async deleteCustomerT(deleteCustomerName:string){
    await this.deleteCustomerName(deleteCustomerName);
}
}
