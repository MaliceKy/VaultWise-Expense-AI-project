import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbrand">VaultWise</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Getting-Started</a>
                <a href="/contact">Contact us</a>
            </div>

            <div className="sign-in">
            <a href="/sign-in">Sign in</a>
            </div>

        </nav>
    );
}

export default Navbar;
