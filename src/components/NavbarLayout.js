import React from 'react';
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link, useI18next } from 'gatsby-plugin-react-i18next';

const NavbarLayout = () => {
  const { languages, originalPath, i18n, language } = useI18next();
  return (
    <Navbar
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="md"
      className="navbar-main">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-item">
              Main
            </Nav.Link>
            <Nav.Link href="/call-for-proposals" className="nav-item">
              CFP
            </Nav.Link>
            {/* <Nav.Link href="" className="nav-item">
              Speakers
            </Nav.Link>
            <Nav.Link href="" className="nav-item">
              Schedule
            </Nav.Link>
            <Nav.Link href="" className="nav-item">
              Sponsors
            </Nav.Link>
            <Nav.Link href="" className="nav-item">
              Team
            </Nav.Link> */}
          </Nav>
          <Nav>
            {/* <NavDropdown title="2024">
              {[2017, 2018, 2019, 2020, 2021, 2022, 2023].map((year) => (
                <NavDropdown.Item key={year}>
                  <a
                    href={`https://${year}.pycon.co`}
                    style={{
                      textDecoration: 'none'
                    }}>
                    {year}
                  </a>
                </NavDropdown.Item>
              ))}
            </NavDropdown> */}
            {/* <Button>Register</Button> */}
            {/* <NavDropdown title={language} id="collapsible-nav-dropdown">
              {languages.map(
                (lng) =>
                  lng !== language && (
                    <NavDropdown.Item key={lng}>
                      <Link
                        to={originalPath}
                        language={lng}
                        style={{
                          textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none'
                        }}>
                        {lng}
                      </Link>
                    </NavDropdown.Item>
                  )
              )}
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLayout;
