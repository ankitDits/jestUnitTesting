const express = require('express');
const mongoose = require('mongoose');
const v1Routes = require('./Routes/export');
let app = express();


app.use(express.json());
app.use('/api/v1', v1Routes);

const server = app.listen(3000, () => {
  // console.log("listening on port: 3000");
});

// mongoose.connect('mongodb://localhost/usersDB').then(() => {
//   //  console.log("connected to mongodb")
// });
module.exports = { app, server };
