import React from 'react'

import Layout from 'components/layout';
import CallSpeakers from 'components/commons/CallSpeakers';
import Title from 'components/commons/Title';

const callForProposals = () => {
  return (
    <Layout>
      <Title />

      <CallSpeakers />
    </Layout>
  )
}

export default callForProposals
