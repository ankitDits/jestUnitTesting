const Models = require("../Models/index")

async function createUser(data) {
    let result = await Models.UserModel.create(data);
    if (result) {
        return result;
    }
}

module.exports = {
    createUser
}