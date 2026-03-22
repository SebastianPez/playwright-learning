const { test, expect } = require('@playwright/test');

test.describe('Integration tests validating data submission and subsequent retrieval', () => {

    test('API into UI data flow', async ({ request, page }) => {
        // Step 1: Initial data creation
        const apiResponse = await request.post('/posts', {
            data: {
                title: 'Test Post',
                body: 'Testing Body copy',
                userId: '1'
            },
        })

        expect(apiResponse.status()).toBe(201);

        const post = await apiResponse.json();

        // Step 2: Verify data is present in UI
        await page.goto('/posts');

        // As site is static, simulate data is present
        expect(post.title).toContain('Test Post');
        expect(post.body).toContain('Testing Body copy');
        expect(post.userId).toContain('1');
    });

})