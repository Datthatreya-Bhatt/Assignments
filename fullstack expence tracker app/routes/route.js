const controle = require('../controller/controle');
const express = require('express');

const router = express.Router();

router.post('/user/signup',controle.postData);


module.exports = router;
