const ClientService = require('../services/client.service');

_this = this;

exports.getClients = async function (req, res, next) {
    const page = req.query.page || 1;
    const limit = req.query.limit || 100;

    try {

        const clients = await ClientService.getClients({}, page, limit);

        return res.status(200).json({
            status: 200,
            data: clients
        });

    } catch (e) {
        return res.status(400).json({
           status: 400,
           message: e.message
        });
    }
};

exports.addClient = async function (req, res, next) {
    let client = {
        general: { ...req.body.general },
        job: { ...req.body.job },
        contact: { ...req.body.contact },
        address: { ...req.body.address }
    };

    try {
        let addedClient = await ClientService.addClient(client);

        return res.status(201).json({
          status: 201,
          data: addedClient
        });

    } catch (e) {

        return res.status(400).json({
           status: 400,
           message: e.message
        });

    }
};

exports.updateClient = async function (req, res, next) {
    if (!req.body._id) {

        return res.status(400).json({
           status: 400,
           message: 'id is required!'
        });

    }

    const body = req.body;
    const id = body._id;

    console.log(req.body);

    let client = {
        id,
        general: {
            firstName: body.general.firstName || null,
            lastName: body.general.lastName || null,
            avatar: body.general.avatar || null
        },
        job: {
            company: body.job.company || null,
            title: body.job.title || null
        },
        contact: {
            email: body.contact.email || null,
            phone: body.contact.phone || null
        },
        address: {
            street: body.contact.street || null,
            city: body.contact.city || null,
            zipCode: body.contact.zipCode || null,
            country: body.contact.country || null
        }
    };

    try {

        const updatedClient = await ClientService.updateClient(client);

        return res.status(200).json({
            status: 200,
            data: updatedClient
        });

    } catch (e) {

        return res.status(400).json({
            status: 400,
            message: e.message
        });

    }
};

exports.deleteClient = async function (req, res, next) {

    const id = req.params.id;

    try {
        const deletedClient = await ClientService.deleteClient(id);
        return res.status(204).json({ status: 204,  data: deletedClient });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }

};