import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import Topics from './Topics';
import Technical from './Technical';

const Title = () => {
  return (
    <div className="call-for-proposals">
      <div className="welcome">
        <div className="welcome-bg">
          <Container>
            <Row className="justify-content-center">
              <Col xs={10} md={6}>
                <div className="title-container">
                  <h2 className="title">
                    <span className="bold">Call for proposals</span>
                  </h2>
                  <p className="text">
                    Calling on all Python enthusiasts! Submit your proposals for PyCon Colombia 2024
                    now. Don&apos;t miss the opportunity to share your insights
                  </p>
                  <span className="closes-date">
                    <FontAwesomeIcon icon={faCalendar} /> Closes at March 11th 2024
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Technical />
      <div className="decoration-1-wrapper">
        <div className="decoration-1"></div>
      </div>
      <Topics />
      <div className="decoration-2-wrapper">
        <div className="decoration-2"></div>
      </div>
    </div>
  );
};

export default Title;
