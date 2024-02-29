import React from 'react';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({ content }) => {
  return (
    <div className="welcome">
      <div className="welcome-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <div className="title-container">
                <h2 className="title">
                  <span className="bold">{content?.title}</span>
                </h2>
                <p className="text">{content?.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

Title.propTypes = {
  content: propTypes.object
};

export default Title;
