const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controller/success.js');


router.get('/',productController.getSuccess);


module.exports = router;