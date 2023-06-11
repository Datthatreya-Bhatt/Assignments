const express = require('express');

const auth = require('../middleware/auth');
const purchase = require('../controller/purchase');

const router = express.Router();

router.get('/purchasepremium',auth.auth,purchase.getPurchase);
router.post('/updatetransaction',auth.auth,purchase.postPurchase);


module.exports = router;