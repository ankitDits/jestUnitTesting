let userRoutes = require('./user.routes');
let express = require('express');
let router = express.Router();

router.use('/user', userRoutes);


module.exports = router;