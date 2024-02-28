import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = () => {
  return (
    <div className="welcome">
      <div className="welcome-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <div className="title-container">
                <h2 className="title">
                  <span className="bold">Keynote Speakers</span>
                </h2>
                <p className="text">We are the new voices</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Title;
