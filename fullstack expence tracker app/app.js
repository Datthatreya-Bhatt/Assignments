const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const user = require('./routes/user');
const expense = require('./routes/expense');

const app = express();
app.use(cors());

app.use(express.static('public'));

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use(user);
app.use(expense);

app.listen(3000);