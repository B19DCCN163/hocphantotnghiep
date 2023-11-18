import React from 'react'
import CardProduct from '../Common/CardProduct'


function ProductList() {

  return (
    <div className='app-product'>
      <h4>Tất cả sản phẩm</h4>
      <div className="product-items">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  )
}

export default ProductList
