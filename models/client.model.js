const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ClientSchema = new mongoose.Schema({
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

ClientSchema.plugin(mongoosePaginate);

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;