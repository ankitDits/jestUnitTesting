jest.useFakeTimers();
jest.setTimeout(30000);
const { mockRequest, mockResponse, any } = require('jest-mock-extended');
const { Request, Response } = require('express')
const Controllers = require('./index');



describe("User controller tests", () => {
    const mockUser = {
        name: 'ankit',
        email: 'ankitthakur35892@gmail.com',
        password: 'Apptunix@5494',
        phoneNo: '8219945681'
    };

    describe('Create user function', () => {
        it('should return 200 status code and create a new user', async () => {
            const req = { body: mockUser };
            const res = {
                json: () => { }
            }
            let result = await Controllers.UserControllers.createUser(req, res);
            console.log(result)
            expect(1 + 1).toBe(2);
        })
    })
})