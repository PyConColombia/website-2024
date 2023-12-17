import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faTiktok,
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';

const FooterLayout = () => {
  return (
    <footer id="footer">
      <div className="footer-wrapper">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={5} className="footer-column">
              <div className="logo">
                <StaticImage src="../static/images/pycon-logo.svg" alt="PyCon Colombia logo" />
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className="footer-column">
              <div className="footer-label">Legales</div>
              <div className="footer-separator"></div>
              <ul>
                <li>Acta de constitución</li>
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4} className="footer-column">
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
              <div className="footer-separator"></div>
              <Row>
                <div className="footer-social">
                  <a
                    href="https://twitter.com/pyconcolombia"
                    target="_blank"
                    rel="noreferrer"
                    className="">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faTwitter} />
                    </div>
                  </a>
                  <a href="https://www.facebook.com/pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faFacebookF} />
                    </div>
                  </a>
                  <a
                    href="https://www.instagram.com/pyconcolombia/"
                    target="_blank"
                    rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faInstagram} />
                    </div>
                  </a>
                  <a href="https://www.youtube.com/pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                      <div className="fa-stack">
                        <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                        <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faYoutube} />
                      </div>
                    </div>
                  </a>
                  <a href="https://github.com/pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGithubAlt} />
                    </div>
                  </a>
                  <a href="https://www.tiktok.com/@pyconcolombia" target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faTiktok} />
                    </div>
                  </a>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default FooterLayout;
