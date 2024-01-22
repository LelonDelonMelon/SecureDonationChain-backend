const BaseService = require("./base");
const user = require("../models/user");
const bcrypt = require("bcrypt");
class UserService extends BaseService {
  constructor() {
    super(user); // CRUD operations on User model
  }
  async authenticate(email, pass) {
    try {
      const existingUser = await this.findOne({ email: email }); // Use email to find the user
      if (!existingUser) {
        console.log("User not found");
        return null;
      }
      const passMatch = await bcrypt.compare(pass, existingUser.password);
      if (passMatch) {
        console.log("Authenticating user");
        return existingUser;
      } else {
        return null;
      }
    } catch (e) {
      console.error("Error in authenticate:", e);
      throw e;
    }
  }
}
module.exports = new UserService();
