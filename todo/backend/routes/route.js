const express = require('express');
const controle = require('../controller/controle');

const router = express.Router();

router.get('/',controle.getData);

router.post('/',controle.postData);

router.put('/put/:id',controle.putData);

router.delete('/delete/:id',controle.deletetData);

module.exports = router;