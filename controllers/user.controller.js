const Services = require('../Services/index');
const validations = require('../Validations/user.validation')


async function createUser(req, res, next) {
    try {
        // if (req.body.password) {
        //     let validatePassword = validations.passwordValidations(req.body.password);
        //     if (!validatePassword) {
        //         return res.status(400).send({
        //             data: [],
        //             message: "password validation failed"
        //         })
        //     }
        // } else {
        //     return res.status(400).send({
        //         data: [],
        //         message: "password is required"
        //     })
        // }
        let result = await Services.UserService.createUser(req.body);
        if (result._id) {
            return res.status(200).send({
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
        return errors
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


module.exports = {
    createUser,
    getAllUsers
}