//AUTHENTICATION... etc

const userService = require('../services/user');
const user = require('../models/user');



class User{
    async list(req, res) {
        const users = await userService.list();
        return res.json(users);
    }

    async create(req, res) {
        //console.log("req.body is : ",req.body);
        const user = await userService.create(req.body); //gelen requeste göre user yarat
        return res.json(user);
    }
    async update(req ,res) {
        
        console.log("req.body is: ",req.body)
        const user = await userService.update(req.params.id, req.body);
        
        
        return res.json(user);
    }
    async delete (req,res) {
        const user = await userService.delete(req.params.id);
        res.json(user);
    }
}

module.exports = new User();