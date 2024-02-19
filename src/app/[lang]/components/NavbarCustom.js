'use client';

import React from 'react';
// import { useRouter, useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import { useI18n } from '@/contexts/I18nContext';
// import { locales } from '@/utils/locale';

const NavbarCustom = ({ lang }) => {
  const i18nDictionary = useI18n();
  // const router = useRouter();
  // const urlSegments = useSelectedLayoutSegments();

  // const onChangeLocale = (locale) => {
  //   router.replace(`/${locale}/${urlSegments.join('/')}`);
  // };

  return (
    <Navbar
      sticky="top"
      bg="dark"
      data-bs-theme="dark"
      collapseOnSelect
      expand="md"
      className="navbar-main">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} href={`/${lang}/resources`} className="nav-item">
              {i18nDictionary?.navbar?.resources}
            </Nav.Link>
            <NavDropdown title={i18nDictionary?.navbar?.schedule} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} href={`/${lang}/schedule`}>
                {i18nDictionary?.navbar?.schedule}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href={`/${lang}/speakers`}>
                {i18nDictionary?.navbar?.speakers}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href={`/${lang}/keynotes`}>
                {i18nDictionary?.navbar?.keynotes}
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href={`/${lang}/talks`}>
                {i18nDictionary?.navbar?.talks}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href={`/${lang}/team`} className="nav-item">
              {i18nDictionary?.navbar?.team}
            </Nav.Link> */}
            <Nav.Link as={Link} href={`/${lang}`} className="nav-item">
              {i18nDictionary?.navbar?.home}
            </Nav.Link>
            <Nav.Link as={Link} href={`/${lang}/call-for-proposals`} className="nav-item">
              {i18nDictionary?.navbar?.cfp}
            </Nav.Link>
          </Nav>
          {/* <Nav>
            <NavDropdown title={lang} id="collapsible-nav-dropdown" onSelect={onChangeLocale}>
              {locales.map(
                (locale) =>
                  locale !== lang && (
                    <NavDropdown.Item key={locale} eventKey={locale}>
                      {locale}
                    </NavDropdown.Item>
                  )
              )}
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarCustom.propTypes = {
  lang: propTypes.string
};

export default NavbarCustom;
