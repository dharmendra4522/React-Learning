import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {user, logout} = useContext(AuthContext);
  return (
    <nav className='p-4 ml-2 bg-black text-white flex  gap-16 sm:gap-8 lg:gap-12 '>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/contact">Contact</Link> | {" "}
        <Link to="/user/10">User 10</Link> | {" "}
        <Link to="/services">Services</Link> | {" "}
        <Link to="/dashboard">Dashboard</Link>

        <div className='ml-auto'>
          {user ? (
            <>
              <span className='mr-4'>Hi, {user.name}</span>
              <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
            </>
          ) :(
            <Link to="/login">Login</Link>
          )}

        </div>
    </nav>
  )
}

export default Navbar;