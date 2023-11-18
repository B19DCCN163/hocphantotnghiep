import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='app-cart'>
            <div className="cart-heading">
                Giỏ hàng
            </div>
            <div className="cart-main">
                <div className="cart-items">
                    <div className="cart-item">
                        <div className="img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh86uHNZXjgBFGQogwz-pSOAbjtc3C9S8KA&usqp=CAU" alt="" />
                        </div>
                        <div className="cart-desc">
                            <p className="item-name">
                                Đồ gốm rẻ rách
                            </p>
                            <div className="item-quantity">
                                <span className='title'>
                                    Số lượng:
                                </span>
                                <span className='value'>
                                    2
                                </span>
                            </div>
                            <div className="item-price">
                                <span className='title'>
                                    Giá:
                                </span>
                                <span className='value'>
                                    100.000VND
                                </span>
                            </div>
                        </div>
                        <div className="item-btn">
                            <div className="btn-remove">
                                <span>Xóa</span>
                            </div>
                            <div className="quatity-box">
                                <div>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <div className='number'>
                                    3
                                </div>
                                <div>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* test */}
                    <div className="cart-item">
                        <div className="img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJh86uHNZXjgBFGQogwz-pSOAbjtc3C9S8KA&usqp=CAU" alt="" />
                        </div>
                        <div className="cart-desc">
                            <p className="item-name">
                                Đồ gốm rẻ rách
                            </p>
                            <div className="item-quantity">
                                <span className='title'>
                                    Số lượng:
                                </span>
                                <span className='value'>
                                    2
                                </span>
                            </div>
                            <div className="item-price">
                                <span className='title'>
                                    Giá:
                                </span>
                                <span className='value'>
                                    100.000VND
                                </span>
                            </div>
                        </div>
                        <div className="item-btn">
                            <div className="btn-remove">
                                <span>Xóa</span>
                            </div>
                            <div className="quatity-box">
                                <div>
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <div className='number'>
                                    3
                                </div>
                                <div>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* tesst */}

                </div>
                <div class="payment-detail">
                    <h3 class="title">Thanh toán</h3>
                    <div class="payment-box">
                        <div class="payment-top">
                            <div class="payment-subtotal">
                                <span class="left"> Tổng tiền sản phẩm </span>
                                <span class="right">
                                    200.000 VND
                                </span>
                            </div>
                            <div class="payment-discount">
                                <span class="left"> Giảm giá (0%) </span>
                                <span class="right"> 0đ </span>
                            </div>
                            <div class="payment-ship">
                                <span class="left"> Phí vận chuyển </span>
                                <span class="right"> 0đ </span>
                            </div>
                        </div>
                        <div class="payment-bottom">
                            <div class="left">Tổng thanh toán</div>
                            <div class="right">
                                200.000 VND
                            </div>
                        </div>
                    </div>
                    <Link to="/cart/checkout" class="payment-btn">
                        <button>
                            <Link to="/cart/checkout">Tới trang thanh toán</Link>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Cart
