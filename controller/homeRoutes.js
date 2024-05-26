const router = require('express').Router();

router.get('/', async (req,res) => {   
        console.log('home route reached, should call home layout');
        res.status(200).render('home');
    });

module.exports = router;