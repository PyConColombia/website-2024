'use client';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';

import { useI18n } from '@/contexts/I18nContext';

const Technical = () => {
  const i18nDictionary = useI18n();
  const sectionData = i18nDictionary?.sections?.call_for_speakers;

  return (
    <section id="technical">
      <Container>
        <Row className="justify-content-center">
          <Col xs={10} md={8}>
            {sectionData?.topics_description_1}
          </Col>
          <Col xs={12}>
            <div className="list">
              <span className="element">DATA SCIENCE</span>
              <Image
                src="/images/icons/technical/icon-1.webp"
                alt="data science"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">MACHINE LEARNING</span>
              <Image
                src="/images/icons/technical/icon-2.webp"
                alt="machine learning"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">DEEP LEARNING</span>
              <Image
                src="/images/icons/technical/icon-3.webp"
                alt="deep learning"
                className="icon"
                width={30}
                height={30}
              />
              <span className="element">ARTIFICIAL INTELLIGENCE</span>
              <Image
                src="/images/icons/technical/icon-4.webp"
                alt="artificial intelligence"
                className="icon"
                width={30}
                height={30}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Technical;
