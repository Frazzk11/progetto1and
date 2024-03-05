import React from 'react'
import logo from "../../logo.svg"
import './Header.css'

const Header = () => {
  return (
    <header>
        <img src={logo} alt="Logo" className='logo' />
        <nav>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header