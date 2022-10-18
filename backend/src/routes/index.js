const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const campaignRouter = require('./campaign');
const userController = require('../controller/user');

router.use('/user', userRouter);
router.use('/campaign', campaignRouter);




module.exports = router;