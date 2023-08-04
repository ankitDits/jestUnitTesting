const Services = require('../Services/export');
const validations = require('../Validations/user.validation')


async function createUser(req, res, next) {
    try {
        let result = await Services.UserService.createUser(req.body);
        if (result) {
            return res.status(201).send({
                data: result,
                message: "success"
            })
        } else {
            return res.status(400).send({
                data: [],
                message: result.message
            })
        }
    } catch (error) {
        return error
    }
}
async function getAllUsers(req, res, next) {
    try {
        let result = await Services.UserService.getAllUsers();
        if (result) {
            return res.status(200).send({
                data: result,
                message: "Success"
            })
        } else {
            return res.status(400).send({
                data: [],
                message: result.message
            })
        }
    } catch (error) {
        return errors
    }
}
async function deleteAllUsers(req, res, next) {
    const result = await Services.UserService.deleteAllUsers();
    if (result.deletedCount > 0) {
        return res.status(204).send({
            data: result,
            message: "Success"
        })
    } else {
        return res.status(400).send({
            data: [],
            message: "failed to delete users"
        })
    }
}


module.exports = {
    createUser,
    getAllUsers,
    deleteAllUsers
}