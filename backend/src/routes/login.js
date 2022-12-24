const router = require('express').Router();
const loginController = require('../controller/loginController')


router.post('/', loginController.login)
router.post('/logout',loginController.logOut);

module.exports = router;