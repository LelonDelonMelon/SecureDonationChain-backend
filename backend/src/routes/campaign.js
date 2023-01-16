const router = require('express').Router();
const campaignController = require('../controller/campaign');
const multer = require('multer')
const upload = multer({dest:'uploads/'});

// router.get('/', function(req, res) {
//     res.send('respond with a resource');
//   });


router.get('/', campaignController.list)
router.post('/',upload.single('campaignPicture'),campaignController.create)
router.put('/:id', campaignController.update);
router.delete('/:id', campaignController.delete);
router.post('/', campaignController.getUpload().single('campaignPicture'), campaignController.create);

// router.get('/images',campaignController.getImages);
// router.patch('/:id', upload.single('image'), campaignController.uploadImage)

module.exports = router