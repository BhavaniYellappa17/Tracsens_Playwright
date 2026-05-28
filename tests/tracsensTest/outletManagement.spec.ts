import{test} from '@playwright/test';
import '../../hooks/hooks';
import { OutletPage } from '../../pages/Tracsens/outletManagement';
import { OutletInformationPage } from '../../pages/Tracsens/outletInformation';
import { AuditPage } from '../../pages/Tracsens/auditPage';
import { DashboardPage } from '../../pages/Tracsens/dashboardPage';
import outletData from '../testdata/outletData.json';


// Page Object Model instances declared at module level
// so they are accessible across all test blocks
let outletPage:OutletPage;
let outletinformationPage:OutletInformationPage;
let auditPage:AuditPage;
let dashboardPage:DashboardPage;

//Step:1
test('outletMenuAndSubMenu',async({page})=>{
    try{
    // Initialize outlet object
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
//Step:2
test('outletInformation',async({page})=>{
    try{
    // Initialize outletinformation Page object
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

//Step:3
test('auditsPage',async({page})=>{
    try{
    // Initialize audit Page object
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

//Step:4
test('getDashboardValues',async({page})=>{
    try{
    // Initialize dashboard Page object
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









