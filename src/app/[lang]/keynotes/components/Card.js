import React from 'react';
import propTypes from 'prop-types';
import Ratio from 'react-bootstrap/Ratio';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Card = ({ speakerData, reverse, index }) => {
  const colorBerderSpeaker = ['border-pink', 'border-yellow', 'border-purple', 'border-blue'];
  const colorBerderTextSpeaker = [
    'text-border-pink',
    'text-border-yellow',
    'text-border-purple',
    'text-border-blue'
  ];

  return (
    <Row className="keynote-card">
      <Col xs={12} md={{ span: 4, order: reverse ? 'last' : 'first' }}>
        <Ratio aspectRatio="1x1">
          <Image
            className={`img-keynote ${colorBerderSpeaker[(index + 1) % colorBerderSpeaker.length]}`}
            src="/images/keynotes/profile.png"
            alt="Keynote Image"
            width={300}
            height={300}
          />
        </Ratio>
      </Col>
      <Col xs={12} md={8}>
        <Row>
          <Col xs={12} md={{ span: 8, order: reverse ? 'last' : 'first' }}>
            <h3 className={`keynote-title ${reverse ? 'text-right' : 'text-left'}`}>
              <span className="bold">
                {speakerData.first_name} {speakerData.last_name}
              </span>
              <span className="flag"> 🇧🇪 </span>
            </h3>
          </Col>
          <Col xs={12} md={4}>
            <div className={`social-icons ${reverse ? 'text-left' : 'text-right'}`}>
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
            </div>
          </Col>
        </Row>
        <Row>
          <p className={reverse ? 'text-right' : 'text-left'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet
            sollicitudin. Donec euismod condimentum mauris, nec luctus nisl
          </p>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 10 }}>
            <div className={reverse ? 'text-left' : 'text-right'}>
              <span
                className={`text-border ${colorBerderTextSpeaker[(index + 1) % colorBerderTextSpeaker.length]}`}>
                <FontAwesomeIcon icon={faCalendarAlt} /> The new age in fintech | 4 Junio 2024
              </span>
            </div>
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
  speakerData: propTypes.shape({
    first_name: propTypes.string,
    last_name: propTypes.string,
    link: propTypes.string
  }),
  reverse: propTypes.bool,
  index: propTypes.number
};

export default Card;
