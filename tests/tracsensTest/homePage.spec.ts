import{test} from '@playwright/test';
import '../../hooks/hooks';
import { Home_Page } from '../../pages/Tracsens/homePage';


//Step:1
// Page Object Model instances declared at module level so they are accessible across all test blocks
let homepage:Home_Page;


//Step:1
// Fetch and display dashboard statistics from the home page
test.skip('get dashboard statistics from home page', async ({page}) => {
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





