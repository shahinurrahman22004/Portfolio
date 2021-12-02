import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand className="fw-bold" style={{marginRight: '200px'}} as={HashLink} to="/home#home">Shahinur Rahman</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={HashLink}
                    to="/home#home">Home</Nav.Link>

                    <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>

                    <Nav.Link as={HashLink} to="/home#Projects">Projects</Nav.Link>

                    <Nav.Link as={HashLink} to="/home#tecnology">Technology</Nav.Link>

                    <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link href="https://drive.google.com/file/d/1rIevC76ZX9siV73OSACsOdWKFC-qtUQ5/view?usp=sharing">Download Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;