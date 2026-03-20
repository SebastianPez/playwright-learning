const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/formPage');

test('should submit form successfully', async ({ page }) => {
    const form = new FormPage(page);

    await form.goto();
    await form.fillForm('Spez Test', 'test@example.com');
    await form.submit();

    await expect(page.locator('#output')).toContainText('Spez Test');
});