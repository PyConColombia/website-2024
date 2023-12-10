import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';

const FooterLayout = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={5} className="footer-column">
              <div className="logo">
                <StaticImage src="../static/images/pycon-logo.svg" alt="PyCon Colombia logo" />
              </div>
            </Col>
            <Col xs={12} md={3} className="footer-column">
              <div className="footer-label">Legales</div>
              <div className="footer-separator"></div>
              <ul>
                <li>Términos y Condiciones</li>
                <li>Privacidad</li>
              </ul>
            </Col>
            <Col xs={12} md={4} className="footer-column">
              <div>Otros</div>
              <div className="footer-separator"></div>
              <ul>
                <li>Términos y Condiciones</li>
                <li>Privacidad</li>
              </ul>

              <div>Contacto</div>
              <div className="footer-separator"></div>
              <ul>
                <li>
                  <Link to="mailto:hello@pycon.com">hello@pycon.com</Link>
                </li>
              </ul>

              <div>Síguenos en:</div>
              <ul>
                <li>Términos y Condiciones</li>
                <li>Privacidad</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterLayout;
