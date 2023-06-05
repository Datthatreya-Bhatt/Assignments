const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const router = require('./routes/route');

const app = express();
app.use(cors());

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use(router);

app.listen(3000);