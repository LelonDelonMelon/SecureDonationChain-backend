const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const campaignRouter = require('./campaign');
const { application } = require('express');
const userController = require('../controller/user');


router.get('/', function(req, res) {
    res.render('index', { title: 'Express', message: 'Hello World' });
  });

router.use('/user', userRouter);
router.use('/campaign', campaignRouter);

module.exports = router;