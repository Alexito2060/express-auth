const config = require('./config/config.js');
const log = require('leekslazylogger')
const mongo = require('mongoose');
const express = require('express');
const body = require('body-parser');
const test = require('./routes/test.js');

log.init(config.name)

const app = express();

app.use(body.json());
app.use(body.urlencoded({ extended: true }));

app.use(config.route, test);

mongo.connect(config.mongo, () => console.log(`${config.name} Connected to database`));
app.listen(config.port, () => console.log(`${config.name} Listening on port ${config.port}`));
