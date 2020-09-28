const userDB = require('../models/users');

module.exports = (req, res) => {
    userDB.findByIdAndRemove(req.params.id)
    .then(userDB => {
        if(!userDB) {
            res.json({
                success: false,
                message: "User not found with id " + req.params.id
            });
        }
        res.json({
            success: true,
            message: "User deleted successfully!"
        });
    })
    .catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.id
        });
    });
};