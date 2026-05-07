import request from 'supertest';
import app from '../index.js';

describe('tasks', () => {
  it('requires authentication', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(401);
  });

  it('rejects an invalid token', async () => {
    const res = await request(app).get('/api/tasks').set('Authorization', 'Bearer nope');
    expect(res.status).toBe(401);
  });
});
