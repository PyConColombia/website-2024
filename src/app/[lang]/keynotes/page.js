'use client';

import React from 'react';
import propTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';
import speakerslist from '@/data/speakers.json';

import Avatar from '@/app/[lang]/speakers/images/avatar.jpeg';

const Speakers = ({ params: { lang } }) => {
  return (
    <>
      {speakerslist.map(
        (speaker) =>
          speaker.type === 'keynote' && (
            <Row key={speaker.id}>
              <Col md={4}>
                <Link href={`/keynotes/${speaker.id}`} locale={lang}>
                  <Image src={Avatar} width={200} height={200} alt="Picture of the author" />
                </Link>
              </Col>
              <Col md={8}>
                <Link href={`/keynotes/${speaker.id}`} locale={lang}>
                  <h1>
                    {speaker.first_name} {speaker.last_name}
                  </h1>
                  <h2>{speaker.affiliation}</h2>
                </Link>
                <Link href={`https://twitter.com/${speaker.twitter}`} target="_blank">
                  <span>{speaker.twitter}</span>
                </Link>
              </Col>
            </Row>
          )
      )}
    </>
  );
};

Speakers.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string.isRequired
  }).isRequired
};

export default Speakers;
