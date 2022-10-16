const router = require('express').Router();


router.get('/', (req,res) => {
    res.send("test Campaign");
})

module.exports = router