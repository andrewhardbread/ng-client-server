const express = require('express');
const router = express.Router();

const clients = require('./api/client.route');

router.use('/clients', clients);

module.exports = router;