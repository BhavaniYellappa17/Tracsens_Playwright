
import { test, expect, chromium } from '@playwright/test';

test('open Tracsens website', async () => {

  // Launch browser with UI visible
  const browser = await chromium.launch({
    headless: false
  });

  const page = await browser.newPage();

  // Open URL
  await page.goto('https://prod.tracsens.com/login');

  // Print title
  console.log(await page.title());

  // Validation
  await expect(page).toHaveTitle(/Tracsens/);

  //await browser.close();
   //await page.pause();
});