import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import "../Style/Home.css"
import logo from '../Images/logo.png'

const Navbars = () => {
    return (
        <div>
            <Navbar bg="" className='bg-nav' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} className='logo' alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/">HOME</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/about">ABOUT</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/checkout">CHECKOUT</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/contact">CONTACT</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active-link" : "link"} to="/login">LOGIN</NavLink>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navbars;