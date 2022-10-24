const BaseService = require('./base')
const wallet = require('../models/wallet')

class WalletService extends BaseService{

    constructor() {
        super(wallet); // CRUD operations on User model
    }
}
module.exports = new WalletService();