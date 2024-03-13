import React from 'react';
import propTypes from 'prop-types';
import { notFound } from 'next/navigation';

import speakerslist from '@/data/speakers.json';
import talksList from '@/data/talks.json';
import en from '@/data/dictionaries/en.json';
import es from '@/data/dictionaries/es.json';
import Keynote from './Keynote';

export async function generateStaticParams() {
  return speakerslist.map((p) => ({
    uniquepage: p.id.toString()
  }));
}

export async function generateMetadata({ params: { uniquepage, lang } }, parent) {
  const dataLang = lang === 'en' ? en : es;
  const dataSection = dataLang?.sections;
  const keynotesData = dataSection.keynotes;
  const keynoteData = speakerslist.find((p) => p.id.toString() === uniquepage);

  return {
    title: `${keynoteData.first_name} ${keynoteData.last_name} | ${keynotesData.title}`,
    description: `${keynoteData.biography[lang]}`,
    openGraph: {
      title: `${keynoteData.first_name} ${keynoteData.last_name} | ${keynotesData.title}`,
      images: [
        {
          url: `/images/keynote/${keynoteData.photo}`,
          width: 200,
          height: 200
        }
      ],
      description: `${keynoteData.biography[lang]}`
    }
  };
}

const Speaker = ({ params: { uniquepage, lang } }) => {
  const speaker = speakerslist.find((p) => p.id.toString() === uniquepage);
  let talks = [];

  if (!speaker) {
    console.info('speaker not found');
    notFound();
  } else {
    talks = talksList.filter((talk) => talk.speakers.includes(speaker.id));
  }

  return <Keynote speaker={speaker} talks={talks} lang={lang} />;
};

Speaker.propTypes = {
  params: propTypes.shape({
    uniquepage: propTypes.string,
    lang: propTypes.string
  })
};

export default Speaker;
