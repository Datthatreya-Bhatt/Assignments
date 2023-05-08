const path = require('path');
const bodyParser = require('body-parser');

const Product = require('../model/product');

exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
};
exports.postAddProducts = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();

    console.log(`Product: ${req.body.title}`);
    console.log(Product.fetchAll(),'fetch data');
    res.redirect('/shop');
};

exports.getProducts = (req,res,next)=>{
    Product.fetchAll( (products)=>{
        res.sendFile(path.join(__dirname,'../','views','shop.html'));
    });

   
};
