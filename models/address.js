const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//set up a mongoose model.
module.exports = mongoose.model('Address', new Schema({
    location: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number
    },
    user_id: {
        type: String,
        required: true
    }
}))