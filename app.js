const express = require('express');
const bodyParser = require('body-parser');
const {v4: uuiv4} = require('uuid');

const gameRoutes = require('./routes/videojuegos-routes');
const app = express();

app.use(bodyParser.json());

app.use('/api/games', gameRoutes);

app.listen(4000);