const { test, expect } = require('@playwright/test');

const baseURL = process.env.BASE_URL || 'http://localhost:8083';

test('Check footer', async ({ page }) => {
    console.log("Running tests against:", baseURL);  // Log the URL being used
    await page.goto(baseURL);  
    const footer = await page.$('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps exam preparation');
  });
  