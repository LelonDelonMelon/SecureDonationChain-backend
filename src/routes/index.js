const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const walletRouter = require('./wallet');
const campaignRouter = require('./campaign');
const { application } = require('express');
const userController = require('../controller/user');
const commentRouter = require('./comment');
const loginRouter = require('./login');


router.use('/user', userRouter);
router.use('/campaign', campaignRouter);
router.use('/wallet', walletRouter);
router.use('/comment',commentRouter);
router.use('/login',loginRouter);

module.exports = router;