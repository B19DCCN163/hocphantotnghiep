import React, { useContext, useEffect, useState } from 'react'
import axios from '../../../../services/axios'
import { AuthContext } from '../../../../context/AuthContext'
import { formatDate } from '../../../../utils/formatDate'
function Orders() {

  const [orders, setOrders] = useState([])
  const { user } = useContext(AuthContext)


  useEffect(() => {
    axios.get('order/list', {
      params: {
        id: user[0].id
      }
    })
      .then(res => {
        setOrders(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return (
    <div className='account-orders'>
      <div className="heading">
        Đơn hàng đã mua
      </div>
      <div className="list-order">
        {orders.length > 0 ?
          orders.map((order, index) => (
            <div className="order-item" key={index}>
              <div className="heading">
                Mã đơn hàng: DH{order.orderID}
              </div>
              <div className="time">
                Ngày mua hàng: {formatDate(order.date)}
              </div>
              <div className="product-list">
                {order.products &&
                  order.products.map((product) => (
                    <div className="product-item" key={product.id}>
                      <div className="img">
                        <img src={product.thumb_url} alt="" />
                      </div>
                      <div className="cart-desc">
                        <p className="item-name">
                          {product.product_name}
                        </p>
                        <div className="item-quantity">
                          <span className='title'>
                            Số lượng:
                          </span>
                          <span className='value'>
                            {product.quantity}
                          </span>
                        </div>
                        <div className="item-price">
                          <span className='title'>
                            Giá:
                          </span>
                          <span className='value'>
                            {product.quantity * product.base_price}VND
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className="order-total">
                Tổng thanh toán: <span>{order.cartTotal} VND</span> 
              </div>
            </div>
          )) : <h5>Bạn chưa đặt đơn nào</h5>
        }
      </div>
    </div>
  )
}

export default Orders
