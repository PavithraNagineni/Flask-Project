const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

// Import property routes
const propertyRoutes = require('./routes/properties');
app.use('/properties', propertyRoutes);

// Route to search properties
router.get('/search', (req, res) => {
    const { location } = req.query;
    const filteredProperties = properties.filter(property => property.location.toLowerCase() === location.toLowerCase());
    res.json(filteredProperties);
});

// Route to inquire about a specific property
router.get('/:id', (req, res) => {
    const property = properties.find(p => p.id === parseInt(req.params.id));
    if (property) {
        res.json(property);
    } else {
        res.status(404).send('Property not found');
    }
});

module.exports = router;