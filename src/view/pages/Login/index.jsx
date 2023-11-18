import React from 'react'
import Container from '../Common/Container'
import { Link } from 'react-router-dom'
function Login() {
    return (
        <div className='app-login'>
            <Container>
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="heading">
                            Đăng nhập
                        </div>
                        <form className="login-form">
                            <div className="form-input">
                                <input type="text" placeholder='Email/SĐT' />
                            </div>
                            <div className="form-input">
                                <input type="text" placeholder='Mật khẩu' />
                            </div>
                            <div className="form-checkbox">
                                <input type="checkbox" value="Ghi nhớ" name="remember" id="" />
                                <label for="remember">Ghi nhớ mật khẩu</label>
                            </div>
                            <input type="submit" value="Đăng nhập" />
                        </form>
                        <Link to="/register" className='btn-redirect'>
                            Đăng ký ngay
                        </Link>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Login
