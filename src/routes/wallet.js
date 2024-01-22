const router = require('express').Router();
const WalletController = require('../controller/wallet');


// router.get('/', function(req, res) {
//     res.send('respond with a resource');
//   });


router.get('/', WalletController.list)
router.post('/', WalletController.create)
router.put('/:id', WalletController.update);
router.delete('/:id', WalletController.delete);

module.exports = router