const controle = require('../controller/user');
const express = require('express');

const router = express.Router();

router.get('/user/signup',controle.signup);
router.post('/user/signup',controle.postData);
router.get('/user/login',controle.getlogin);
router.post('/user/login',controle.postlogin);

module.exports = router;
