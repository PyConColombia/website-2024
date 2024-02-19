import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

const Topics = () => {
  return (
    <section id="topics">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            <span>Also you can talk about other general topics:</span>
          </Col>
          <Col xs={12}>
            <div className="list">
              <span className="element">INCLUSION & DIVERSITY</span>
              <Image
                src="/images/icons/topics/icon-5.webp"
                alt="inclusion & diversity"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">COMMUNITY</span>
              <Image
                src="/images/icons/topics/icon-6.webp"
                alt="community"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">INDUSTRY & ACADEMY BONDING</span>
              <Image
                src="/images/icons/topics/icon-7.webp"
                alt="data science"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">PEOPLE IN STEM</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Topics;
