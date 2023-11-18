import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../pages/AdminDashboard/Sidebar/Sidebar'

function DashboardLayout() {
    return (
        <div className='dashboard-layout'>
            <div className="header">
                <span className='logo'>
                    Admin Dashboard
                </span>
                <span className='btn-logout'>
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
