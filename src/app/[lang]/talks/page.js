import React from 'react';
import propTypes from 'prop-types';
import talksList from '@/data/talks.json';
import Link from 'next/link';

const Talks = ({ params: { lang } }) => {
  return (
    <main>
      {talksList.map((talk) => (
        <Link key={talk.id} href={`./talks/${talk.id}`} locale={lang}>
          <h1>{talk.title[lang]}</h1>
        </Link>
      ))}
    </main>
  );
};

Talks.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string.isRequired
  }).isRequired
};

export default Talks;
