const BaseService = require('./base')
const user = require('../models/user')

class UserService extends BaseService{

    constructor() {
        super(user); // CRUD operations on User model
    }
}
module.exports = new UserService();