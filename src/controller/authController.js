const userService = require("../services/user.js");

class Login {
  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    try {
      // Assuming userService.authenticate is a function to verify user credentials
      const user = await userService.authenticate(email, password);
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Set user information in the session upon successful login
      req.session.user = {
        id: user._id,
        email: user.email,
      };

      // Update user's login status in the database
      await userService.update(user._id, { isLoggedIn: true });

      res.json({
        message: "Successfully logged in",
        user: req.session.user,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async isLoggedIn(req, res) {
    // Check if there's a user in the session
    const loggedInUser = req.session.user;

    if (loggedInUser) {
      // Additional logic to check the user's login status in the database if needed
      const user = await userService.findOne(
        { email: loggedInUser.email },
        res
      );
      return res.json(user.isLoggedIn);
    } else {
      return res.json(false);
    }
  }
  async logOut(req, res) {
    try {
      const user = await userService.findOne({ email: req.body.email });
      await userService.update(user._id, { isLoggedIn: false });

      // Clear user information from the session upon logout
      req.session.destroy();
      res.json({
        message: "Successfully logged out.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new Login();
