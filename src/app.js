const express = require('express');

//Instancia de Express
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

//Rutas
app.use('/api', require('./routes/api'));


module.exports = app;
