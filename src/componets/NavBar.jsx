import React from 'react';
import CartWidget from './CartWidget';
import {Navbar,Container,Nav} from 'react-bootstrap';


function NavBar() {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">RUTH</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">NOSOTROS</Nav.Link>
            <Nav.Link href="#pricing">PRODUCTOS</Nav.Link>
            <Nav.Link href="#pricing">CONTACTO</Nav.Link>
            </Nav>
            </Container>
            <CartWidget />
        </Navbar>
        </>
    
    )
}

export default NavBar