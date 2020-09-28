const userDB = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = (req,res)=>{
    if(!req.body.email || !req.body.newPassword){
        res.json({
            success: false,
            msg: "Details missing"
        })
    }else{
            var salt = bcrypt.genSaltSync(6);
            var hash = bcrypt.hashSync(req.body.newPassword, salt);
            userDB.findOneAndUpdate({email: req.body.email},{$set: {password: hash}}, (err, updated)=>{
                if(err){
                    res.json({
                        success: false,
                        msg: "Error in updating. Please try again after some time."
                    })
                }else{
                    res.json({
                        success: true,
                        msg: "Password updated."
                    })
                }
            })
        }
    }