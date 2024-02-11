import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { StaticImage } from 'gatsby-plugin-image';

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
            <div className='list'>
              <span className='element'>DATA SCIENCE</span>
              <StaticImage
                src="../../../static/images/icons/icon-1.svg"
                alt="data science"
                className="icon"
              />
              <span className='element'>MACHINE LEARNING</span>
              <StaticImage
                src="../../../static/images/icons/icon-2.svg"
                alt="machine learning"
                className="icon"
              />
              <span className='element'>DEEP LEARNING</span>
              <StaticImage
                src="../../../static/images/icons/icon-3.svg"
                alt="deep learning"
                className="icon"
              />
              <span className='element'>ARTIFICIAL INTELLIGENCE</span>
              <StaticImage
                src="../../../static/images/icons/icon-4.svg"
                alt="artificial intelligence"
                className="icon"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Technical
