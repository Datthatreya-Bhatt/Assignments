const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();


router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'));
});

router.post('/',(req,res,next)=>{ 
    res.redirect('/success');
});

module.exports = router;