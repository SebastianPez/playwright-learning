//@ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headless: true
    }
});