const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/',(req,res,next)=>{
    console.log(`Product: ${req.body.product}`);
    console.log(`Size: ${req.body.size}`); 
    res.redirect('/shop');
});

module.exports = router;