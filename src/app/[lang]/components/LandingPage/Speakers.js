import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Proposals from './Proposals';

const Speakers = () => {
  return (
    <section id="speakers">
      <Container>
        <Row>
          <Col xs={12} md={3}>
            <Image src="/images/carousel.svg" alt="Carousel" width={300} height={300} />
          </Col>
          <Col xs={12} md={7}>
            <Row>
              <Col className="counter-wrapper">
                <div className="counter">
                  <span className="number">+50</span>
                  <br />
                  <span className="description">Speakers</span>
                </div>
              </Col>
              <Col>
                <span>+50</span>
                <span>Speakers</span>
              </Col>
              <Col>
                <span>+50</span>
                <span>Speakers</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>+50</span>
                <span>Speakers</span>
              </Col>
              <Col>
                <span>+50</span>
                <span>Speakers</span>
              </Col>
              <Col>
                <span>+50</span>
                <span>Speakers</span>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={2}>
            <StaticImage src="../../static/images/balloons.svg" alt="Balloons" />
          </Col>
        </Row>
      </Container>

      <Proposals />
    </section>
  );
};

export default Speakers;
