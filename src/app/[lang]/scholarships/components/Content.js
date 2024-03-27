import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Question from './Question';

const Content = () => {
  return (
    <div className="call-for-proposals">
      <div className="content minor-padding">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <p>
                Python&apos;s presence in software development worldwide continues to increase,
                leading to new outcomes changing our time. At PyCon Colombia, in addition to
                promoting open source and sharing among all attendees, we strive every year to
                ensure that our community is as accessible and diverse as possible. We see diversity
                and inclusion as a benefit to the ecosystem and its individuals.
              </p>
              <p>
                We aim for PyCon Colombia to be inclusive of the entire Python community in our
                country. In order to help alleviate financial barriers to attending the conference,
                the PyCon organizing committee is offering scholarships to individuals who face
                financial obstacles, including students and members of underrepresented groups
                within the Python community. These scholarships cover the cost of conference
                admission.
              </p>
              <p>
                It should be noted that scholarship recipients will be responsible for covering all
                other expenses, such as travel, accommodations, visa fees, and transportation.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <Question />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Content;
