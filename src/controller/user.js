//AUTHENTICATION... etc

const userService = require("../services/user");
const errorController = require("./errorController");
const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPass = await bcrypt.hash(password, saltRounds);
  console.log(hashedPass);
  return hashedPass;
}
class User {
  async list(req, res) {
    let users;
    if (req.query) {
      users = await userService.list(req.query);
      return res.json(users);
    } else {
      users = await userService.list(req.body);
      return res.json(users);
    }
  }

  async create(req, res) {
    console.log("req.body is : ", req.body);
    const filter = req.body;

    try {
      if (filter._id && filter._id.match(/^[0-9a-fA-F]{24}$/)) {
        // Valid ObjectId, proceed with `findById` call.
        const userFilter = await userService.findOne({ filter });

        if (userFilter) {
          console.log("User already exists");
          return errorController(req, res, "User already exists");
        }
      }

      if (!filter.password) {
        console.log("Password cannot be empty");
        return errorController(req, res, "Password cannot be empty");
      }
      const hashedPassword = await hashPassword(filter.password);
      filter.password = hashedPassword;
      const user = await userService.create(filter); // Create user based on the request

      // Send the user data in the response
      return res.json(JSON.parse(JSON.stringify(user)));
    } catch (error) {
      console.error(error);

      if (error.code === 11000) {
        console.log("Duplicate error");
        return errorController(req, res, "Duplicate key error");
      }

      // Handle other errors
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async update(req, res) {
    console.log("req.body is: ", req.body);
    const user = await userService.update(req.params.id, req.body);

    return res.json(user);
  }
  async delete(req, res) {
    const user = await userService.delete(req.params.id);
    console.log("deleted user with id", req.params.id);
    res.statusMessage = `Deleted user with id: ${req.params.id}`;
    res.status(200).end();
  }
}

module.exports = new User();
