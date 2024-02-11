import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';


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
              <StaticImage
                src="../../../static/images/icons/icon-5.svg"
                alt="inclusion & diversity"
                className="icon"
              />
              <span className="element">COMMUNITY</span>
              <StaticImage
                src="../../../static/images/icons/icon-6.svg"
                alt="community"
                className="icon"
              />
              <span className="element">INDUSTRY & ACADEMY BONDING</span>
              <StaticImage
                src="../../../static/images/icons/icon-7.svg"
                alt="data science"
                className="icon"
              />
              <span className="element">PEOPLE IN STEM</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Topics
