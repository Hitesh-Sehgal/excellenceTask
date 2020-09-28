const express = require('express');
const app = express.Router();


const createUser = require('./createUser');
const editUser = require('./editUser');
const listUsers = require('./listUsers');
const deleteUser = require('./deleteUser');
const changePassword = require('./changePassword');

app.post('/createUser', createUser);
app.post('/editUser', editUser);
app.get('/listUsers', listUsers);
app.delete('/deleteUser/:id', deleteUser);
app.post('/changePassword', changePassword);

// app.use((err, req, res, next) => {
//     if(err){
//         res.json({
//             success: false,
//             msg: err
//         })       
//     }
// })

module.exports = app;