import React, { useContext } from 'react'
import CardProduct from '../Common/CardProduct'
import banner from '../../../assets/images/banner-gia-dung1.jpg'
import { ProductContext } from '../../../context/ProductContext'
function Home() {
  const { products } = useContext(ProductContext)
  console.log(products)
  return (
    <div className='app-home'>
      <div className="home-banner">
        <img src={banner} alt="" />
      </div>
      <div className="list-product">
        <h4>Flash Sale</h4>
        <div className="product-items">
          {products.length > 0 && products.map((product) => (
            <CardProduct product={product} />
          ))}
        </div>

      </div>
      <div className="list-product">
        <h4>Sản phẩm bán chạy</h4>
        <div className="product-items">
          {products.length > 0 && products.map((product) => (
            <CardProduct product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
