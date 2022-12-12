const router = require('express').Router();
const commentController = require('../controller/commentController');

router.get('/',commentController.list)
router.post('/', commentController.create)
router.put('/:id', commentController.update)
router.delete('/:id', commentController.delete);

module.exports = router;