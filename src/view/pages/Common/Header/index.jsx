import React from 'react'
import Container from '../Container'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <div className='app-header'>
            <Container>
                <div className="header-container">
                    <div className="header-left">
                        <div className="logo">
                            <img src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-pottery-flat-icon-png-image_9060860.png" alt="" />
                        </div>
                        <div className="header-item">
                            <NavLink to="/">Trang chủ</NavLink>
                        </div>
                        <div className="header-item">
                            <NavLink to="/products">Sản phẩm</NavLink>
                        </div>
                    </div>
                    <div className="header-center">
                        <input type="text" placeholder='Tìm kiếm sản phẩm' />
                    </div>
                    <div className="header-right">
                        <div className="header-item">
                            <div className="icon">
                                <i class="fa-solid fa-cart-shopping"></i>
                                <span>(3)</span>
                            </div>
                            <Link to="/cart">Giỏ hàng</Link>
                        </div>
                        <div className="header-item">
                            <div className="icon">
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <Link to="/admin">Admin</Link>
                        </div>
                        <div className="header-item">
                            <div className="icon">
                                <i class="fa-solid fa-circle-info"></i>
                            </div>
                            <Link to="/login">Đăng nhập</Link>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
