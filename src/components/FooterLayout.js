import React, { useState } from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  faTiktok,
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faGithubAlt
} from '@fortawesome/free-brands-svg-icons';
import { StaticImage } from 'gatsby-plugin-image';
import ModalDocFooter from './modal/ModalDoc';
import ModalCodeOfConduct from './modal/ModalCodeOfConduct';
import ModalCodeOfConductE from './modal/ModalCodeOfConductE';
import HealthPolicy from './modal/HealhPolicy';

const FooterLayout = () => {
  const [showCode, setShowCode] = useState(false);
  const [showCodeE, setShowCodeE] = useState(false);
  const [showHealthPolicy, setShowHealthPolicy] = useState(false);
  const handleShowCode = () => setShowCode(!showCode);
  const handleShowCodeE = () => setShowCodeE(!showCodeE);
  const handleShowHealthPolicy = () => setShowHealthPolicy(!showHealthPolicy);

  const docsUrlLegal = [
    {
      name: 'Acta de constitución',
      url: 'https://drive.google.com/file/d/1Xtwy38BR6d0CTDZoYYvizop-JdIIGfuA/preview'
    },
    {
      name: 'Renovación ESAL',
      url: 'https://drive.google.com/file/d/1rgCZNkkVJWxWy9e5iUS3rZGEW1jVYMHH/preview'
    },
    {
      name: 'Rut',
      url: 'https://drive.google.com/file/d/1p2CAwGxSXsH9kg5GgMav29_QkmAhNQ6V/preview'
    },
    {
      name: 'Cámara de comercio',
      url: 'https://drive.google.com/file/d/1DZfYrftzffmNBLpJDQgp7xXgbfQlcDLN/preview'
    },
    {
      name: 'Estatutos',
      url: 'https://drive.google.com/file/d/1znErsdiiKNr9ct2qN_d_kYhsSCJdE3rD/preview'
    },
    {
      name: 'Certificación DIAN 2023',
      url: 'https://drive.google.com/file/d/1x525xP9tmu6WXSQi7y0VlJc6kZEIfgca/preview'
    },
    {
      name: 'Fundadores PyCon',
      url: 'https://drive.google.com/file/d/1jOhE7B7KscOA_eE5jm5pzLxmagy5zvoC/preview'
    },
    {
      name: 'Cargos gerenciales',
      url: 'https://drive.google.com/file/d/1QJrN5_J3N7ZVhgE0g0ioyv8uIJ51HbOX/preview'
    },
    {
      name: 'Donantes',
      url: 'https://drive.google.com/file/d/1VL7ruPPVTteir3-L-QM9lTo2OFEDyNFO/preview'
    }
  ];

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
                {docsUrlLegal.map(({ name, url }, index) => (
                  <li key={index}>
                    <ModalDocFooter title={name} url={url} />
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={12} md={6} lg={4} className="footer-column">
              <div>Otros</div>
              <div className="footer-separator"></div>
              <ul>
                <li onClick={handleShowCode}>Code of Conduct</li>
                <li onClick={handleShowCodeE}>Code of Conduct Enforcement Procedure</li>
                <li onClick={handleShowHealthPolicy}>Health & Safety Policy</li>
              </ul>

              <div>Contacto</div>
              <div className="footer-separator"></div>
              <ul>
                <li>
                  <Link to="mailto:hello@pycon.co">hello@pycon.co</Link>
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
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
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

        <ModalCodeOfConduct show={showCode} handleClose={handleShowCode} />
        <ModalCodeOfConductE show={showCodeE} handleClose={handleShowCodeE} />
        <HealthPolicy show={showHealthPolicy} handleClose={handleShowHealthPolicy} />
      </div>
    </footer>
  );
};

export default FooterLayout;
