const express = require('express');
const mongoose = require('mongoose');
const v1Routes = require('./Routes/index')
let app = express();


app.use(express.json());
app.use('/api/v1', v1Routes);

mongoose.connect('mongodb://localhost/usersDB');
module.exports = app;
