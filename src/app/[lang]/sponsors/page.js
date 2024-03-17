import React from 'react';
import propTypes from 'prop-types';

import Sponsors from './components/Sponsors';

const Page = ({ params: { lang } }) => {
  return <Sponsors lang={lang} />;
};

Page.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string
  })
};

export default Page;
