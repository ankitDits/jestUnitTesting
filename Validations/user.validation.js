function passwordValidations(password) {
    let isNumberExist = /[0-9]/.test(password);
    let isCharacterExist = /[a-zA-Z]/.test(password);
    let isLength8 = password.length >= 8;
    let isSpecialCharacterExist = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
    let isValidPassword = isSpecialCharacterExist && isLength8 && isCharacterExist && isNumberExist;
    if (isValidPassword)
        return true;
    else
        return false;
}

module.exports = {
    passwordValidations
}