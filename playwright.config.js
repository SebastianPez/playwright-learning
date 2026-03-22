//@ts-check
require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        baseURL: process.env.BASE_URL,
        headless: true
    }
});