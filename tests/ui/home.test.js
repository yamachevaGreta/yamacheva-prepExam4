const { test, expect } = require('@playwright/test');

const baseURL = process.env.BASE_URL || 'http://localhost:8083';

test('Check home page', async ({ page }) => {
    console.log("Running tests against:", baseURL);  // Log the URL being used
    await page.goto(baseURL);
    const heading = await page.$('h1');
    const text = await heading.textContent();
    expect(text).toContain('Movies Collection');  
  });
  