const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/export');

router.post('/', Controllers.UserControllers.createUser);
router.get('/', Controllers.UserControllers.getAllUsers);
router.delete('/', Controllers.UserControllers.deleteAllUsers);

module.exports = router;