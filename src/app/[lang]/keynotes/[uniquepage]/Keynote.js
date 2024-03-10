import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Keynote = ({ speaker, talks, lang }) => {
  return (
    <div>
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
    </div>
  );
};

export default Keynote;
