import React, { useContext } from 'react'
import { AuthContext } from '../../../../context/AuthContext'
import Chart from './Chart'

function Info() {
    const { user } = useContext(AuthContext)
    return (
        <div className='account-info'>
            <div className="heading">
                Thông tin cá nhân
            </div>
            <div className="info">
                <div className="username">
                    <div className="title">
                        username:
                    </div>
                    <div className="name">
                        {user[0].username}
                    </div>
                </div>
                <div className="btn-account">
                    Đổi mật khẩu
                </div>
            </div>
            <div className="heading">
                Thống kê chi tiêu
            </div>
            <div className="chart">
                <Chart />
                <h6>Thống kê chi tiêu 6 tháng gần nhất</h6>
            </div>
        </div>
    )
}

export default Info
