const mongo  = require('./mongoConnection');
const app = require('./app')

module.exports = () => {
    app();
    mongo()
}