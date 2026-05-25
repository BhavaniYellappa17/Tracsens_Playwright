import { Page,expect } from "@playwright/test";

export class OutletPage{
   
    constructor(public page:Page){
        
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
     //By Brand
     brand='(//a[@style="cursor: pointer;"])[1]';
     //By SKUs
     skus='(//a[@style="cursor: pointer;"])[2]';

     //All Brands
     allBrands='//div[@class="d-flex justify-content-between align-items-center brand-card-header audit-brand-card-header card-header"]';
     //All SKUs
     allSKUs='//div[@class="d-flex align-items-start w-100 sku-item-content"]';

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
    async outletMenuAndSubMenu(menu:string,SubMenu:string,searchOutletName:string,filter:string){
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


/**
 * Function Name: auditsPage
 * Author: Lakshmi
 * Created Date: 2026-05-25
 * Description: This function searches for a specific Audit ID across all pages by:
 * 1. Navigating to the Audits section
 * 2. Looping through all rows on the current page to find the matching Audit ID
 * 3. Scrolling to the matched row and clicking the View button
 * 4. If not found on current page, clicks Next button and repeats the search
 *
 * After clicking View button, this function performs filter operations by:
 * 1. Waiting for the filter modal to open
 * 2. Clicking Reset All Filters button
 * 3. Opening the Filter by Category dropdown
 * 4. Matching the given category from the dropdown options
 * 5. Selecting the matched category
 * 6. Closing the modal after selection
 *
 * Parameters:
 * @param targetAuditId  - The Audit ID to search for (e.g., 'AUD-1756202792595-df67f19d')
 * @param selectCategory - The category name to select from dropdown (e.g., 'PREMIUM_WHISKY')
 *
 * Example Usage:
 * auditsPage('AUD-1756202792595-df67f19d', 'PREMIUM_WHISKY');
 *
 * Audits Page  → Search for Audit ID across pages
 * View Button  → Click when Audit ID matches
 * Reset Filter → Click Reset All Filters
 * Category     → Select matching category from dropdown
 * Close Modal  → Close the filter modal
 */
async auditsPage(targetAuditId: string, selectCategory: string) {
//Navigate to the Audits section
  await this.page.locator(this.audits).click();
//Loop through all pages to find the target Audit ID
  while (true) {
    // Get all rows on the current page
    const rows = this.page.locator(this.auditId);
    const rowCount = await rows.count();
   //Iterate through each row to match the Audit ID
    for (let i = 0; i < rowCount; i++) {
      const row = rows.nth(i);
      const text = await row.textContent();
     //If the Audit ID matches, scroll to it and click View button
      if (text?.includes(targetAuditId)) {
        await row.scrollIntoViewIfNeeded();
        await row.locator(this.viewButton).click();
        console.log(`Clicked View for: ${targetAuditId}`);
        await this.page.waitForTimeout(1000);
        
        //Reset all filters inside the modal
        await this.page.locator(this.restFilter).click();
        await this.page.locator(this.filterByCategory).click();
       //Get all available category options from the dropdown
        const allCategories = await this.page.locator(this.categories).allTextContents();
        console.log(allCategories);
       //Check if the requested category exists and select it
        let categoryFound = false;
        for (const item of allCategories) {
          if (item.trim() === selectCategory) {
            try {
              await this.page.locator(this.filterByCategory).selectOption({ label: selectCategory });
              //await this.page.locator('//select[@id="categorySelect"]').selectOption({ label: selectCategory });
              console.log(`Category "${item}" was successfully selected.`);
              categoryFound = true;
              break;
            } catch (error) {
              console.log(`Error while clicking ${item}:`, error);
            }
          }
        }

        if (!categoryFound) {
          console.log(`Category "${selectCategory}" not available in dropdown.`);
        }
        const nOfRacks=await this.page.locator(this.racks);
        const rackcount=await nOfRacks.count();
        console.log(rackcount);
        for(let i=0;i<=rackcount;i++){
            await nOfRacks.nth(i).click();
            await this.page.locator(this.brand).click();
            const getBrands=await this.page.locator(this.allBrands).allTextContents();
            console.log(getBrands);
            await this.page.locator(this.skus).click();
            const getSkus=await this.page.locator(this.allSKUs).allTextContents();
            console.log(getSkus);
        }

         await this.page.locator(this.closeButton).click();
        return;
      }
    }
     //If Audit ID not found on current page, navigate to next page
    await this.page.locator(this.nextButton).click();
    await this.page.waitForTimeout(1000);
  }

}

async auditManagementT(menu:string,SubMenu:string,searchOutletName:string,filter:string,targetAuditId: string,selectCategory:string){
     await this.outletMenuAndSubMenu(menu,SubMenu,searchOutletName,filter);
     await this.auditsPage(targetAuditId,selectCategory);
}
}





