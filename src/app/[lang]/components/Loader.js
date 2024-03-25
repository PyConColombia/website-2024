'use client';

import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Loader = () => {
  return (
    <section id="loader">
      <Container>
        <Row className="justify-content-center align-items-center align-middle">
          <Spinner animation="grow" />
        </Row>
      </Container>
    </section>
  );
};

export default Loader;
