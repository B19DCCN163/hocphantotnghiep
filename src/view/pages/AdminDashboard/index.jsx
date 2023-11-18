import React from 'react'
import { Navigate } from 'react-router-dom'

function AdminDashboard() {

  return (
    <div className='admin-sidebar'>
      <Navigate to="products" />
    </div>
  )
}

export default AdminDashboard
