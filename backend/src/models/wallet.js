//database'e kaydedilecek olan verilerin fieldları
const mongo = require('mongoose')
//database e entry ekleme timestample beraber

const walletSchema = new mongo.Schema({
    walletAddress: {
        type: String,
        unique: true
    }
},{timestamps:true});

module.exports = mongo.model('Wallet', walletSchema);