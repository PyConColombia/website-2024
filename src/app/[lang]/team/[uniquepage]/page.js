import React from 'react';
import propTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import teamlist from '@/data/team.json';
import Avatar from '@/app/[lang]/speakers/images/avatar.jpeg';

export async function generateStaticParams() {
  return teamlist.map((p) => ({
    uniquepage: p.id.toString()
  }));
}

const Team = ({ params: { uniquepage, lang } }) => {
  const teamMember = teamlist.find((p) => p.id.toString() === uniquepage);

  return (
    <>
      <Image src={Avatar} width={200} height={200} placeholder="blur" alt="Picture of the author" />
      <h1>
        {teamMember.first_name} {teamMember.last_name}
      </h1>
      <h2>{teamMember.affiliation}</h2>
      <h3>{teamMember.country_residence}</h3>
      <ul>
        <li>
          <Link href={teamMember.facebook} target="_blank">
            {teamMember.facebook}
          </Link>
        </li>
        <li>
          <Link href={teamMember.twitter} target="_blank">
            {teamMember.twitter}
          </Link>
        </li>
        <li>
          <Link href={teamMember.linkedin} target="_blank">
            {teamMember.linkedin}
          </Link>
        </li>
        <li>
          <Link href={teamMember.github} target="_blank">
            {teamMember.github}
          </Link>
        </li>
        <li>
          <Link href={teamMember.website} target="_blank">
            {teamMember.website}
          </Link>
        </li>
      </ul>
      {teamMember.biography ? <p>{teamMember.biography[lang]}</p> : null}
    </>
  );
};

Team.propTypes = {
  params: propTypes.shape({
    uniquepage: propTypes.string,
    lang: propTypes.string
  })
};

export default Team;
