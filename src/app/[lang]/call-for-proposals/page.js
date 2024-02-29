import React from 'react';

import CallSpeakers from '@/app/[lang]/components/commons/CallSpeakers';
import Title from './components/Title';
import Content from './components/Content';

export const metadata = {
  title: 'Call for proposals'
};

const callForProposals = () => {
  return (
    <>
      <Title />
      <Content />
      <CallSpeakers />
    </>
  );
};

export default callForProposals;
