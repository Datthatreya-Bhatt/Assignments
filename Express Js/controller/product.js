exports.getAddProduct = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProducts = (req,res,next)=>{
    console.log(`Product: ${req.body.product}`);
    console.log(`Size: ${req.body.size}`); 
    res.redirect('/shop');
};

exports.getProducts = (req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
};
