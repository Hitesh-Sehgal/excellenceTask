const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//set up a mongoose model.
module.exports = mongoose.model('User', new Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    password: {
        type: String
    }
}))