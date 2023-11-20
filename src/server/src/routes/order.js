const express = require('express')
const orderController = require('../controller/orderController')
const router = express.Router()

router.post('/', orderController.buyProduct)
router.get('/list', orderController.getListOrder)

module.exports = router