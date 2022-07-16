const config = require('../config.json');

exports.port = process.env.PORT || config.port;

exports.mongo = process.env.MONGO || config.mongo;

exports.route = process.env.ROUTE || config.route;

exports.accessToken = process.env.ACCESS_TOKEN || config.tokens.access;

exports.encryptToken = process.env.ENCRYPT_TOKEN || config.tokens.encrypt;