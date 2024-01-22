const router = require("express").Router();
const authController = require("../controller/authController");

//fix the routing. Currently /login/logut. Revise into /api/auth/login, /api/auth/logout

router.post("/", authController.login);
router.post("/logout", authController.logOut);
router.post("/isLoggedIn", authController.isLoggedIn);

module.exports = router;
