import { Link } from 'gatsby'
import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/tags'>tags</Link>
                </li>
                <li>
                    <Link to='/recipes'>recipes</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
