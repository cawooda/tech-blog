const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/',homeRoutes);
// router.use('/api',apiRoutes);

router.get('/',(req, res)=>{
    console.log('index of controller reached');
    res.status(200).send('controller OK');
})

module.exports = router;