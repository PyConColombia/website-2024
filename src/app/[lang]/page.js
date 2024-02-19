import React from 'react';

import Welcome from '@/app/[lang]/components/LandingPage/Welcome';
// import Technologies from '@/components/LandingPage/Technologies';
// import Sponsors from '@/components/LandingPage/Sponsors';
import Contact from '@/app/[lang]/components/LandingPage/Contact';
import CallSpeakers from '@/app/[lang]/components/commons/CallSpeakers';
// import Speakers from '@/components/LandingPage/Speakers';

export default async function Page({ lang }) {
  return (
    <>
      <Welcome />
      {/* <Technologies />
      <Speakers />
      <Sponsors /> */}
      <CallSpeakers />
      <Contact />
    </>
  );
}
