const express = require('express')
const router = express.Router()

router.route('/')
    .post(require('../Controllers/messageController').newMessage)

router.route('/inbox')
    .post(require('../Controllers/messageController').getAllMessages)

module.exports = router