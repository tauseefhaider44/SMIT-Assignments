import React from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.png'
function Navbar() {
    return (
        <>
            <div className="nav_Elements">
                <div className="logo">
                    <img src={logo} alt="logo" width={'150px'} />
                </div>
                <div className="nav_Right">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Buying</li>
                        <li>Renting</li>
                        <li>Selling</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul>
                        <li>Login</li>
                        <li>Sign Up</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;