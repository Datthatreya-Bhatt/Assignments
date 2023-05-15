const express = require('express');
const router = express.Router();

const control = require('../controller/control');

router.post('/', control.createUser);
router.get('/', control.getAllUsers);
router.delete('/delete/:id', control.deleteUser);

module.exports = router;
