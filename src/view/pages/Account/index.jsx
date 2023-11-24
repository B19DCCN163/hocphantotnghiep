import React, { useContext, useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

function Account() {
    const { user, logout, accessToken } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (!accessToken) {
            navigate('/')
        }
    }, [])
    return (
        <div className='app-account'>
            <div className="heading">
                Thông tin tài khoản
            </div>
            {user &&
                <div className="account-main">
                    <div className="sidebar">
                        <div className="user-info">
                            <div className="avatar">
                                <i className="fa-regular fa-user"></i>
                            </div>
                            <div className="name">
                                {user[0].username}
                            </div>
                        </div>
                        <div className="user-option">
                            <NavLink to="/account/info" className="user-item">
                                <span>
                                    Thông tin cá nhân
                                </span>
                            </NavLink>
                            <NavLink to="/account/orders" className="user-item">
                                <span>
                                    Đơn đặt hàng
                                </span>
                            </NavLink>
                        </div>
                        <div className="user-logout" onClick={() => {
                            logout();
                            navigate('/');

                        }}>
                            Đăng xuất
                        </div>
                    </div>
                    <div className="outlet" >
                        <Outlet />
                    </div>
                </div>
            }
        </div>
    )
}

export default Account
