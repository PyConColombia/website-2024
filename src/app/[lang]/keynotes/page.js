'use server';

import React from 'react';
import propTypes from 'prop-types';
import Keynotes from './components/Keynotes';

import en from '@/data/dictionaries/en.json';
import es from '@/data/dictionaries/es.json';

export async function generateMetadata({ params: { lang } }, parent) {
  const dataLang = lang === 'en' ? en : es;
  const dataSection = dataLang?.sections;
  const keynotesData = dataSection.keynotes;

  return {
    title: keynotesData.title
  };
}

const Page = ({ params: { lang } }) => {
  return <Keynotes lang={lang} />;
};

Page.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string
  })
};

export default Page;
