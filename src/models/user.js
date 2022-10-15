//database'e kaydedilecek olan verilerin fieldları
const mongo = require('mongoose')
const Schema = require('mongoose').Schema();
//database e entry ekleme timestample beraber

const userScheme = new mongo.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    }
},{timeStamp: true});

module.exports = mongo.model('User', userScheme);