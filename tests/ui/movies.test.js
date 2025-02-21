const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('http://localhost:8083/collection');
    const list = await page.$('ul');
    expect(list).toBeNull;
  });
  