const request = require('supertest');
const app = require('./app');

describe('GET /api/health', () => {
    test('It should respond with a 200 status and correct JSON object', async () => {
        const response = await request(app).get('/api/health');

        // Assertions
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('UP');
        expect(response.body.message).toBe('API is running smoothly');
    });
});
