const config = require('./config/config.js');
const logger = require('leekslazylogger')
const mongo = require('mongoose');
const express = require('express');
const body = require('body-parser');
const test = require('./routes/test.js');

log.init();

const app = express();

app.use(body.json());
app.use(body.urlencoded({ extended: true }));

app.use(config.route, test);

mongo.connect(config.mongo, () => logger.info(`Connected to database`));
app.listen(config.port, () => logger.info(`Listening on port ${config.port}`));
