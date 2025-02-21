const { test, expect } = require('@playwright/test');

const baseURL = process.env.BASE_URL || 'http://localhost:8083';

test('Check add movie page', async ({ page }) => {
    console.log("Running tests against:", baseURL);  // Log the URL being used
    await page.goto(`${baseURL}/add-movie`); // Correct string interpolation
    const form = await page.$('form');
    expect(form).toBeTruthy();
});
