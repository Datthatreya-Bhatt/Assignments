const express = require('express');
const router = express.Router();

const controle = require('../controller/controle');

router.get('/get',controle.getData);
router.post('/post',controle.postData);
router.delete('/delete/:id',controle.deleteData);

module.exports = router;