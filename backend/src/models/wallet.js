//database'e kaydedilecek olan verilerin fieldları
const mongo = require('mongoose')
//database e entry ekleme timestample beraber

const walletSchema = new mongo.Schema({
    walletAddress : String
},{timeStamps:true});

module.exports = mongo.model('Wallet', walletSchema);