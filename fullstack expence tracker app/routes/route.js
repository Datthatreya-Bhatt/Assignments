const controle = require('../controller/controle');
const express = require('express');

const router = express.Router();

router.get('/user/signup',controle.signup);
router.post('/user/signup',controle.postData);
router.get('/user/login',controle.getlogin);

module.exports = router;
