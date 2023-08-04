const { app, server } = require('./app');
const supertest = require('supertest');
const validations = require('./Validations/user.validation');
const { default: mongoose } = require('mongoose');
jest.setTimeout(30000);
const { connectDB, disconnectDB } = require('./database');
const request = supertest(app);
const Controllers = require('./Controllers/export')
const tempUser = require('./common')



//*****************API TESTING*****************//
describe('API test', () => {

    beforeAll(async () => {
        await connectDB();
    })

    afterAll(async () => {
        await disconnectDB();
        // server.close();
    });

    //*******It should create new user and return status as 201*********/
    it('POST /api/v1/user response status should be 201', async () => {
        const res = await request.post('/api/v1/user').send(tempUser);
        expect(res.status).toBe(201);
    });

    //*******It should delete all the users in the db*********/
    it('DELETE /api/v1/user response status should be 204', async () => {
        const res = await request.delete('/api/v1/user');
        expect(res.status).toBe(204)
    })

    //*******It should create new user and return response data as newely created user*********/
    it('POST /api/v1/user response data should be newly created user', async () => {
        const res = await request.post('/api/v1/user').send(tempUser);
        expect(res.body.data).toStrictEqual(tempUser);
    });

    //*******It should get all users and return status as 200*********/
    it('GET /api/v1/user', async () => {
        const res = await request.get("/api/v1/user")
        expect(res.status).toBe(200)
    })


});