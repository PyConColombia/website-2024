'use client';

import React from 'react';
import propTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';
import teamList from '@/data/team.json';

import Avatar from '@/app/[lang]/team/images/avatar.jpeg';

const Speakers = ({ params: { lang } }) => {
  return (
    <>
      {teamList.map((team) => (
        <Row key={team.id}>
          <Col md={4}>
            <Link href={`/${lang}/team/${team.id}`} locale={lang}>
              <Image src={Avatar} width={200} height={200} alt="Picture of the author" />
            </Link>
          </Col>
          <Col md={8}>
            <Link href={`/${lang}/team/${team.id}`} locale={lang}>
              <h1>
                {team.first_name} {team.last_name}
              </h1>
              <h2>{team.affiliation}</h2>
            </Link>
            <Link href={`https://twitter.com/${team.twitter}`} target="_blank">
              <span>{team.twitter}</span>
            </Link>
          </Col>
        </Row>
      ))}
    </>
  );
};

Speakers.propTypes = {
  params: propTypes.shape({
    lang: propTypes.string.isRequired
  }).isRequired
};

export default Speakers;
