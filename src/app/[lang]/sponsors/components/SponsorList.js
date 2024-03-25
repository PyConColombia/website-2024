import React from 'react';
import Sponsor from './Sponsor';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SponsorList = ({ level, list }) => {
  return (
    list.length > 0 && (
      <div className="card-sponsor">
        <Row>
          <Col xs={12} md={4}>
            <span className={`badge ${level}`}>{level}</span>
          </Col>
          <Col xs={12} md={8}>
            <hr className="separator" />
          </Col>
        </Row>
        <Row>
          {list.map((sponsor, index) => (
            <Sponsor key={index} level={level} sponsorData={sponsor} />
          ))}
        </Row>
      </div>
    )
  );
};

export default SponsorList;
