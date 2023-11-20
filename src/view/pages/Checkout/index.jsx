import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import axios from '../../../services/axios'
import { AuthContext } from '../../../context/AuthContext'
import { toast } from 'react-toastify'

function Checkout() {
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const [address, setAddress] = useState('')
    const [sdt, setSdt] = useState('')
    const navigate = useNavigate()
    const handleBuy = async () => {
        if (address == '' || sdt == '') {
            toast("Nhập địa chỉ và sdt")
            return
        }
        console.log(address)
        axios.post('order', { cartItems, address: address, sdt, user })
            .then(res => {
                clearCart()
                navigate('/account/orders')
                toast("Đã đặt hàng")
            })
            .catch(er => {
                toast("Không thể mua")
            })
    }
    return (
        <div className='cart-checkout'>
            <div className="info-shipment">
                <h1>Thông tin thanh toán</h1>
                <div className="info-user">
                    <div className="address">
                        <h2>Nhập địa chỉ giao hàng:</h2>
                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder='Địa chỉ' />
                    </div>
                    <div className="phone">
                        <h2>Nhập số điện thoại:</h2>
                        <input type="text" value={sdt} onChange={(e) => setSdt(e.target.value)} placeholder='Số điện thoại' />
                    </div>
                </div>
            </div>
            <div className="list-product">
                <div className="heading">
                    Danh sách sản phẩm
                </div>
                <div className="product-items">
                    {cartItems.length > 0 &&
                        cartItems.map((item, index) => (
                            <div className="product-item" key={item.id}>
                                <div className="quantity">
                                    x{item.quantity}
                                </div>
                                <div className="name">
                                    {item.name}
                                </div>
                                <div className="price">
                                    {item.base_price * item.quantity}VND
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="payment">
                    <div className="payment-detail">
                        <h3 className="title">Thanh toán</h3>
                        <div className="payment-box">
                            <div className="payment-top">
                                <div className="payment-subtotal">
                                    <span className="left"> Tổng tiền sản phẩm </span>
                                    <span className="right">
                                        {getCartTotal()} VND
                                    </span>
                                </div>
                                <div className="payment-discount">
                                    <span className="left"> Giảm giá (0%) </span>
                                    <span className="right"> 0đ </span>
                                </div>
                                <div className="payment-ship">
                                    <span className="left"> Phí vận chuyển </span>
                                    <span className="right"> 0đ </span>
                                </div>
                            </div>
                            <div className="payment-bottom">
                                <div className="left">Tổng thanh toán</div>
                                <div className="right">
                                    {getCartTotal()} VND
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-buy">
                    <button onClick={handleBuy}>
                        Đặt hàng
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
