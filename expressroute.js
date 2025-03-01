const express = require('express');
const path = require('path');
const app = express();

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

// Import property routes
const propertyRoutes = require('./routes/properties');
app.use('/properties', propertyRoutes);