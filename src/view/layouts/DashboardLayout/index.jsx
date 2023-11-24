import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../pages/AdminDashboard/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify'
import { AuthContext } from '../../../context/AuthContext'

function DashboardLayout() {
    const { logout, accessToken, user } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!accessToken || user[0].role !== 1) {
            navigate("/");
        }
    })
    return (
        <div className='dashboard-layout'>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                pauseOnHover={false}
            />
            <div className="header">
                <span className='logo'>
                    Admin Dashboard
                </span>
                <span className='btn-logout' onClick={() => {
                    logout();
                    navigate("/");
                    toast.success("Đăng xuất thành công")
                }}>
                    Đăng xuất
                </span>
            </div>
            <div className="dashboard-main">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
