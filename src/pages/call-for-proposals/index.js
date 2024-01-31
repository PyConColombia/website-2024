import React from 'react'

import Layout from 'components/layout';
import CallSpeakers from 'components/commons/CallSpeakers';
import Title from './components/Title';
import Content from './components/content';

const callForProposals = () => {
  return (
    <Layout>
      <Title />
      <Content />
      <CallSpeakers />
    </Layout>
  )
}

export default callForProposals
