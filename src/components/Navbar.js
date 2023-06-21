import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function MyNavbar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleHashChange = () => {
            const navbarHeight = 70; // Set this to the height of your navbar
            const element = document.getElementById(window.location.hash.substring(1));
            if (element) {
                window.scrollTo({
                    top: element.getBoundingClientRect().top + window.pageYOffset - navbarHeight,
                    behavior: 'smooth'
                });
            }
        };

        // Add the event listener
        window.addEventListener('hashchange', handleHashChange);

        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    return (
        <Navbar className="navbar" expand="md" fixed="top" expanded={open}>
            <Link className="navbar-brand" to="/">VaultWise</Link>

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="links">
                    {location.pathname === "/Sign-in" ? (
                        <>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); }} id="nav-home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Sign-up" onClick={() => setOpen(false)} id="nav-sign-up">Sign up</Nav.Link>
                        </>
                    ) : location.pathname === "/Sign-up" ? (
                        <>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); }} id="nav-home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/Sign-in" onClick={() => setOpen(false)} id="nav-sign-in">Sign in</Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'Home'; }} id="nav-home">Home</Nav.Link>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'About'; }} id="nav-about">About</Nav.Link>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'Getting-Started'; }} id="nav-getting-started">Getting Started</Nav.Link>
                            <Nav.Link onClick={() => { setOpen(false); navigate('/'); window.location.hash = 'Contact'; }} id="nav-contact-us">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/Sign-in" onClick={() => setOpen(false)} id="nav-sign-in">Sign in</Nav.Link>
                        </>
                    )}
                </Nav>
            </Navbar.Collapse>

            <div onClick={() => setOpen(!open)} className={`navbar-toggle ${open ? 'open' : ''}`} aria-controls="responsive-navbar-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Navbar>
    );
}

export default MyNavbar;



