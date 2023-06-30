const Models = require("../Models/index")

async function createUser(data) {
    try {
        let result = (await Models.UserModel.create(data)).toJSON();
        if (result) {
            return result;
        } else {
            return
        }
    } catch (error) {
        return error
    }
}
async function getAllUsers(data) {
    try {
        let result = await Models.UserModel.find();
        if (result) {
            return result;
        } else {
            return
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    getAllUsers
}