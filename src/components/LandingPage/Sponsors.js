import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sponsors = () => {
  return (
    <section id="sponsors">
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <h2 className="title">Sponsors</h2>
            <p className="description">
              PyCon Colombia can be your platform to gain brand recognition, take leads and recruit
              from an audience of highly skilled professionals!
            </p>
          </Col>
          <Col xs={12} md={7}></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Sponsors;
