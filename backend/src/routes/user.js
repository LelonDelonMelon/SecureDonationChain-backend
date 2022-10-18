const router = require('express').Router();
const UserController = require('../controller/user');


router.get('/', function(req, res) {
    res.send('respond with a resource');
  });


router.get('/', UserController.list)
router.post('/', UserController.create)
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router