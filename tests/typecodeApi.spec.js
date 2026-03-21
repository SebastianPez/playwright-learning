const { test, expect } = require('@playwright/test');

// test('GET /posts should return 200', async ({ request }) => {
//     const response = await request.get('/posts/1');

//     expect(response.status()).toBe(200);

//     const body = await response.json();
//     expect(body.id).toBe(1);
// });

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