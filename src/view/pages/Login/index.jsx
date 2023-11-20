import React, { useContext, useEffect, useState } from 'react'
import Container from '../Common/Container'
import { AuthContext } from '../../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../../services/Api/auth'
function Login() {
    const navigate = useNavigate();
    const { setUser, setAccessToken, accessToken } = useContext(AuthContext)
    const [errorLogin, setErrorLogin] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    console.log(data)

    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [])
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!data.username || !data.password) {
            setErrorLogin("Nhập thông tin cá nhân")
            return;
        }
        setLoading(true)
        const userLogin = await login(data);
        if (userLogin.status === 200) {
            console.log(userLogin.data)
            setUser(userLogin.data.user)
            setAccessToken(userLogin.data.accessToken)
            navigate('/')
            setLoading(false)
        } else {
            setErrorLogin('Tài khoản mật khẩu không chính xác')
        }
        setLoading(false)

    }
    return (
        <div className='app-login'>
            <Container>
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="heading">
                            Đăng nhập
                        </div>
                        {errorLogin && <span>{errorLogin}</span>}
                        <form className="login-form" onSubmit={handleLogin}>
                            <div className="form-input">
                                <input type="text"
                                    value={data.username}
                                    onChange={handleChange}
                                    name='username' placeholder='Email/SĐT' />
                            </div>
                            <div className="form-input">
                                <input type="text"
                                    value={data.password}
                                    onChange={handleChange}
                                    name='password'
                                    placeholder='Mật khẩu' />
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
