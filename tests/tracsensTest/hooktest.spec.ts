import{test} from '@playwright/test';
import '../../hooks/hooks';
import { Home_Page } from '../../pages/Tracsens/homePage';
import { AdminPage } from '../../pages/Tracsens/adminPage';
import { OutletPage } from '../../pages/Tracsens/outletManagement';
import { AuditPage } from '../../pages/Tracsens/auditPage';
import { DashboardPage } from '../../pages/Tracsens/dashboardPage';
import { OutletInformationPage } from '../../pages/Tracsens/outletInformation';
import adminData from '../testdata/adminData.json';
import outletData from '../testdata/outletData.json';

//step:3
// Page Object Model instances declared at module level
// so they are accessible across all test blocks
let homepage:Home_Page;
let adminPage:AdminPage;
let outletPage:OutletPage;
let auditPage:AuditPage;
let dashboardPage:DashboardPage;
let outletinformationPage:OutletInformationPage;
// Fetch and display dashboard statistics from the home page
test('get dashboard statistics from home page', async ({page}) => {
    try{
        // Initialize Home Page object
     homepage=new Home_Page(page);
     // Fetch and print all dashboard statistics values
    await homepage.get_DashboardValues();
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

});

//step:4
// Create multiple customers using test data from adminData.json
test('create and edit customer',async({page})=>{
    try{
         // Initialize Admin Page object
    adminPage=new AdminPage(page);
    // Loop through each record in adminData and create a customer
    for (const data of adminData) {

        await adminPage.createCustomerT(data.menu,data.subMenu,data.name,data.email,data.phone,data.verifyName);
        await adminPage.editCustomerT(data.name,data.editCustomerName,data.verifyEditCustomerName);
        await adminPage.deleteCustomerT(data.deleteCustomerName);

    }}
    catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

});

//Step:5
test.only('OutletManagement',async({page})=>{
    try{
    // Initialize outlet and audit Page object
    outletPage=new OutletPage(page);
    
    // Loop through each record in outletData 
    //for (const data of outletData) {

        await outletPage.outletMenuAndSubMenu(outletData.menu,outletData.subMenu,outletData.searchOutletName,outletData.filter);
        

    //}
    }
    catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

});
test.only('outletInformation',async({page})=>{
    try{
    // Initialize outlet and audit Page object
     outletinformationPage=new OutletInformationPage(page);
    // Loop through each record in outletData 
    //for (const data of outletData) {

        
        await outletinformationPage.outletInformation(outletData.menu,outletData.subMenu,outletData.searchOutletName,outletData.filter);
        

    //}
    }
    catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

});
test.only('auditsPage',async({page})=>{
    try{
    // Initialize outlet and audit Page object
     auditPage=new AuditPage(page);
    // Loop through each record in outletData 
    //for (const data of outletData) {

        
        await auditPage.auditsPage(outletData.menu,outletData.subMenu,outletData.searchOutletName,outletData.filter,outletData.targetAuditId,outletData.selectCategory);
        
    //}
    }
    catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

});
test.only('getDashboardValues',async({page})=>{
    try{
    // Initialize outlet and audit Page object
     dashboardPage=new DashboardPage(page);
    // Loop through each record in outletData 
    //for (const data of outletData) {

        
        await dashboardPage.getDashboardValues(outletData.menu,outletData.subMenu,outletData.searchOutletName,outletData.filter,outletData.targetAuditId);
    //}
    }
    catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
}

});









