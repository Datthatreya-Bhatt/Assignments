const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"><input type="text" name="size"><button type="submit">Add product</button></form>');
});

router.post('/add-product',(req,res,next)=>{
    console.log(`Product: ${req.body.product}`);
    console.log(`Size: ${req.body.size}`); 
    res.redirect('/shop');
});

module.exports = router;