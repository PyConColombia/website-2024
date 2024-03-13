import React from 'react';
import Link from 'next/link';
import propTypes from 'prop-types';
import Ratio from 'react-bootstrap/Ratio';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faXTwitter,
  faLinkedinIn,
  faGithubAlt,
  faFacebook
} from '@fortawesome/free-brands-svg-icons';

const Card = ({ speakerData, reverse, index, lang }) => {
  const colorBorderSpeaker = ['border-pink', 'border-yellow', 'border-purple', 'border-blue'];
  // const colorBerderTextSpeaker = [
  //   'text-border-pink',
  //   'text-border-yellow',
  //   'text-border-purple',
  //   'text-border-blue'
  // ];

  return (
    <Row className="keynote-card">
      <Col xs={12} md={{ span: 4, order: reverse ? 'last' : 'first' }}>
        <Ratio aspectRatio="1x1">
          <Link href={`/${lang}/keynotes/${speakerData.id}`}>
            <Image
              className={`img-keynote ${colorBorderSpeaker[(index + 1) % colorBorderSpeaker.length]}`}
              src={`/images/${speakerData.type}/${speakerData.photo}`}
              alt="Keynote Image"
              width={300}
              height={300}
            />
          </Link>
        </Ratio>
      </Col>
      <Col xs={12} md={8}>
        <Row>
          <Col xs={12} md={{ span: 8, order: reverse ? 'last' : 'first' }}>
            <h3 className={`keynote-title ${reverse ? 'text-right' : 'text-left'}`}>
              <span className="bold">
                {speakerData.first_name} {speakerData.last_name}
              </span>
              {speakerData.country_origin && (
                <span className="flag">
                  {' '}
                  <span className={`fi fi-${speakerData.country_origin}`}></span>
                </span>
              )}
            </h3>
          </Col>
          <Col xs={12} md={4}>
            <div className={`social-icons ${reverse ? 'text-left' : 'text-right'}`}>
              {speakerData.facebook && (
                <a
                  href={`https://www.facebook.com/${speakerData.facebook}`}
                  target="_blank"
                  rel="noreferrer">
                  <div className="fa-stack">
                    <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                    <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faFacebook} />
                  </div>
                </a>
              )}
              {speakerData.twitter && (
                <a
                  href={`https://twitter.com/${speakerData.twitter}`}
                  target="_blank"
                  rel="noreferrer"
                  className="">
                  <div className="fa-stack">
                    <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                    <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
                  </div>
                </a>
              )}
              {speakerData.linkedin && (
                <a
                  href={`https://www.linkedin.com/in/${speakerData.linkedin}`}
                  target="_blank"
                  rel="noreferrer">
                  <div className="fa-stack">
                    <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                    <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
                  </div>
                </a>
              )}
              {speakerData.github && (
                <a
                  href={`https://github.com/${speakerData.github}`}
                  target="_blank"
                  rel="noreferrer">
                  <div className="fa-stack">
                    <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                    <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGithubAlt} />
                  </div>
                </a>
              )}
              {speakerData.website && (
                <a href={speakerData.website} target="_blank" rel="noreferrer">
                  <div className="fa-stack">
                    <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                    <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faGlobe} />
                  </div>
                </a>
              )}
            </div>
          </Col>
        </Row>
        <Row>
          <p className={reverse ? 'text-right' : 'text-left'}>{speakerData.biography[lang]}</p>
        </Row>
        <Row>
          {/* <Col xs={12} md={{ span: 9 }}>
            <div className={reverse ? 'text-left' : 'text-right'}>
              <span
                className={`text-border ${colorBerderTextSpeaker[(index + 1) % colorBerderTextSpeaker.length]}`}>
                <FontAwesomeIcon icon={faCalendarAlt} /> The new age in fintech | 4 Junio 2024
              </span>
            </div>
          </Col> */}
          <Col xs={12} md={{ span: 3, order: reverse ? 'last' : 'first' }}>
            <Link href={`/${lang}/keynotes/${speakerData.id}`} className="more-info">
              More info
            </Link>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Card.propTypes = {
  speakerData: propTypes.shape({
    id: propTypes.string,
    first_name: propTypes.string,
    last_name: propTypes.string,
    biography: propTypes.shape({}),
    photo: propTypes.string,
    type: propTypes.string,
    country_origin: propTypes.string,
    facebook: propTypes.string,
    twitter: propTypes.string,
    linkedin: propTypes.string,
    github: propTypes.string,
    website: propTypes.string
  }),
  reverse: propTypes.bool,
  index: propTypes.number,
  lang: propTypes.string
};

export default Card;
