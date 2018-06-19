const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    id: String,
    general: {
        firstName: String,
        lastName: String,
        avatar: String
    },
    job: {
        company: String,
        title: String
    },
    contact: {
        email: String,
        phone: String
    },
    address: {
        street: String,
        city: String,
        zipCode: String,
        country: String
    }
});

ClientSchema.index(
    { '$**': 'text' },
    { name: 'string' }
);

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;