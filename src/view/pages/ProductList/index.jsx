import React, { useContext } from 'react'
import CardProduct from '../Common/CardProduct'
import { ProductContext } from '../../../context/ProductContext'


function ProductList() {
  const { products } = useContext(ProductContext)
  return (
    <div className='app-product'>
      <h4>Tất cả sản phẩm</h4>
      <div className="product-items">
        {products.length > 0 && products.map((product) => (
          <CardProduct product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
