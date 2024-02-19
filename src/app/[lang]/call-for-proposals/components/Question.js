'use client';

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

const Question = () => {
  return (
    <>
      <div className="title-question-container">
        <h1>Frequent questions</h1>
      </div>
      <Accordion alwaysOpen>
        <Accordion.Item eventKey="0" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Topics</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              class="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>
              If you want to know what are we interested in hearing about, you can take a look at
              the talks & workshops line-up for past years (2017, 2018 , 2019 , 2020 ,2021 , and
              2022).
            </p>
            <br />
            <p>We like to see any kind of proposal related to the following topics:</p>
            <br />
            <ul>
              <li>Data Science</li>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Artificial Intelligence</li>
              <li>Internet of Things (IoT)</li>
              <li>Web Development</li>
              <li>Internet of Things (IoT)</li>
              <li>Micro-Python</li>
              <li>Python Frameworks</li>
            </ul>
            <br />
            <p>
              Of course, not everything should be technical topics, here are our alternative topics
              which we consider related to our conference:
            </p>
            <br />
            <ul>
              <li>Inclusion & Diversity</li>
              <li>Community</li>
              <li>Industry & Academy Bonding</li>
              <li>Education & Soft Skills</li>
              <li>People in STEM Life Quality</li>
            </ul>
            <br />
            <p>
              If your talk topic doesn&apos;t fill any of our listings but you are really passionate
              about your talk, don&apos;t worry! we love people like you, this is your conference!
              submit your proposal and maybe we will discover new topics to improve our lists.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Why should you speak at PyCon Colombia 2024?</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              class="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>
              We strongly believe that if you have something you are really passionate about and you
              want to spread the word, you should craft a talk and do it! but, if that&apos;s not
              enough to convince you, here is the list of perks you get by becoming a PyCon Colombia
              2024 speaker:
            </p>
            <br />
            <ul>
              <li>Free full conference pass: Gives you access to all talks and workshops.</li>
              <li>
                Access to Speaker dinner: Dinner that includes keynotes speakers, sponsors, speakers
                and organizers, fully paid by the conference.
              </li>
              <li>
                A professionally produced video of your talk published in our YouTube channel (see
                Talk Videos section for more details)
              </li>
              <li>The opportunity to positively impact the lives of over 600 attendees.</li>
            </ul>
            <h1>Our Selection Process</h1>
            <br />
            <p>
              In order to create the most valuable talks and workshops line-up for the conference we
              follow this process:
            </p>
            <br />
            <ol>
              <li>
                All proposals reviews are anonymized, that way we avoid the bias towards the
                submitter.
              </li>
              <li>All proposals are reviewed and voted by our Reviewers Team.</li>
              <li>
                The best-rated proposals are de-anonymized to review the speaker&apos;s profile,
                this is made by the PyCon Colombia&apos;s Talks Committee.
              </li>
              <li>The Committee decides the final line-up.</li>
            </ol>
            <br />
            <p>
              We are really excited to get a lot more excellent submissions than we have speaking
              slots. This process helps us to get the best proposals by trying to avoid the bias to
              the speaker profile.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="questions">
          <Accordion.Header className="question-header">
            <span className="question-title">Code of Conduct</span>
            <Image
              src="/images/icons/question-button.svg"
              alt="question"
              class="question-icon"
              width={40}
              height={40}
            />
          </Accordion.Header>
          <Accordion.Body className="question-body">
            <p>
              In order to create an environment that is safe and comfortable for all our attendees
              and staff members and to make sure everybody enjoys the conference. We have written
              this code of conduct . We hope you read, understand and comply with it during the
              conference and in your proposal and talk
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Question;
