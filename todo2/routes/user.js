const express = require('express');
const UserService = require("../service/user.service")

const router = express.Router();

router.post('/sign-up', UserService.signUp)
router.post('/sign-in', UserService.signIn)

module.exports = router;