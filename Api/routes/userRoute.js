const express = require('express');
const controller = require('../controller/userController');
const router = express.Router();

router.post('/auth/signup', controller.signUp);
module.exports = router;