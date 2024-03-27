import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

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
                    <span className="bold">Diversity Scholarships</span>
                  </h2>
                  <span className="closes-date">
                    <FontAwesomeIcon icon={faCalendar} /> Closes at April xxx 2024
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Title;
