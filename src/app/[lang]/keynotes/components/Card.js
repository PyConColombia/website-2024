import React from 'react';
import propTypes from 'prop-types';
import Ratio from 'react-bootstrap/Ratio';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Link from 'next/link';
import speakerslist from '@/data/speakers.json';

import Avatar from '@/app/[lang]/speakers/images/avatar.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Card = ({ speakerData, reverse, lang }) => {
  return (
    <Row className="keynote-card">
      <Col xs={12} md={{ span: 4, order: reverse ? 'last' : 'first' }}>
        <Ratio aspectRatio="1x1">
          <Image className="img-keynote" src="" alt="Keynote Image" width={300} height={300} />
        </Ratio>
      </Col>
      <Col xs={12} md={8}>
        <Row>
          <Col xs={12} md={{ span: 6, order: reverse ? 'last' : 'first' }}>
            <h2>
              <span className="bold">
                {speakerData.first_name} {speakerData.last_name}
              </span>
              <span className="flag"> {lang} 🇧🇪 </span>
            </h2>
          </Col>
          <Col xs={12} md={6}>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="">
              <div className="fa-stack">
                <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faXTwitter} />
              </div>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <div className="fa-stack">
                <FontAwesomeIcon className="fa-stack-2x" icon={faCircle} color="white" />
                <FontAwesomeIcon className="social-icon fa-stack-1x" icon={faLinkedinIn} />
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet
            sollicitudin. Donec euismod condimentum mauris, nec luctus nisl
          </p>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 10 }}>
            <span className="text-border">
              <FontAwesomeIcon icon={faCalendarAlt} /> The new age in fintech | 4 Junio 2024
            </span>
          </Col>
          <Col xs={12} md={{ span: 2, order: reverse ? 'last' : 'first' }}>
            <a href={speakerData.link}>More info</a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

Card.propTypes = {
  reverse: propTypes.bool
};

export default Card;
