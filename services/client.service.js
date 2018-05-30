const Client = require('../models/client.model');

_this = this;

exports.getClients = async function (query, page, limit) {
    let options = {
        page,
        limit
    };

    try {

        return await Client.paginate(query, options);

    } catch (e) {

        throw Error('Error while paginating clients');
    }
};

exports.addClient = async function (client) {
    let newClient = new Client({
        general: { ...client.general },
        job: { ...client.job },
        contact: { ...client.contact },
        address: { ...client.address }
    });

    try {

        return await newClient.save();

    } catch (e) {
        throw Error('Error while adding new client');
    }
};

exports.updateClient = async function (client) {
    const id = client.id;
    let oldClient = null;

    try {
        oldClient = await Client.findById(id);

    } catch (e) {
        throw Error('Error while finding client');
    }

    if (!oldClient) {
        return false;
    }

    console.log(oldClient);

    oldClient.general = { ...client.general };
    oldClient.job = { ...client.job };
    oldClient.contact = { ...client.contact };
    oldClient.address = { ...client.address };

    console.log(oldClient);

    try {
        return await oldClient.save();

    } catch (e) {
        throw Error('Error while updating client');
    }
};

exports.deleteClient = async function (id) {
    try {

        const deleted = await Client.remove({ _id: id });

        if (!deleted.result.n) {
            return false;
        }

        return deleted;

    } catch (e) {
        throw Error('Error while deleting client');
    }
};