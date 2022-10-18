const mongo = require('mongoose');


module.exports = async() => {
    await mongo.connect(process.env.MONGO_CONNECT_URL, ()=> {
        console.log('connected to the mongodb cluster');

    }, e=> console.log("Error", e))
}