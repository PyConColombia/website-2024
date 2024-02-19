'use client';

import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import { validateEmail } from '@/utils/fields';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [blockButton, setBlockButton] = useState(true);

  const onFieldChange = (e) => {
    const requiredFields = ['email'];
    const newValue = e.target.value;

    console.log(e.target.name, newValue);

    switch (e.target.name) {
      case 'email':
        console.log(requiredFields.includes(e.target.name), !newValue, validateEmail(newValue));
        setBlockButton(
          requiredFields.includes(e.target.name) && (!newValue || !validateEmail(newValue))
        );
        setEmail(newValue);
        break;
      default:
        break;
    }
  };

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

      setShowAlert(true);
      setAlertType('success');
      setAlertMessage('Thanks for your interest!');
      setEmail('');
      setFirstName('');
      setLastName('');
    } catch (error) {
      console.error('Error:', error);

      setShowAlert(true);
      setAlertType('danger');
      setAlertMessage('Something went wrong, please try again later!');
    } finally {
      if (showAlert) {
        setTimeout(() => {
          setShowAlert(false);
        }, 5000);
      }
    }
  };

  return (
    <section id="contact">
      <div id="form-wrapper">
        <Container fluid>
          <Row>
            <Col xs={12} md={4} className="d-none d-sm-none d-md-block">
              <Image src="/images/contact/1.svg" alt="Contact Icons" width={300} height={300} />
            </Col>
            <Col xs={12} md={4} className="justify-content-center">
              <div id="form-container">
                <h2 className="title">Want to know more?</h2>

                {showAlert && (
                  <Alert variant={alertType}>
                    <p>{alertMessage}</p>
                  </Alert>
                )}

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
                      name="email"
                      placeholder="Email"
                      onChange={(e) => onFieldChange(e)}
                      required
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={onSumitForm}
                    className="button-submit"
                    disabled={blockButton}>
                    Submit
                  </Button>
                </Form>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-none d-sm-none d-md-block">
              <Image src="/images/contact/2.svg" alt="Contact Icons" width={300} height={300} />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
