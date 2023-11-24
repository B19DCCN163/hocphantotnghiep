const express = require('express')
const userController = require('../controller/userController')
const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)
router.get('/get-all', userController.getAllUser)


module.exports = router