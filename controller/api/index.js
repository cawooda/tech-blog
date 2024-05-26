const router = require('express').Router();

router.get('/',(res,req)=>{
    console.log("api reached");
    req.send("api reached");
});


module.exports = router;