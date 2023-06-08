const controle = require('../controller/expense');
const express = require('express');


const router = express.Router();

router.get('/expense/data',controle.getExpenseData );
router.get('/expense',controle.getData);
router.post('/expense/data',controle.postData);
router.delete('/expense/:id',controle.deleteData);

module.exports = router;
