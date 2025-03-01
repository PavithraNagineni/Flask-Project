const express = require('express');
const app = express();
const path = require('path');
const propertyRoutes = require('./routes/properties');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');

// Use property routes
app.use('/properties', propertyRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});