import React, { useContext, useState } from 'react'
import Container from '../Container'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../../context/AuthContext'
import { CartContext } from '../../../../context/CartContext'
import { ProductContext } from '../../../../context/ProductContext'
function Header() {
    const { accessToken, setAccessToken, user } = useContext(AuthContext)
    const { cartItems } = useContext(CartContext)
    const { keyword, setKeyword } = useContext(ProductContext)
    const [key, setKey] = useState("")
    const navigate = useNavigate()
    const handleSearch = () => {
        if (key) {
            setKeyword(key)
            navigate(`search?q=${key}`)
        }

    }
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
                        <input type="text" placeholder='Tìm kiếm sản phẩm' value={key} onChange={(e) => setKey(e.target.value)} />
                        <span onClick={handleSearch}>Search</span>
                    </div>
                    <div className="header-right">

                        {user?.length > 0 && user[0].role === 1

                            ?
                            <Link to="/admin" className="header-item">
                                <div className="icon">
                                    <i className="fa-solid fa-circle-info"></i>
                                </div>
                                <div>Admin Dashboard</div>
                            </Link>
                            :
                            <>
                                <Link to="/cart" className="header-item">
                                    <div className="icon">
                                        <i className="fa-solid fa-cart-shopping"></i>
                                        <span>({cartItems.length})</span>
                                    </div>
                                    <div >Giỏ hàng</div>
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
                            </>
                        }


                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header
