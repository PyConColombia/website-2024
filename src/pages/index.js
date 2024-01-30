import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Welcome from 'components/LandingPage/Welcome';
// import Technologies from '../components/LandingPage/Technologies';
// import Sponsors from '../components/LandingPage/Sponsors';
import Contact from 'components/LandingPage/Contact';
import CallSpeakers from 'components/commons/CallSpeakers';
// import Speakers from '../components/LandingPage/Speakers';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Welcome />
      {/* <Technologies />
      <Speakers />
      <Sponsors /> */}
      <CallSpeakers />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>PyCon Colombia 2024</title>
    <meta name="description" content="PyCon Colombia 2024" />
    <meta name="keywords" content="PyCon Colombia 2024" />
    <meta name="author" content="Python Colombia" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/icon" href="/favicon.ico" />
  </>
);

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { ns: { in: ["index"] }, language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
