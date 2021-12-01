import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand className="fw-bold" style={{marginRight: '200px'}} href="#home">Shahinur Rahman</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link 
                    href="#home">Home</Nav.Link>

                    <Nav.Link href="#about">About</Nav.Link>

                    <Nav.Link href="#Projects">Projects</Nav.Link>

                    <Nav.Link href="#tecnology">Technology</Nav.Link>

                    <Nav.Link href="#contact">Contact</Nav.Link>
                
                </Nav>
                <Nav>
                <Nav.Link href="https://drive.google.com/file/d/1XXLYAo1xznE1ckZvh29VIMEVaM_RVfyR/view?usp=sharing">Download Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};

export default Header;