import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Welcome from 'components/LandingPage/Welcome';
// import Technologies from '../components/LandingPage/Technologies';
// import Sponsors from '../components/LandingPage/Sponsors';
import Contact from '../components/LandingPage/Contact';
// import Speakers from '../components/LandingPage/Speakers';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <main>
        <Welcome />
        {/* <Technologies />
        <Speakers />
        <Sponsors /> */}
        <Contact />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>PyCon Colombia 2024</title>;

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
