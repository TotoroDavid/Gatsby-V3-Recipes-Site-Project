import { Link } from 'gatsby'
import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'
import logo from '../assets/images/logo.svg'

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to ='/'>
                        <img src={logo} alt="simply recipes"/>
                    </Link>
                    <button className='nav-btn'>
                        <FaAlignJustify/>
                    </button>
                </div>
                <div className='nav-links show-links'>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
