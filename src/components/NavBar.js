import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{width:'95%', borderRadius:'10px', top:'10px', zIndex:"100"}} className='m-auto'>
                <Container>
                    <Navbar.Brand href="#home">Impact Influencers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav style={{color:'white'}}>
                            {/* <Nav.Link href="#about-us">About Us</Nav.Link> */}
                            <Nav.Link href="#organizations">Organizations</Nav.Link>
                            <NavDropdown title="Join us" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#join-us/3.1">As influencer</NavDropdown.Item>
                                <NavDropdown.Item href="#join-us/3.2">As Organization</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar