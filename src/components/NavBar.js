import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InfluencerModal from './Modals/InfluencerModal';
import OrgModal from './Modals/OrgModal';
import CampModal from './Modals/CampModal';

function NavBar() {
    const [showInflu, setShowInflu] = useState(false);
    const [showOrg, setShowOrg] = useState(false);
    const [showCamp, setShowCamp] = useState(false);
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark" style={{ width: '95%', borderRadius: '10px', top: '5px', zIndex: "100" }} className='m-auto'>
                <Container>
                    <Navbar.Brand href="#home">Impact Influencers</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav style={{ color: 'white' }}>
                            {/* <Nav.Link href="#about-us">About Us</Nav.Link> */}
                            <Nav.Link href="#campaigns" className='mx-2'>Campaigns</Nav.Link>
                            <Nav.Link href="#caseStudy" className='mx-2'>Case Study</Nav.Link>
                            <NavDropdown title="Join us" className='mx-2' id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#" onClick={() => setShowInflu(true)}>As influencer</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={() => setShowOrg(true)}>As Organization</NavDropdown.Item>
                                <NavDropdown.Item href="#" onClick={() => setShowCamp(true)}>Start Campaign</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#testimonials" className='mx-2'>Subscribe</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <InfluencerModal show={showInflu} close={() => setShowInflu(false)} />
            <OrgModal show={showOrg} close={() => setShowOrg(false)} />
            <CampModal show={showCamp} close={() => setShowCamp(false)} />
        </>
    )
}

export default NavBar