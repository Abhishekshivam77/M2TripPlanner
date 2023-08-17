const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        enum: Object.values['India', 'Africa', 'America', 'Europe', 'Australia'],
        required: true
    },
    travelers: {
        type: Number,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
});

const Travelmodel = mongoose.model('Travel', travelSchema);

module.exports = { Travelmodel };