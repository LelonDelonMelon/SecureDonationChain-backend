//AUTHENTICATION... etc

const userService = require('../services/user');
const errorController = require('./errorController');



class User {

    async list(req, res) {
        let users
        if (req.query) {
            users = await userService.list(req.query);
            return res.json(users);

         }
         // if (req.body) {

        //     users = await userService.list(req.body);
        //     console.log("req is ", req.body)
        //     return res.json(users);
        // }
        else {
            users = await userService.list(req.body);
            return res.json(users);

        }

    }

    async create(req, res) {
        //console.log("req.body is : ",req.body);
        const filter = req.body;
       try {
        if (req.body._id.match(/^[0-9a-fA-F]{27}$/)) {
            // Yes, it's a valid ObjectId, proceed with `findById` call.
            if (await userService.findOne(filter)) {
                return errorController(req, res, "User already exists");
            }
        }
       
        if (filter.password === "") {
            return errorController(req, res, "Password cannot be empty")
        }

        const user = await userService.create(req.body); //gelen requeste göre user yarat
        return res.json(user);
       } catch (error) {
        if(error.code ===11000)
        {
            console.log("duplicate error");
        }
       }
    }
    async update(req, res) {

        console.log("req.body is: ", req.body)
        const user = await userService.update(req.params.id, req.body);


        return res.json(user);
    }
    async delete(req, res) {
        const user = await userService.delete(req.params.id);
        console.log("deleted user with id", req.params.id);
        res.statusMessage = `Deleted user with id: ${req.params.id}`
        res.status(200).end();
    }

}

module.exports = new User();