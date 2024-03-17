'use server';

import React from 'react';

import Welcome from '@/app/[lang]/components/LandingPage/Welcome';
// import Technologies from '@/components/LandingPage/Technologies';
// import Sponsors from '@/components/LandingPage/Sponsors';
import Contact from '@/app/[lang]/components/LandingPage/Contact';
import Keynotes from '@/app/[lang]/keynotes/page';
import CallSpeakers from '@/app/[lang]/components/commons/CallSpeakers';
import Sponsors from '@/app/[lang]/sponsors/page';
// import Speakers from '@/components/LandingPage/Speakers';

export default async function Page({ params: { lang } }) {
  return (
    <>
      <Welcome params={{ lang }} />
      {/* <Technologies />
      <Speakers />
      <Sponsors /> */}
      <Keynotes params={{ lang }} />
      <CallSpeakers />
      <Sponsors params={{ lang }} />
      <Contact />
    </>
  );
}
