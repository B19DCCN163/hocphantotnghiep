import React from 'react'
import Header from '../../pages/Common/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../pages/Common/Footer'
import Container from '../../pages/Common/Container'
import { ToastContainer, toast } from 'react-toastify';

function PublicLayout() {
    return (
        <div className='app-layout'>
            <Header />
            <ToastContainer
                position="top-center"
                autoClose={2000}
                pauseOnHover={false}
            />
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
