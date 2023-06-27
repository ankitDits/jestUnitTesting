const Services = require('../Services/index');

async function createUser(req, res) {
    let result = await Services.UserService.createUser(req.body);
    // if (result) {
        return res.json({
            data: result,
            message: "success",
            statusCode: 200
        })
    // }
}


module.exports = {
    createUser
}