import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">RUTH</Navbar.Brand>
            <Nav className="me-auto">
            <NavLink to='/' className={({ isActive })=> isActive ? 'clase1' : 'clase1'}>Home</NavLink>
            <NavLink to='/categoria/sport'>SPORT</NavLink>
            <NavLink to='/categoria/run'>RUN</NavLink>
            <NavLink to='/'>CONTACTO</NavLink>
            </Nav>
            </Container>
            <Link to='/cart'>
            <CartWidget />
            </Link>

        </Navbar>
        </>
    
    )
}

export default NavBar