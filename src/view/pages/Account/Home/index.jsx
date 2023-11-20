import React from 'react'
import { Navigate } from 'react-router-dom'

function AccountHome() {
    return (
        <div className='account-home'>
            <Navigate to="info" />
        </div>
    )
}

export default AccountHome
