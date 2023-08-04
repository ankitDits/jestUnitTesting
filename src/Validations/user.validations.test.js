const validations = require('./user.validation');

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