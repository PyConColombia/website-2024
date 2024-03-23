import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sponsor = ({ level, sponsorData }) => {
  const sponsorSize = {
    diamond: '12',
    platinum: '10',
    gold: '8',
    silver: '6',
    bronze: '4'
  };

  return (
    <Row>
      <Col xs={12} md={sponsorSize[level]}>
        <div className="sponsor-container">
          <Link href={sponsorData.url || ''} target="_blank">
            <Image
              className="img-sponsor"
              src={`/images/sponsor/${sponsorData.image}`}
              alt={sponsorData.name}
              width={300}
              height={300}
            />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default Sponsor;
