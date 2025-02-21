const { test, expect } = require('@playwright/test');

const baseURL = process.env.BASE_URL || 'http://localhost:8083';

test('Check movies page', async ({ page }) => {
    console.log("Running tests against:", baseURL);  // Log the URL being used
    await page.goto(`${baseURL}/collection`);
    const list = await page.$('ul');
    expect(list).toBeNull;
  });
  