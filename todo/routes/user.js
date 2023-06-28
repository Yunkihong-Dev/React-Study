const express = require('express');
const UserSerivce = require("../service/user.service")

const router = express.Router();

router.post('/sign-up', UserSerivce.signUp)
router.post('/sign-in', UserSerivce.signIn)

module.exports = router;