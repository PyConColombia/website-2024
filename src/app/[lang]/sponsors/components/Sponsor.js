import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sponsor = ({ level, sponsorData }) => {
  console.log(sponsorData);

  return (
    <div className="card-sponsor">
      <Row>
        <Col xs={12} md={3}>
          <span className={`badge ${level}`}>{level}</span>
        </Col>
        <Col xs={12} md={9}>
          <hr className="separator" />
        </Col>
      </Row>
    </div>
  );
};

export default Sponsor;
