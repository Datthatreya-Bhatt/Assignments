const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactus');
const successRoutes = require('./routes/success');

const productController = require('./controller/error.js')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public',)))

app.use('/add-product',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contactus',contactRoutes);
app.use('/success',successRoutes);

app.use(productController.useError);

app.listen(4000);
