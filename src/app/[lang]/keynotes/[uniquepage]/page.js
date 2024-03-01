import React from 'react';
import propTypes from 'prop-types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import speakerslist from '@/data/speakers.json';
import talksList from '@/data/talks.json';
import en from '@/data/dictionaries/en.json';
import es from '@/data/dictionaries/es.json';

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
    openGraph: {
      images: [
        {
          url: `/images/keynote/${keynoteData.photo}`,
          width: 500,
          height: 500
        }
      ]
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

  return (
    <>
      <Image
        src={`/images/keynote/${speaker.photo}`}
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <h1>
        {speaker.first_name} {speaker.last_name}
      </h1>
      <h2>{speaker.affiliation}</h2>
      <h3>{speaker.country_residence}</h3>
      <ul>
        <li>
          <Link href={speaker.facebook} target="_blank">
            {speaker.facebook}
          </Link>
        </li>
        <li>
          <Link href={speaker.twitter} target="_blank">
            {speaker.twitter}
          </Link>
        </li>
        <li>
          <Link href={speaker.linkedin} target="_blank">
            {speaker.linkedin}
          </Link>
        </li>
        <li>
          <Link href={speaker.github} target="_blank">
            {speaker.github}
          </Link>
        </li>
        <li>
          <Link href={speaker.website} target="_blank">
            {speaker.website}
          </Link>
        </li>
      </ul>
      {speaker.biography ? <p>{speaker.biography[lang]}</p> : null}
      <h3>Talks</h3>
      {talks.map((talk) => (
        <Link key={talk.id} href={`/talks/${talk.id}`} locale={lang}>
          <h1>{talk.title[lang]}</h1>
        </Link>
      ))}
    </>
  );
};

Speaker.propTypes = {
  params: propTypes.shape({
    uniquepage: propTypes.string,
    lang: propTypes.string
  })
};

export default Speaker;
