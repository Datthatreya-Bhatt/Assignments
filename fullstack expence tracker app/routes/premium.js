const express = require('express');

const auth = require('../middleware/auth');
const premium = require('../controller/premium');

const router = express.Router();

router.get('/user/premium',premium.getPremiumPage);
router.get('/user/premium/leaderboard',auth.auth,premium.getLeaderBoard);


module.exports = router;