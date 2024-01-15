import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { StaticImage } from 'gatsby-plugin-image';

const CallSpeakers = () => {
  return (
    <section id="call-speakers">
      <div className="background">
        <div className="content">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={2} className="d-none d-sm-none d-md-block">
                <StaticImage
                  src="../../static/images/megaphone.webp"
                  alt="PyCon Colombia logo"
                  className="logo"
                />
              </Col>
              <Col xs={12} md={5}>
                <div className="text">
                  <h1>Call for proposals</h1>
                  <p>
                    Would you like to submit a proposal to participate in PYCON 24? We have topics
                    such as data science, machine learning, web development, and much more.
                  </p>
                  <Button
                    variant="primary"
                    // onClick={onSumitForm}
                    size="lg"
                    id="button-submit">
                    Submit
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={2}></Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default CallSpeakers;
