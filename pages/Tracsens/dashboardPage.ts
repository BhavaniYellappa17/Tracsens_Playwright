import { Page,expect } from "@playwright/test";
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';

export class DashboardPage{
   
    constructor(public page:Page){
        
    }

    //**************Locators ****************/
    //AuditId
     auditId='//div[@class="sc-dYwGCk knNOUg rdt_TableRow"]';

     //NextButton
     nextButton='//span[text()="Next"]';

    //View Dashboard
    viewDashboard='//button[@title="View Performance Dashboard"]';

    //UniqueSkus
    uniqueSkusValue='//div[text()="Unique SKUs"]/preceding-sibling::div';

    //Detected SKUs
    detectedSkusValue='//div[text()="Detected SKUs"]/preceding-sibling::div';

    //UniqueSkus Diageo
    uniqueSkusDiageo='//div[text()="Unique SKUs"]/following-sibling::div[@class="audit-stat-sublabel"]';
    //u='//div[@class="audit-stat-sublabel"]';

    //Detected SKUs Diageo
    detectedSkusDiageo='//div[text()="Detected SKUs"]/following-sibling::div[@class="audit-stat-sublabel"]';

    //Retention Rate
    retentionRateValue='//div[text()="Retention Rate"]/preceding-sibling::div';

    //Missing Skus
    //missingSkus='//div[@class="audit-missing-sku-img-wrap"]';
    missingSkus='//div[@class="audit-missing-sku-img-wrap"]/following-sibling::div';

    //Export Button
    exportButton='//button[text()="Export PDF"]';

    //Close Button
    close='//button[@aria-label="Close"]';

    async getDashboardValues(targetAuditId:string){
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
        await row.locator(this.viewDashboard).click();

        const uniqueSkus=await this.page.locator(this.uniqueSkusValue).textContent();
        console.log("UniqueSkusValue:",uniqueSkus);

        
        const detectedSkus=await this.page.locator(this.detectedSkusValue).textContent();
        console.log("detectedSkusValue:",detectedSkus);
        
        //const uniqueSkus_Diageo = await this.page.locator('div:has-text("diageo")').nth(0).innerText();
        //console.log(uniqueSkus_Diageo);
        await this.page.waitForTimeout(5000);
        const uniqueSkus_Diageo = await this.page.locator(this.uniqueSkusDiageo).textContent();
        console.log("UniqueSkusDiageo:",uniqueSkus_Diageo);

        const detectedSkus_Diageo=await this.page.locator(this.detectedSkusDiageo).textContent();
        console.log("detectedSkusDiageo:",detectedSkus_Diageo);

        const retentionRate=await this.page.locator(this.retentionRateValue).textContent();
        console.log("retentionRateValue:",retentionRate);

        const missingSkus = await this.page.locator(this.missingSkus).allTextContents();
        // Check if missing skus are empty or not
        if (missingSkus.length === 0) {
        console.log("No Missing SKUs found");
        } 
        else 
      {
          console.log(`Missing SKUs found (${missingSkus.length}):`);
          console.log(missingSkus);
          
      }
        await this.page.locator(this.exportButton).click();
        await this.page.waitForTimeout(3000);

       // Search file with auditId in Downloads
       const downloadsFolder = path.join(os.homedir(), 'Downloads');
       const files = fs.readdirSync(downloadsFolder);
       const auditPdf = files.find((file: string)  => file.includes(targetAuditId) && file.endsWith('.pdf'));

      if (auditPdf) {
             
             const pdfPath = path.join(downloadsFolder, auditPdf);
             const fileStats = fs.statSync(pdfPath);
             const downloadedTime = fileStats.mtime;

             const hours = String(downloadedTime.getHours()).padStart(2, '0');
             const minutes = String(downloadedTime.getMinutes()).padStart(2, '0');
             const seconds = String(downloadedTime.getSeconds()).padStart(2, '0');
             console.log(`PDF found: ${auditPdf}:${hours}:${minutes}:${seconds}`);
            } 
            else 
                {
                   console.log(`PDF not found for: ${targetAuditId}`);
                }
        

        await this.page.locator(this.close).click();
        return;
    }
  }
}
    
    await this.page.locator(this.nextButton).click();
}
}