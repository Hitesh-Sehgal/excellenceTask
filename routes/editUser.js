const userDb = require('../models/users')

module.exports = (req, res) => {
    userDb.update({"_id": req.body._id}, {$set: {"firstname": req.body.firstname, "lastname": req.body.lastname}}, (err, data)=>{
        if(err){
            res.json({
                success: false,
                error: err
            })
        } else{
            res.json({
                success: true,
                msg:"Data Updated.",
            })
        }
    })
}