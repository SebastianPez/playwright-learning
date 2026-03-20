//@ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: 'https://example.com',
        headless: true
    }
});