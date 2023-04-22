const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="text" name="size"><button type="submit">Add product</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(`Product: ${req.body.product}`);
    console.log(`Size: ${req.body.size}`); 
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from express</h1>');
});


app.listen(3000);
