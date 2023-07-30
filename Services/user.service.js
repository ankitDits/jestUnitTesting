const { Error } = require("mongoose");
const Models = require("../Models/export")

async function createUser(data) {
    try {
        let result = (await Models.UserModel.create(data)).toJSON();
        if (result) {
            delete result.__v
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

async function deleteAllUsers() {
    try {
        let result = await Models.UserModel.deleteMany();
        if (result) {
            return result;
        } else {
            throw new Error("failed to delete users")
        }
    } catch (error) {
        return error
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteAllUsers
}