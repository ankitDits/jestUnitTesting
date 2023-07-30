const { app, server } = require('./app');
const supertest = require('supertest');
const validations = require('./Validations/user.validation');
const { default: mongoose } = require('mongoose');
jest.setTimeout(30000);
const { connectDB, disconnectDB } = require('./database');
const request = supertest(app);
const Controllers = require('./controllers/export')
let tempUser = {
    _id: "1",
    phoneNo: "9876543210",
    name: 'Test',
    email: 'test@gmail.com',
    password: "test@123",
}

//***************TESTING VALIDATORS***************/
describe('Validators', () => {
    {
        test("while user send password as required it should return true", () => {
            let password = "Apptunix@5494";
            let isValidatePassword = validations.passwordValidations(password);
            expect(isValidatePassword).toBe(true);
        })

        test("while user send password without any number it should return false", () => {
            let password = "Apptunix@";
            let isValidatePassword = validations.passwordValidations(password);
            expect(isValidatePassword).toBe(false);
        })

        test("while user send password without any character it should return false", () => {
            let password = "@5494";
            let isValidatePassword = validations.passwordValidations(password);
            expect(isValidatePassword).toBe(false);
        })

        test("while user send password without any special character it should return false", () => {
            let password = "Apptunix5494";
            let isValidatePassword = validations.passwordValidations(password);
            expect(isValidatePassword).toBe(false);
        })

        test("while user send password with length less than 8 it should return false", () => {
            let password = "App";
            let isValidatePassword = validations.passwordValidations(password);
            expect(isValidatePassword).toBe(false);
        })
    }
})



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


})

//*****************CONTROLLER TESTING*****************//
describe('Controller', () => {
    let req;
    let res;
    let next;

    beforeEach(() => {
        res = { status: jest.fn().mockReturnThis(), send: jest.fn().mockReturnThis(tempUser) };
        next = jest.fn();
    })
    afterEach(() => {
        jest.resetAllMocks();
    });

    //*******It should create new user res.status function should be called with 201*********/
    it("should return created object", async () => {
        req = { body: tempUser }
        let response = await Controllers.UserControllers.createUser(req, res, next)
        expect(response.status).toBeCalledWith(201)
    })

})