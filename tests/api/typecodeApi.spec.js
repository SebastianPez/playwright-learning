const { test, expect } = require('@playwright/test');

test.describe('POSITIVE tests', () => {

    test('GET /posts should return 200', async ({ request }) => {
        const response = await request.get('/posts/1');

        expect(response.status()).toBe(200);

        const body = await response.json();
        expect(body.id).toBe(1);
    });

    test('GET /posts/1 response structure', async ({ request }) => {
        const response = await request.get('/posts/1');
        const body = await response.json();

        expect(await response.status()).toBe(200);

        expect(body).toHaveProperty('userId');
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('body');
    });

    test('GET /posts/1 data validation', async ({ request }) => {
        const response = await request.get('/posts/1');
        const body = await response.json();

        expect(typeof body.userId).toBe('number');
        expect(typeof body.title).toBe('string');
        expect(typeof body.id).toBe('number');
    });

    test('POST /posts should create a post', async ({ request }) => {
        const response = await request.post('/posts', {

            data: {
                title: 'foo',
                body: 'bar',
                userId: 1
            },
        })

    expect(response.status()).toBe(201);

    const body = await response.json();
    expect(body.title).toBe('foo');

    });
});

test.describe('NEGATIVE tests', () => {

    test('GET non-existent endpoint should return 404', async ({ request }) => {
        const response = await request.get('/imaginary-endpoint');
        
        expect(response.status()).toBe(404);
    });

    test('GET incorrect post number iteration should return 404', async ({ request }) => {
        const response = await request.get('/posts/two');

        expect(response.status()).toBe(404);
    });
})