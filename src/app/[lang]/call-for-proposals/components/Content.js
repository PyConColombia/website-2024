'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Question from './Question';

import { useI18n } from '@/contexts/I18nContext';

const Content = () => {
  const i18nDictionary = useI18n();
  const sectionData = i18nDictionary?.sections?.call_for_speakers?.content;

  return (
    <div className="call-for-proposals">
      <div className="content">
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <p>
                {sectionData?.description}{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelYKA6txm_uTmpgqydOYw27uKwaY701Vy4qJac1NCzYFq7Ow/viewform"
                  target="blank_">
                  {sectionData?.url_label}
                </a>
              </p>
              <br />
              <p>
                {sectionData?.date_text} <b>{sectionData?.date}</b>.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center cards-wrapper">
            <Col xs={12} md={5}>
              <div className="talk-card">
                <h3 className="talk-title">Talks</h3>
                <p>
                  This is a space of 40 minutes (Including Q & A, commonly distributed in 30 minutes
                  for talk, 10 minutes for questions). if which you can speak of any subject (Not
                  only Python-centric themes) using a slide deck and live demos if you wish
                </p>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <div className="talk-card">
                <h3 className="talk-title">Talk Videos</h3>
                <p>
                  We will record the talks and upload them to our YouTube channel, this includes a
                  screen recording of the speaker&apos;s slide deck, live demos, and speaker&apos;s
                  in-person activity. This benefits all the members of the Python community who
                  can&apos;t make it to PyCon Colombia. By submitting your proposal to PyCon
                  Colombia, you agree to give us permission to record, edit and release audio and/or
                  video of your presentation. If you aren&apos;t ok with this, please let us know
                  and we will work this out.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <p>
                Also, since you own your slide deck, we would like to ask you to do them under an
                open-source license like Creative Commons
              </p>
              <Question />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Content;
