import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'
import { AuthContext } from '../../../context/AuthContext'
import { toast } from 'react-toastify'

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, getCartTotal } = useContext(CartContext)
    const { accessToken } = useContext(AuthContext)
    console.log(cartItems)
    const navigate = useNavigate()
    const handleCheckout = () => {
        if (!accessToken) {
            toast("Bạn chưa đăng nhập")
            return
        }
        if (cartItems.length < 1) {
            toast.error("Vui lòng thêm sản phẩm vào giỏ")
            return
        }
        navigate('checkout')

    }
    return (
        <div className='app-cart'>
            <div className="cart-heading">
                Giỏ hàng
            </div>
            <div className="cart-main">
                <div className="cart-items">
                    {cartItems.length > 0 ?
                        cartItems.map((item, index) => (
                            <div className="cart-item" key={item.id}>
                                <div className="img">
                                    <img src={item.thumb_url} alt="" />
                                </div>
                                <div className="cart-desc">
                                    <p className="item-name">
                                        {item.name}
                                    </p>
                                    <div className="item-quantity">
                                        <span className='title'>
                                            Số lượng:
                                        </span>
                                        <span className='value'>
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="item-price">
                                        <span className='title'>
                                            Giá:
                                        </span>
                                        <span className='value'>
                                            {item.base_price * item.quantity}VND
                                        </span>
                                    </div>
                                </div>
                                <div className="item-btn">
                                    <div className="quatity-box">
                                        <div onClick={() => removeFromCart({
                                            base_price: item.base_price,
                                            description: item.description,
                                            id: item.id,
                                            name: item.name,
                                            stock: item.stock,
                                            thumb_url: item.thumb_url
                                        })}>
                                            <i className="fa-solid fa-minus"></i>
                                        </div>
                                        <div className='number'>
                                            {item.quantity}
                                        </div>
                                        <div onClick={() => addToCart({
                                            base_price: item.base_price,
                                            description: item.description,
                                            id: item.id,
                                            name: item.name,
                                            stock: item.stock,
                                            thumb_url: item.thumb_url
                                        })}>
                                            <i className="fa-solid fa-plus"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) :
                        <h6>Giỏ hàng trống</h6>
                    }
                </div>
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
                    <div onClick={handleCheckout} className="payment-btn">
                        <button>
                            <div>Tới trang thanh toán</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart
