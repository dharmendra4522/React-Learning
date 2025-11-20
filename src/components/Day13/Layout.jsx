import React from 'react'
import Navbar from '../Navbar'
import './layout.css'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className='layout-container'>
        <header className='navbar'>
            <Navbar />
        </header>
        <main>
        <Outlet />
        </main>
        <footer className='footer'>
            <p>© 2025 React Learning. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default Layout