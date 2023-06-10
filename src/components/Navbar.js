import React, { useState } from 'react';
import './Navbar.css';
import { Navbar, Nav} from 'react-bootstrap';

function MyNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <Navbar className="navbar" expand="md" fixed="top" expanded={open}>
            <Navbar.Brand className="navbrand" href="#home">VaultWise</Navbar.Brand>
            
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="links">
                    <Nav.Link onClick={()=> setOpen(false)} id="nav-home" href="#Home">Home</Nav.Link>
                    <Nav.Link onClick={()=> setOpen(false)} id="nav-about" href="#About">About</Nav.Link>
                    <Nav.Link onClick={()=> setOpen(false)} id="nav-getting-started" href="#Getting-Started">Getting Started</Nav.Link>
                    <Nav.Link onClick={()=> setOpen(false)} id="nav-contact-us" href="#Contact">Contact Us</Nav.Link>
                    <Nav.Link onClick={()=> setOpen(false)} id="nav-sign-in" href="/sign-in">Sign in</Nav.Link>
                </Nav>
            </Navbar.Collapse>

            <div onClick={()=> setOpen(!open)} className={`navbar-toggle ${open ? 'open' : ''}`} aria-controls="responsive-navbar-nav" >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Navbar>
    );
}


export default MyNavbar;
