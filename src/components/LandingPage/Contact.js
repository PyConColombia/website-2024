import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { StaticImage } from 'gatsby-plugin-image';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSumitForm = async (e) => {
    e.preventDefault();

    try {
      fetch(
        `https://pycon.us21.list-manage.com/subscribe/post-json?` +
          new URLSearchParams({
            u: 'b17171278920cd24d0c9c4cfe',
            id: '785e2a687f',
            FNAME: firstName,
            LNAME: lastName,
            EMAIL: email,
            subscribe: 'Subscribe'
          }),
        {
          method: 'GET',
          mode: 'no-cors'
        }
      ).then((response) => {
        console.log(response.status);
        console.log(response);
      });

      console.log('Success!', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="contact">
      <div id="form-wrapper">
        <Container fluid>
          <Row>
            <Col xs={12} md={3} className="d-sm-none d-md-block">
              <StaticImage src="../../static/images/contact/1.svg" alt="Contact Icons" />
            </Col>
            <Col xs={12} md={6} className="justify-content-center">
              <div id="form-container">
                <h2 className="title">Want to know more?</h2>

                <Form>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={onSumitForm} size="lg" id="button-submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={3} className="d-sm-none d-md-block">
              <StaticImage src="../../static/images/contact/2.svg" alt="Contact Icons" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
