import React from 'react';
import propTypes from 'prop-types';
import talksList from '@/data/talks.json';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return talksList.map((p) => ({
    uniquepage: p.id.toString()
  }));
}

const UniquePage = ({ params: { uniquepage, lang } }) => {
  const talk = talksList.find((p) => p.id.toString() === uniquepage);

  if (!talk) {
    notFound();
  }

  return (
    <>
      {talk.title ? <h1>{talk.title[lang]}</h1> : null}

      <iframe
        src="https://www.youtube.com/embed/3YxneS1eyfM"
        frameBorder="0"
        allowFullScreen=""
        className="video"></iframe>
      <hr />

      {talk.speakers.map((speaker) => (
        <p key={speaker}>{speaker}</p>
      ))}
      <h2>Authors</h2>
      <ul>
        {talk.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {talk.description ? <p>{talk.description[lang]}</p> : null}

      {talk.summary ? (
        <>
          <h2>Summary</h2>
          <p>{talk.summary[lang]}</p>
        </>
      ) : null}
    </>
  );
};

UniquePage.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string.isRequired,
    uniquepage: propTypes.string.isRequired
  }).isRequired
};

export default UniquePage;
