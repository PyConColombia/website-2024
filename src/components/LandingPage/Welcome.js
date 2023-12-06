import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';

const Welcome = () => {
  return (
    <section id="welcome">
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
      </Container>
    </section>
  );
};

export default Welcome;
