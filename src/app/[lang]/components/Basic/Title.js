import React from 'react';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = ({ title, description }) => {
  return (
    <div className="welcome">
      <div className="welcome-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={6}>
              <div className="title-container">
                <h2 className="title">
                  <span className="bold">{title}</span>
                </h2>
                <p className="text">{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

Title.propTypes = {
  title: propTypes.string,
  description: propTypes.string
};

export default Title;
