const forgotpassword = require('../controller/forgotpassword');
const express = require('express');

const router = express.Router();

router.post('/password/forgotpassword',forgotpassword.getEmail);
router.get('/forgotpassword',forgotpassword.getforgotpasswordPage);


module.exports = router;
