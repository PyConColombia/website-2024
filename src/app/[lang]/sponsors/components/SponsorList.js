import React from 'react';
import Sponsor from './Sponsor';

const SponsorList = ({ level, list }) => {
  return (
    <>
      {list.map((sponsor, index) => (
        <Sponsor key={index} level={level} sponsorData={sponsor} />
      ))}
    </>
  );
};

export default SponsorList;
