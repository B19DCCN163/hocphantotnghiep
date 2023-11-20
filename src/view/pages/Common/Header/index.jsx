import React, { useContext } from 'react'
import Container from '../Container'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'
import { CartContext } from '../../../../context/CartContext'
function Header() {
    const { accessToken, setAccessToken } = useContext(AuthContext)
    const { cartItems } = useContext(CartContext)
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
                        <Link to="/cart" className="header-item">
                            <div className="icon">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <span>({cartItems.length})</span>
                            </div>
                            <div >Giỏ hàng</div>
                        </Link>
                        <Link to="/admin" className="header-item">
                            <div className="icon">
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                            <div>Admin</div>
                        </Link>
                        {accessToken ? <Link to="/account" className="header-item">
                            <div className="icon">
                                <i className="fa-solid fa-user"></i>
                            </div>
                            <div>Tài khoản</div>
                        </Link> :
                            <Link to="/login" className="header-item">
                                <div className="icon">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div>Đăng nhập</div>
                            </Link>
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
