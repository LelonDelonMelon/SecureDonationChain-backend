const router = require('express').Router();
const campaignController = require('../controller/campaign');


// router.get('/', function(req, res) {
//     res.send('respond with a resource');
//   });


router.get('/', campaignController.list)
router.post('/', campaignController.create)
router.put('/:id', campaignController.update);
router.delete('/:id', campaignController.delete);
router.get('/images',campaignController.getImages);
module.exports = router