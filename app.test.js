const app = require('./app');
const request = require('supertest');
const validations = require('./Validations/user.validation');
const { default: mongoose } = require('mongoose');
jest.setTimeout(30000);





// test cases
describe('testing user routes', () => {
    {

        test("while user send all required parameters it should save user in the database and return with 200 status code", async () => {
            let result = await request(app).post('/api/v1/user').send({
                name: 'ankit',
                email: 'ankitthakur35892@gmail.com',
                password: 'Apptunix@5494',
                phoneNo: '8219945681'
            })
            expect(result.status).toBe(200);
        })

        test("while user don't send all required parameters it should return with status code 400", async () => {
            let result = await request(app).post('/api/v1/user').send({
                email: 'ankitthakur35892@gmail.com',
                password: 'Apptunix@5494',
                phoneNo: '8219945681'
            })
            expect(result.status).toBe(400);
        })

        test("while user request all users", async () => {
            let result = await request(app).get('/api/v1/user')
            expect(result.status).toBe(200)
        })

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

// describe('mock database', () => {
//     let connection;
//     let db;

//     beforeAll(async () => {
//         connection = await mongoose.connect("mongodb://localhost/testDB", {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//         // db = await connection.db("mongodb://localhost/testDB");
//     })

//     // afterAll(async () => {
//     //     await connection.close();
//     // });

//     test("should insert user into the database", async () => {
//         // let users = db.collection('users')
//         // const mockUser = { _id: 'some-user-id', name: 'John' };
//         // await users.insertOne(mockUser);

//         // const insertedUser = await users.findOne({ _id: 'some-user-id' });
//         expect(0).toEqual(0);

//     })

// })