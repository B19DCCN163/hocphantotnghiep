import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='dashboard-sidebar'>
      <NavLink to='/admin/products' className="sidebar-item">
        <div className="icon">
          <i class="fa-solid fa-pen"></i>
        </div>
        <div className="name">
          Products
        </div>
      </NavLink>
      <NavLink to="/admin/orders" className="sidebar-item">
        <div className="icon">
          <i class="fa-solid fa-bag-shopping"></i>
        </div>
        <div className="name">
          Orders
        </div>
      </NavLink>
      <NavLink to="/admin/users" className="sidebar-item">
        <div className="icon">
          <i class="fa-solid fa-users"></i>
        </div>
        <div className="name">
          Users
        </div>
      </NavLink>

    </div>
  )
}

export default Sidebar
