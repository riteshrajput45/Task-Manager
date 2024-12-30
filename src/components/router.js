const express = require('express');
const controller = require('./controller');

const router = express.Router();

// Define the route and associate it with the controller
router.post('/save',controller.createuser);

// Export the router directly
module.exports = router;
