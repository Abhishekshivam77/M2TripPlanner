const express = require('express');
const Triprouter = express.Router();
const { Travelmodel } = require('../models/trip.model');

Triprouter.get('/', (req, res) => {
    res.send('Welcome to triproute')
})

// Create a new travel record
Triprouter.post('/addTrip', async(req, res) => {
    try {
        const travel = new Travelmodel(req.body);
        await travel.save();
        res.status(201).json({ message: 'Data saved successfully' });
    } catch (error) {
        res.json(error.message)
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Retrieve all travel records
Triprouter.get('/retrieve', async(req, res) => {
    try {
        const data = await Travelmodel.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Delete a travel record
Triprouter.delete('/delete/:id', async(req, res) => {
    try {
        await Travelmodel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Filter data by destination
Triprouter.get('/filter/:destination', async(req, res) => {
    const destination = req.params.destination;
    try {
        const filteredData = await Travelmodel.find({ destination });
        res.status(200).json(filteredData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

// Sort data by number of travelers or budget
Triprouter.get('/sort/:field', async(req, res) => {
    const field = req.params.field;
    try {
        let sortedData;
        if (field === 'travelers') {
            sortedData = await Travelmodel.find().sort({ travelers: 1 });
        } else if (field === 'budget') {
            sortedData = await Travelmodel.find().sort({ budget: 1 });
        }
        res.status(200).json(sortedData);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = { Triprouter };