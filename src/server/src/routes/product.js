const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.get('/list', productController.getProducts)
router.get('/:id', productController.getProductsById)



module.exports = router