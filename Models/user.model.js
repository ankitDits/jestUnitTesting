const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    _id: String,
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    phoneNo: {
        type: String,
    }
})

let User = mongoose.model('User', userSchema);
module.exports = User