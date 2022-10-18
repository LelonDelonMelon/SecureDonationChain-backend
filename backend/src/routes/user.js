const router = require('express').Router();
const UserController = require('../controller/user');


router.get('/', function(req, res) {
    res.send('respond with a resource');
  });


router.get('/', UserController.list)
router.post('/', UserController.create)

module.exports = router