import React, { useContext, useEffect, useState } from 'react'
import Container from '../Common/Container'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import axios from '../../../services/axios'
import { toast } from 'react-toastify'
function Register() {

    const { accessToken } = useContext(AuthContext)
    const navigate = useNavigate()

    const [data, setData] = useState({
        username: "",
        password: "",
    });
    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };
    useEffect(() => {
        if (accessToken) {
            navigate('/')
        }
    }, [])
    console.log(data)
    const handleRegister = (e) => {
        e.preventDefault()
        if (!data.username || !data.password) {
            toast("Nhập thông tin cá nhân")
            return;
        }
        axios.post('user/register', data)
            .then(res => {
                if (res.status === 200) {
                    toast("Tài khoản đã tồn tại")
                } else {
                    toast("Đăng ký thàn công")
                    navigate('/login')
                }
            }).catch(er => {
                toast.warn("Lỗi server")
            })
    }
    return (
        <div className='app-login'>
            <Container>
                <div className="login-container">
                    <div className="login-wrapper">
                        <div className="heading">
                            Đăng Ký
                        </div>
                        <form className="login-form" onSubmit={handleRegister}>
                            <div className="form-input">
                                <input type="text"
                                    name='username'
                                    value={data.username}
                                    onChange={handleChange}
                                    placeholder='Email/SĐT' />
                            </div>
                            <div className="form-input">
                                <input type="password"
                                    name='password'
                                    value={data.password}
                                    onChange={handleChange}
                                    placeholder='Nhập mật khẩu' />
                            </div>
                            <input type="submit" value="Đăng ký" />
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
