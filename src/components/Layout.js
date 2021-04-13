import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import '../assets/css/main.css'
import 'normalize.css'

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
                {children}
            <Footer/>
        </>
    )
}

export default Layout
