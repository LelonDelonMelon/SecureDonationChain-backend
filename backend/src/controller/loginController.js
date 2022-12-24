const userService = require('../services/user.js')

class Login {
    async login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        if (email && password) {
            console.log(email, password)
            const user = await userService.findOne(req.body, res);
            console.log("user is", user.id)
            userService.update(user._id, {
                "isLoggedIn": true,
            });
            console.log(user.isLoggedIn);
            res.json({
                "message": "Successfully logged in",
            })
        }
    }

    async isLoggedIn(req, res) { }


    async logOut(req, res) {
        const id = req.body.id;
        const user = await userService.findOne(req.body, res);
        console.log("logging out", id)
        userService.update(id, {
            "isLoggedIn": false,
        });
        console.log("logged out", id)
        res.json({
            "message": "Successfully logged out."
        })
    }
}

module.exports = new Login();