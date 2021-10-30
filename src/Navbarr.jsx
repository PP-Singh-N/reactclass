import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

const Navtop=()=>{
    return(
        <>
        <Navbar className="sticky-top" bg="primary" variant="dark">
        <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Nav className="me-auto navcss">
                
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Meet the team">Meet the team</Nav.Link>
            <Nav.Link href="#Contact us">Contact us</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Special Offer">Special Offer</Nav.Link>
            <Nav.Link href="#Pet Relocation">Pet Relocation</Nav.Link>
            <Nav.Link href="#Pet Advice">Pet Advice</Nav.Link>
            <Nav.Link href="#Boarding">Boarding</Nav.Link>
            <Nav.Link href="#Take A Tour">Take A Tour</Nav.Link>
            <Nav.Link href="#Employnment">Employnment</Nav.Link>
            <Nav.Link href="#FAQ">FAQ</Nav.Link>
            
            </Nav>
            </Container>
        </Navbar>

        </>
    )
}

export default Navtop;

