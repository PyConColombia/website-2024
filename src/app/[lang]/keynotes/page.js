'use client';

import React from 'react';
import propTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import speakerslist from '@/data/speakers.json';

import Card from './components/Card';
import Title from './components/Title';

const Keynotes = ({ params: { lang } }) => {
  return (
    <section id="keynotes">
      <div className="keynotes-bg">
        <Title />
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
  params: propTypes.shape({
    lang: propTypes.string.isRequired
  }).isRequired
};

export default Keynotes;
