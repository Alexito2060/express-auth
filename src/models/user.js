const mongo = require('mongoose');

const schema = new mongo.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    password: {
        type: String,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongo.model('User', schema);