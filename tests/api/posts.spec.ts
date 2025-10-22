import { test, expect } from '@playwright/test';
import { ApiClient } from '../../src/api/ApiClient';
import { PostBuilder } from '../../src/api/PostBuilder';


test.describe('JSONPlaceholder API tests', () => {
    test('GET /posts and POST/DELETE flows', async ({ request }) => {
    const api = new ApiClient(request);


    // 1. GET /posts
    const getRes = await api.getPosts();
    // 2. Переконатися, що статус відповіді 200
    expect(getRes.status()).toBe(200);


    // 3. Перевірити, що відповідь містить список постів і він не порожній
    const posts = await getRes.json();
    expect(Array.isArray(posts)).toBeTruthy();
    expect(posts.length).toBeGreaterThan(0);


    // 4. Переконатися, що перший пост має поля userId, id, title, body
    const first = posts[0];
    expect(first).toMatchObject({ userId: expect.any(Number), id: expect.any(Number), title: expect.any(String), body: expect.any(String) });


    // 5. POST /posts із новим постом (Builder)
    const builder = new PostBuilder()
    .setTitle('QA Automation Post')
    .setBody('This post was created during Playwright API testing')
    .setUserId(777);


    const payload = builder.build();


    const postRes = await api.createPost(payload);


    // 6. Переконатися, що статус відповіді 201
    expect(postRes.status()).toBe(201);


    // 7. Перевірити, що у відповіді збережені всі відправлені дані та з’явилося поле id
    const created = await postRes.json();
    expect(created).toMatchObject({ title: payload.title, body: payload.body, userId: payload.userId });
    expect(created.id).toBeDefined();


    // 8. DELETE /posts/1
    const delRes = await api.deletePost(1);


    // 9. Переконатися, що статус відповіді 200
    expect(delRes.status()).toBe(200);
    });
});