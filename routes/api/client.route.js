const express = require('express');
const router = express.Router();

const ClientController = require('../../controllers/client.controller');

router.get('/', ClientController.getClients);
router.post('/', ClientController.addClient);
router.put('/', ClientController.updateClient);
router.delete('/:id', ClientController.deleteClient);

module.exports = router;