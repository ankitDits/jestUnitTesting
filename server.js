const express = require('express');
const mongoose = require('mongoose');
const v1Routes = require('./Routes/index')
let app = express();


app.use(express.json());
app.use('/api/v1', v1Routes);

mongoose.connect('mongodb://localhost/testDB')
  .then(() => {
    console.log('Connected to mongodb')
  })
  .catch(error => {
    console.log(error);
  })

app.listen(3000, () => {
  console.log("listening on port: 3000");
});