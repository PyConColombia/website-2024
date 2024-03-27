'use client';

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

const Question = () => {
  return (
    <>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Eligibility</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              className="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>
              These scholarships are aimed at individuals facing financial barriers, including
              students and individuals from underrepresented groups in the technology community,
              such as women, LGBTQIA+ individuals, persons with disabilities, and racial and ethnic
              minorities. We encourage all of you to apply for our scholarships.
            </p>
            <p>
              Please read the following instructions and complete the form to apply for the
              scholarship.
            </p>
            <p>
              Please note that each application will be individually reviewed by the PyCon Colombia
              Organizing Team and classified according to the application form and letter of intent
              responses. All personal information collected will be kept confidential.
            </p>
            <p>
              Submitting your application doesn’t guarantee immediate eligibility. Please review the
              terms and conditions.
            </p>
            <p>
              If you want to apply, please go to this form:{' '}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfHTHWoXpwtyyEdZEiU3DQdyvBcuwd42k72OnVcPrOSjljHhQ/viewform"
                target="blank_">
                Link form
              </a>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Acknowledgments</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              className="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>
              The PyCon Colombia 2023 Diversity Program is made possible thanks to the support of
              PyCon Colombia 2023 sponsors.
            </p>
            <p>
              If your organization is interested in participating in the Diversity Program, please
              contact: <i>scholarships@pycon.co</i>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Important Dates</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              className="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <ul>
              <li>
                Application opens May 1. Applications for the PyCon Colombia scholarship must be
                submitted starting on this day.
              </li>
              <li>Application deadline: May 15. The form will close on this day.</li>
              <li>
                Selected applications: May 20. Winners of the scholarship will be notified by email
                of their acceptance.
              </li>
              <li>Confirmation: May 30. Scholarship winners must confirm their acceptance.</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Terms and Conditions</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              className="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>For your application to be accepted:</p>
            <ul>
              <li>You must submit it within the dates and deadlines.</li>
              <li>You must provide a letter of interest following the suggested format.</li>
              <li>
                You must be available to attend the entire PyCon Colombia Conference (June 9, June
                10, and June 11, 2023).
              </li>
              <li>
                You must attach a legalized authorization from your parents if you are a minor.
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">You were selected. Do you want to help the conf?</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              className="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>
              For accepted scholarship recipients attending the conference, we would love for you to
              share your experience with the world about how PyCon Colombia 2023 was and encourage
              more people to apply for the scholarships next year. Possible ways to help us are:
            </p>
            <ul>
              <li>
                Posts on Social media your journey and details about the conference. Please add the
                tag of @PyConColombia
              </li>
              <li>Write a blog or record a video sharing your experience at the conference.</li>
              <li>** Interview in a blog or video format **</li>
              <li>
                ** Please note that in either of these formats, you can choose to remain
                anonymous.**
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Question;
