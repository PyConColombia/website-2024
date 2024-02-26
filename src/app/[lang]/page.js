import React from 'react';
import propTypes from 'prop-types';

import Welcome from '@/app/[lang]/components/LandingPage/Welcome';
// import Technologies from '@/components/LandingPage/Technologies';
// import Sponsors from '@/components/LandingPage/Sponsors';
import Contact from '@/app/[lang]/components/LandingPage/Contact';
import Keynotes from '@/app/[lang]/keynotes/page';
import CallSpeakers from '@/app/[lang]/components/commons/CallSpeakers';
// import Speakers from '@/components/LandingPage/Speakers';

const Page = ({ params: { lang } }) => {
  console.log('lang', lang);

  return (
    <>
      <Welcome />
      {/* <Technologies />
      <Speakers />
      <Sponsors /> */}
      <Keynotes params={{ lang }} />
      <CallSpeakers />
      <Contact />
    </>
  );
};

Page.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string.isRequired
  }).isRequired
};

export default Page;
