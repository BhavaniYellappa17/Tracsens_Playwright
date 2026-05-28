import { Page,expect } from "@playwright/test";

export class Home_Page{
    constructor(public page:Page){

    }
    //****************locators***************
    // Sidebar menu items
    homePageMenuItems='//a[contains(@class,"sidebar-link")]//span';
    // Dashboard metrics
    user='//span[text()="Users"]/following::h3[1]';
    products='(//span[text()="Products"]/following::h3[1])[2]';
    categories='(//span[text()="Categories"]/following::h3[1])[2]';
    outlets='(//span[text()="Outlets"]/following::h3[1])[2]';
    // SKU legend values (chart data)
    skus='//span[@class="apexcharts-legend-text"]';

    /**
     * Function Name: printDashboardValues
     * Author: Lakshmi
     * Created Date: 2026-05-08
     * Description:This function performs the following actions:-
     * 1. Waits for dashboard menu items to load
     * 2. Prints all sidebar menu items
     * 3. Fetches and prints dashboard statistics:-
     *    - Total Users
     *    - Total Products
     *    - Total Categories
     *    - Total Outlets
     * 4. Fetches and prints all SKU values from chart legend
     *
     * Example:print_DashboardValues();
     */

    async get_DashboardValues()
    {
        // Wait for sidebar menu items to be visible
        await this.page.waitForSelector(this.homePageMenuItems);
        // Fetch and print all menu items
        const lsmenuitems=await this .page.locator(this.homePageMenuItems).allTextContents();
        console.log(lsmenuitems);
        // Fetch and print dashboard values
        const totaluser=await this.page.locator(this.user).textContent();
        console.log("Total uesrs",totaluser);
        const totalproduct=await this.page.locator(this.products).textContent();
        console.log("TotalProducts",totalproduct);
        const totalcategories=await this.page.locator(this.categories).textContent();
        console.log("TotalCategories",totalcategories);
        const totaloutlets=await this.page.locator(this.outlets).textContent();
        console.log("TotalOutlets",totaloutlets);
       
        // Fetch and print SKU values
         (await this.page.waitForSelector(this.skus)).isVisible();
         const totalskus=await this.page.locator(this.skus).allTextContents();
         console.log(totalskus);

}
}
