import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

const Technical = () => {
  return (
    <section id="technical">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            We welcome a diverse range of proposals related to various technical topics. Share your
            expertise on any of the following subjects:
          </Col>
          <Col xs={12}>
            <div className="list">
              <span className="element">DATA SCIENCE</span>
              <Image
                src="/images/icons/technical/icon-1.webp"
                alt="data science"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">MACHINE LEARNING</span>
              <Image
                src="/images/icons/technical/icon-2.webp"
                alt="machine learning"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">DEEP LEARNING</span>
              <Image
                src="/images/icons/technical/icon-3.webp"
                alt="deep learning"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">ARTIFICIAL INTELLIGENCE</span>
              <Image
                src="/images/icons/technical/icon-4.webp"
                alt="artificial intelligence"
                className="icon"
                width={30}
                height={30}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technical;
