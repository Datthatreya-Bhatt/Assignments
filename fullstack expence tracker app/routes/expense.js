const controle = require('../controller/expense');
const express = require('express');

const router = express.Router();

router.get('/:id/expense',controle.getdata);


module.exports = router;
