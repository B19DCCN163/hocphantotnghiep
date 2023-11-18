import React from 'react'
import CardProduct from '../Common/CardProduct'
import banner from '../../../assets/images/banner-gia-dung1.jpg'
function Home() {
  return (
    <div className='app-home'>
      <div className="home-banner">
        <img src={banner} alt="" />
      </div>
      <div className="list-product">
        <h4>Flash Sale</h4>
        <div className="product-items">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      <div className="list-product">
        <h4>Sản phẩm bán chạy</h4>
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
    </div>
  )
}

export default Home
