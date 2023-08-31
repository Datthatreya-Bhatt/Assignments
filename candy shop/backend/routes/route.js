const express = require('express');
const controle = require('../controller/controle');

const route = express.Router();

route.get('/',controle.getData);
route.post('/',controle.postData);
route.put('/buy/:id/:quantity',controle.putData);

module.exports = route;