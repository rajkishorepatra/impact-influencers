import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import InfluencerModal from "./Modals/InfluencerModal";
import OrgModal from "./Modals/OrgModal";
import CampModal from "./Modals/CampModal";
import Button from "react-bootstrap/Button";
import { UserAuth } from "../context/AuthContext";

function NavBar() {
  const [showInflu, setShowInflu] = useState(false);
  const [showOrg, setShowOrg] = useState(false);
  const [showCamp, setShowCamp] = useState(false);
  const { currentUser } = UserAuth();
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="display-6 fw-bold">
            Impact Influencers
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
            <Nav.Link className="mx-2" href="#about-us">About Us</Nav.Link>
              <LinkContainer to="/campaigns">
                <Nav.Link className="mx-2">Campaigns</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/case-studies">
                <Nav.Link className="mx-2">Case Study</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="Join us"
                className="mx-2"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item href="#" onClick={() => setShowInflu(true)}>
                  As influencer
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowOrg(true)}>
                  As Organization
                </NavDropdown.Item>
                <NavDropdown.Item href="#" onClick={() => setShowCamp(true)}>
                  Start Campaign
                </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="#subscribe" className='mx-2'>Subscribe</Nav.Link> */}
              {currentUser ? null : (
                <LinkContainer to="/register">
                  <button className="mx-2 btn btn-warning">
                    Login / Register
                  </button>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <InfluencerModal show={showInflu} close={() => setShowInflu(false)} />
      <OrgModal show={showOrg} close={() => setShowOrg(false)} />
      <CampModal show={showCamp} close={() => setShowCamp(false)} />
    </>
  );
}

export default NavBar;
