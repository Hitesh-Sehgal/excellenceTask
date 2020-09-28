const userDB = require('../models/users');
const bcrypt = require('bcryptjs');

module.exports = (req, res) => {
    if(req.body.firstname && req.body.lastname && req.body.email && req.body.password){
        userDB.findOne({email: req.body.email}, (err, data) => {
            if(data){
                return res.json({
                    success: false,
                    msg: "User already exist!"
                })
            }
            else{
                var salt = bcrypt.genSaltSync(6);
                var hash = bcrypt.hashSync(req.body.password, salt);

                let newUser = new userDB({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: hash
                })

                newUser.save( (err, data) => {
                    if(err){
                        console.log(err)
                        res.json({
                            success: false,
                            msg: "Enter the details properly!",
                            err
                        })
                    } else{
                        res.json({
                            success: true,
                            msg: "New user created!",
                            data: data
                        })
                    }
                })
            }
        })  
    }
    else{
        res.json({
            success: false,
            msg: "Please fill all the details!"
        })
    }
}