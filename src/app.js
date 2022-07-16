const config = require('config.json');
const mongo = require('mongoose');
const express = require('express');

const app = express();

mongo.connect(config.mongo || process.env.MONGO, () => console.log(`${config.name} Connected to database`));
app.listen(config.port || process.env.PORT, () => console.log(`${config.name} Listening on port ${config.port}`));