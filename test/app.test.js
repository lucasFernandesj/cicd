const request = require('supertest');
const app = require('../index'); 


describe('GET /greet', () => {
  it('should return a personalized greeting', async () => {
    const res = await request(app).get('/greet?name=admin');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello, admin');

  });

  it('should return a bad request for missing name', async () => {
    const res = await request(app).get('/greet');
    expect(res.statusCode).toEqual(400);
    expect(res.text).toContain('Invalid input: Please provide a name.');
  });
});
