const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.get('/list', productController.getProducts)
router.get('/:id', productController.getProductsById)
router.post('/add', productController.addProduct)
router.put('/update', productController.updateProduct)
router.delete('/delete/:id', productController.deleteProduct)

module.exports = router