import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import Link from 'next/link';

const CallSpeakers = () => {
  return (
    <section id="call-speakers">
      <div className="background">
        <div className="content">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={2} lg={2} className="d-none d-sm-none d-lg-block">
                <div className="icon">
                  <Image src="/images/megaphone.webp" width={300} height={300} className="logo" />
                </div>
              </Col>
              <Col xs={12} md={6} lg={5}>
                <div className="text">
                  <h1>Call for proposals</h1>
                  <p className="description">
                    Would you like to submit a proposal to participate in PYCON 24? We have topics
                    such as data science, machine learning, web development, and much more.
                  </p>
                  <p className="description">
                    Detailed information and FAQ <Link href="/call-for-proposals">here</Link>.
                  </p>
                  <Button
                    variant="primary"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSelYKA6txm_uTmpgqydOYw27uKwaY701Vy4qJac1NCzYFq7Ow/viewform"
                    target="_blank"
                    className="button-submit">
                    Register now
                  </Button>
                </div>
              </Col>
              <Col xs={12} md={2} lg={2} className="d-none d-sm-none d-lg-block"></Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default CallSpeakers;
