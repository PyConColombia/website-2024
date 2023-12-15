import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { StaticImage } from 'gatsby-plugin-image';

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="welcome-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={11}>
              <div className="title-container">
                <h2 className="title">
                  <span className="bold">Del 23 al 30 de Junio |</span>
                  <span> Medellín - Colombia</span>
                </h2>
                <StaticImage src="../../static/images/pycon-logo.svg" alt="PyCon Colombia logo" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={9}>
              <Row>
                <Col xs={12}>
                  <div className="description">
                    <span>Ready to journey back in time</span>
                    <br />
                    <span className="bold">while building the future?</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={4}>
                  <div className="button-container">
                    <Button className="btn btn-primary btn-welcome">Get your tickets</Button>
                  </div>
                </Col>
                <Col xs={12} md={4}></Col>
                <Col xs={12} md={4}>
                  <div className="icons-container">
                    <StaticImage src="../../static/images/welcome-icons.svg" alt="Welcome Icons" />
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={12} md={2}></Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Welcome;
