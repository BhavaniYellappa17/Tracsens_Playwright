import { Page,expect } from "@playwright/test";
//import { AdminPage } from "./adminPage";

export class OutletPage{
        //adminPage: AdminPage;  
    constructor(public page:Page){
        //this.page = page;
        //this.adminPage = new AdminPage(this.page)
    }
    // Sidebar main menu items (Home, Administration,outletmanagment,product managemnet )
     homePageMenuItems='//a[contains(@class,"sidebar-link")]//span';

     // Submenu items under OutletManagement (Outlets)
     outletSubMenu='(//a/span[@class="lan-5"])[1]';

     //Outlet Management page header (used for validation)
     outletMngPage='//h1[text()="Outlet Management"]';

     //Search input field for outlet name
     searchByOutletNames='//input[@placeholder="Search by name, external id, or location..."]';

     //Created date filter dropdown
     filterDate='//select[@class="input-created-filter-type form-select"]';

     //All dropdown options under created date filter
     selectOptions='//select[@class="input-created-filter-type form-select"]/option';

     //Clear Filter
     clearFilter='(//button[@type="button"])[5]';

     //OutletName
     outletName='//a[@class="outlet-name-text mb-1"]';

     //AuditsLink
     audits='(//span[@class="tab-label"])[2]';

     //AuditId
     auditId='//div[@class="sc-dYwGCk knNOUg rdt_TableRow"]';

      //View Button
     viewButton='//button[@title="View Audit Details"]';
     
     //NextButton
     nextButton='//span[text()="Next"]';
     //Close Button
     closeButton='//button[@aria-label="Close"]';

     //Reset All Filters
     restFilter='//button[@class="audit-reset-btn btn btn-secondary"]';

    //Filter by Category
     filterByCategory='//select[@id="categorySelect"]';

     //Categories
     categories='//select[@id="categorySelect"]/option';

     //Number of Racks
     racks='//div[@class="rack-thumbnail-wrapper"]';

     //RackNumber
     rackNumber='//div[@class="audit-rack-thumbnail-label rack-name-text"]';
     //By Brand
     brand='(//a[@style="cursor: pointer;"])[1]';
     //By SKUs
     skus='(//a[@style="cursor: pointer;"])[2]';

     //All Brands
     allBrands='//div[@class="d-flex justify-content-between align-items-center brand-card-header audit-brand-card-header card-header"]';
     //All SKUs
     allSKUs='//div[@class="d-flex align-items-start w-100 sku-item-content"]';

     //Export PDF Button
     exportPdf='//button[text()="Export PDF"]';

     /**
 * Function Name: outletMenuAndSubMenu
 * Author: Lakshmi
 * Created Date: 2026-05-25
 * Description: This function navigates through the sidebar menu by:
 * 1. Finding the given main menu (e.g., "Outlet Management")
 * 2. Clicking on it if found
 * 3. Logs success or failure based on availability
 *
 * This function navigates through the Outlet Management sub menu by:
 * 1. Reading all available sub menu items under the selected main menu
 * 2. Finding the given sub menu item (e.g., "Outlets")
 * 3. Clicking on it if found
 * 4. Validates navigation to Outlet Management page
 *
 * This function also performs search and filter operations by:
 * 1. Entering outlet name in the search field
 * 2. Selecting the required filter from the dropdown (e.g., "Today", "All time")
 * 3. Logs success or failure based on filter availability
 *
 * Parameters:
 * @param menu - Main menu name to be clicked (e.g., "Outlet Management")
 * @param SubMenu - Sub menu name to be clicked (e.g., "Outlets")
 * @param searchOutletName - Outlet name to search (e.g., "Madhuloka liquor")
 * @param filter - Filter value to select (e.g., "Today")
 *
 * Example Usage:
 * outletMenuAndSubMenu('Outlet Management', 'Outlets', 'Madhuloka liquor', 'Today');
 *
 * Main Menu → Click "Outlet Management"
 * Sub Menu → Click "Outlets"
 * Search → Enter outlet name
 * Filter → Select "Today"
 */
    async outletMenuAndSubMenu(menu:string,subMenu:string,searchOutletName:string,filter:string){
        //await this.adminPage.adminMenuAndSubMenus(menu, subMenu);
         let found = false;

    // Wait for sidebar menu to be visible
      await this.page.locator(this.homePageMenuItems).first().waitFor();
     // Get all menu item texts
      const texts=await this.page.locator(this.homePageMenuItems).allTextContents();
      console.log(texts);
      // Loop through menu items and click matching menu
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
 // If menu not found
if (!found) {
    console.log(`Not matched MenuItems`);
}
        // Validate submenu presence
     await this.page.locator(this.outletSubMenu).first().isVisible(); 

     // Get all subMenu texts as an array(Outlets)
     const text=await this.page.locator(this.outletSubMenu).allTextContents();
     console.log(text);
     await this.page.locator(this.outletSubMenu).click();
     await this.page.locator(this.outletMngPage).isVisible();
     console.log("Successfully Navigates to Outlet Management Page");

     await this.page.locator(this.searchByOutletNames).fill(searchOutletName);
     await this.page.locator(this.filterDate).click();
     const options = await this.page.locator(this.selectOptions).allTextContents();
     console.log(options);
     let filterFound  = false;
     // Loop through dropdown options to find matching filter
     for (const item of options) {
             if (item.trim() === filter) {
              try {
                    await this.page.locator(this.filterDate).selectOption({ label: filter });
                    console.log(`Filter "${item}" was successfully selected from the dropdown.`);
                    filterFound = true;
                    break;
    
                } catch (error) 
                {
                    console.log(`Error while clicking ${item}:`, error);
    }
  }
}
// If filter not found
if (!filterFound) {
  console.log(`Filter "${filter}" not available in dropdown.`);
}

await this.page.locator(this.outletName).click();
}
}





