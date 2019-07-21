const express = require('express');
const controller = require('../controller/tripsController');
const router = express.Router();

router.get('/', controller.getAllTrips);
module.exports = router;