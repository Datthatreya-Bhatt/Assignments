const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const user = require('./routes/user');
const expense = require('./routes/expense');
const purchase = require('./routes/purchase');
const premium = require('./routes/premium');
const forgotpassword = require('./routes/forgotpassword');

const app = express();
app.use(cors());

app.use(express.static('public'));

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use(user);
app.use(expense);
app.use(purchase);
app.use(premium);
app.use(forgotpassword);

app.listen(3000);