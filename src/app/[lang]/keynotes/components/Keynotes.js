'use client';

import React from 'react';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import speakerslist from '@/data/speakers.json';

import Card from '@/app/[lang]/keynotes/components/Card';
import Title from '@/app/[lang]/keynotes/components/Title';

import { useI18n } from '@/contexts/I18nContext';

const Keynotes = ({ lang }) => {
  const i18nDictionary = useI18n();

  return (
    <section id="keynotes">
      <div className="keynotes-bg">
        <Title content={i18nDictionary?.sections?.keynotes} />
        <Container>
          <Row className="justify-content-center">
            {speakerslist.map(
              (speaker, index) =>
                speaker.type === 'keynote' && (
                  <Col xs={12} md={10} key={speaker.id}>
                    <Card
                      speakerData={speaker}
                      reverse={index % 2 !== 0}
                      index={index}
                      lang={lang}
                    />
                  </Col>
                )
            )}
          </Row>
        </Container>
      </div>
    </section>
  );
};

Keynotes.propTypes = {
  lang: propTypes.string
};

export default Keynotes;
