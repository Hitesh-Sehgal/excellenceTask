const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('./config');
const PORT =  7500;
const routes = require('./routes/routes');
const cors = require('cors');
app.use(cors());

mongoose.connect(config.database, {useNewUrlParser: true},err => {
    if(err){
        throw console.error("Database not connected", err);
        
    }else{
        console.log("Database connected")
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', routes)

app.listen(PORT);
console.log("Server Started")