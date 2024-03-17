import React from 'react';
import propTypes from 'prop-types';

import Sponsors from './components/Sponsors';

import en from '@/data/dictionaries/en.json';
import es from '@/data/dictionaries/es.json';

export async function generateMetadata({ params: { lang } }, parent) {
  const dataLang = lang === 'en' ? en : es;
  const dataSection = dataLang?.sections;
  const sponsorsData = dataSection.sponsors;

  return {
    title: sponsorsData.title
  };
}

const Page = ({ params: { lang } }) => {
  return <Sponsors lang={lang} />;
};

Page.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string
  })
};

export default Page;
