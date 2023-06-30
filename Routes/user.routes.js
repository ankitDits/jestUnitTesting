const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/index');

router.post('/', Controllers.UserControllers.createUser);
router.get('/', Controllers.UserControllers.getAllUsers);

module.exports = router;