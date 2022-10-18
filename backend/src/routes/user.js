const router = require('express').Router();
const UserController = require('../controller/user');

router.get('/', UserController.list)
router.post('/', UserController.create)
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

module.exports = router