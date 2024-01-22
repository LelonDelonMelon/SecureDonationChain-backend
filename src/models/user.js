//database'e kaydedilecek olan verilerin fieldları
const mongo = require('mongoose')
//database e entry ekleme timestample beraber

const userSchema = new mongo.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    isLoggedIn:{
        type: Boolean,
        default: false
    }
},{timestamps:true});

module.exports = mongo.model('User', userSchema);