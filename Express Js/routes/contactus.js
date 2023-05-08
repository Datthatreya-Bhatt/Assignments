const path = require('path');

const express = require('express');

const router = express.Router();

const productController = require('../controller/contact.js');


router.get('/',productController.getContact);

router.post('/',productController.postContact);

module.exports = router;