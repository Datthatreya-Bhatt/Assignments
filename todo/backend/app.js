const express = require('express');
const cors = require('cors');
const parser = require('body-parser');

const routes = require('./routes/route');

const app = express();

app.use(cors());

app.use(parser.urlencoded({extended:false}));
app.use(parser.json());

app.use(routes);

app.listen(4000);
