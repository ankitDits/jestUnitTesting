const tempUser = require('../common');
const Controllers = require('./export');
jest.setTimeout(30000);
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