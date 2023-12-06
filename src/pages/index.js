import * as React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Welcome from 'components/LandingPage/Welcome';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <main>
        <Welcome />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

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
