//AUTHENTICATION... etc

const userService = require('../services/user');
const user = require('../models/user');



class User{
    async list(req, res) {
        const users = await userService.list();
        return res.json(users);
    }

    async create(req, res) {
      
        const user = await userService.create(req.body); //gelen requeste göre user yarat

        return res.json(user);
    }
}

module.exports = new User();