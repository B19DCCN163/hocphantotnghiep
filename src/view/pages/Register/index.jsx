import React from 'react'
import Container from '../Common/Container'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <div className='app-login'>
            <Container>
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="heading">
                            Đăng Ký
                        </div>
                        <form className="login-form">
                            <div className="form-input">
                                <input type="text" placeholder='Email/SĐT' />
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder='Nhập mật khẩu' />
                            </div>
                            <input type="submit" value="Đăng nhập" />
                        </form>
                        <Link to="/login" className='btn-redirect'>
                            Đăng nhập ngay
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Register
