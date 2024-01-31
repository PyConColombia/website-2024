import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Topics = () => {
  return (
    <section id="topics">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            <span>Also you can talk about other general topics:</span>
          </Col>
          <Col xs={12}>

          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Topics
