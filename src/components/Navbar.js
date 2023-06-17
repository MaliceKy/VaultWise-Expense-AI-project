import React, { useState } from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function MyNavbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); // useNavigate hook
    const location = useLocation(); // useLocation hook

    return (
        <Navbar className="navbar" expand="md" fixed="top" expanded={open}>
            <Link className="navbar-brand" to="/">VaultWise</Link>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="links">
                    {location.pathname === "/sign-in" ? (
                        // Different navigation for sign-in page
                        <>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); }} id="nav-home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/register" onClick={()=> setOpen(false)} id="nav-sign-up">Sign up</Nav.Link>
                        </>
                    ) : (
                        // Default navigation
                        <>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'Home'; }} id="nav-home">Home</Nav.Link>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'About'; }} id="nav-about">About</Nav.Link>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'Getting-Started'; }} id="nav-getting-started">Getting Started</Nav.Link>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'Contact'; }} id="nav-contact-us">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/sign-in" onClick={()=> setOpen(false)} id="nav-sign-in">Sign in</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>

            <div onClick={()=> setOpen(!open)} className={`navbar-toggle ${open ? 'open' : ''}`} aria-controls="responsive-navbar-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Navbar>
    );
}

export default MyNavbar;


