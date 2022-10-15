const router = require('express').Router();
const UserController = require('../controller/user');

router.get('/', UserController.list)
router.post('/', UserController.create)

module.exports = router