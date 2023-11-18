import React from 'react'
import Header from '../../pages/Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/Common/Footer'
import Container from '../../pages/Common/Container'
function PublicLayout() {
    return (
        <div className='app-layout'>
            <Header />
            <div className="app-main">
                <Container>
                    <Outlet />
                </Container>
            </div>

            <Footer />
        </div>
    )
}

export default PublicLayout
