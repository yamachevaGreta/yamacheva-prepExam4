const { test, expect } = require('@playwright/test');

const baseURL = process.env.BASE_URL || 'http://localhost:8083';

test('Check header', async ({ page }) => {
    console.log("Running tests against:", baseURL);  // Log the URL being used  
    await page.goto(baseURL);  // you can replace this URL with any page that includes the header
    const homeLink = await page.$('a[href="/"]');
    const text = await homeLink.textContent();
    expect(text).toBe('Home');
  });
  