const express = require('express')
const router = express.Router()

router.route('/avatar/:id')
    .put(require('../Controllers/userController').updateAvatar)
    
router.route('/:id')
    .get(require('../Controllers/userController').getAllContacts)

module.exports = router