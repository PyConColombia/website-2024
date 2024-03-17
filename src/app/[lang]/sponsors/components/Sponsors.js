'use client';

import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useI18n } from '@/contexts/I18nContext';

import sponsorsList from '@/data/sponsors.json';
import SponsorList from './SponsorList';

const Sponsors = ({ lang }) => {
  const i18nDictionary = useI18n();

  return (
    <section id="sponsors">
      <div className="content-wrapper">
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col xs={12} md={5}>
              <h2 className="title-sponsors">{i18nDictionary?.sections?.sponsors?.title}</h2>
              <p className="description-sponsors">
                {i18nDictionary?.sections?.sponsors?.description}
              </p>
            </Col>
            <Col xs={12} md={7}>
              {Object.keys(sponsorsList).map((level, index) => (
                <SponsorList key={index} level={level} list={sponsorsList[level]} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Sponsors;
