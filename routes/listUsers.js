const userDB = require('../models/users');

module.exports = (req, res) => {
        userDB.find({}, (err, data) => {
            if(err){
                return res.json({
                    success: false,
                    err: err
                })
            }
            else{
                res.json({
                    success: true,
                    data: data
                })
            }
        })
}