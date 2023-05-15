const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

const usersRoutes = require('./routes/route');

app.use(cors());
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use('/', usersRoutes);

app.listen(3000);
