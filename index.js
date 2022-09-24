const express = require('express');
const app = express();
require('./models/dbConfig');
const authorsRoutes = require('./routes/authorsController');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

// to allow access to users
app.use(cors());

app.use('/authors', authorsRoutes);

app.listen(5500, () => console.log('Server started: 5500'));
