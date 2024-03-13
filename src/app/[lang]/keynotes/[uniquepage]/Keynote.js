import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faXTwitter,
  faLinkedinIn,
  faGithubAlt,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

const Keynote = ({ speaker, talks, lang }) => {
  const colorBorderSpeaker = ['border-pink', 'border-yellow', 'border-purple', 'border-blue'];
  // const colorBorderTextSpeaker = [
  //   'text-border-pink',
  //   'text-border-yellow',
  //   'text-border-purple',
  //   'text-border-blue'
  // ];
  const randomColor = (Math.random() * colorBorderSpeaker.length) | 0;

  return (
    <section id="keynote">
      <div className="keynote-bg">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="image-wrapper">
                <Link href={`/${lang}/keynotes/${speaker.id}`}>
                  <Image
                    className={`img-keynote ${colorBorderSpeaker[randomColor]}`}
                    src={`/images/${speaker.type}/${speaker.photo}`}
                    alt="Keynote Image"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className="name">
                <h3 className={`keynote-title`}>
                  <span className="bold">
                    {speaker.first_name} {speaker.last_name}
                  </span>
                  {speaker.country_origin && (
                    <span className="flag">
                      {' '}
                      <span className={`fi fi-${speaker.country_origin}`}></span>
                    </span>
                  )}
                </h3>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div className="biography">
                {speaker.biography ? <p>{speaker.biography[lang]}</p> : null}
              </div>
            </Col>
            {/* <h3>Talks</h3>
            {talks.map((talk) => (
              <Link key={talk.id} href={`/talks/${talk.id}`} locale={lang}>
                <h1>{talk.title[lang]}</h1>
              </Link>
            ))} */}
          </Row>
          <Row className="justify-content-center">
            {/* <Col xs={12} md={5}>
              <div>
                <span className={`text-border ${colorBorderTextSpeaker[randomColor]}`}>
                  <FontAwesomeIcon icon={faCalendarAlt} /> The new age in fintech | 4 Junio 2024
                </span>
              </div>
            </Col> */}
            <Col xs={12} md={3}>
              <div className={`social-icons`}>
                {speaker.facebook && (
                  <a
                    href={`https://www.facebook.com/${speaker.facebook}`}
                    target="_blank"
                    rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faFacebook} />
                    </div>
                  </a>
                )}
                {speaker.twitter && (
                  <a
                    href={`https://twitter.com/${speaker.twitter}`}
                    target="_blank"
                    rel="noreferrer"
                    className="">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
                    </div>
                  </a>
                )}
                {speaker.linkedin && (
                  <a
                    href={`https://www.linkedin.com/in/${speaker.linkedin}`}
                    target="_blank"
                    rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
                    </div>
                  </a>
                )}
                {speaker.github && (
                  <a href={`https://github.com/${speaker.github}`} target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGithubAlt} />
                    </div>
                  </a>
                )}
                {speaker.website && (
                  <a href={speaker.website} target="_blank" rel="noreferrer">
                    <div className="fa-stack">
                      <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                      <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGlobe} />
                    </div>
                  </a>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

Keynote.propTypes = {
  speaker: PropTypes.object,
  talks: PropTypes.array,
  lang: PropTypes.string
};

export default Keynote;
