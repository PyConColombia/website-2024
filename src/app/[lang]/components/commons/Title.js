import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Title = () => {
  return (
    <>
      <div className="welcome">
        <div className="welcome-bg">
          <Container>
            <Row className="justify-content-center">
              <Col xs={10} md={11}>
                <div className="title-container">
                  <h2 className="title">
                    <span className="bold">Call for proposals</span>
                  </h2>
                  <p className="text">
                    Calling on all Python enthusiasts! Submit your proposals for PyCon Colombia 2024
                    now. Don&apos;t miss the opportunity to share your insights
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="main-content">
        <Container>
          <Row className="justify-content-center">
            <Col xs={10} md={11}>
              <br />
              <p>
                We are inviting all the Python Community to submit proposals to PyCon Colombia 2024,
                don&apos;t hesitate to submit yours! or, if you know somebody who you think should
                be speaking at PyCon Colombia, please send them this{' '}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSelYKA6txm_uTmpgqydOYw27uKwaY701Vy4qJac1NCzYFq7Ow/viewform"
                  target="blank_">
                  Link
                </a>
              </p>
              <br />
              <p>
                This CFP closes at <b>March 11th 2024</b>.
              </p>

              <h1>Topics</h1>
              <br />
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
                Of course, not everything should be technical topics, here are our alternative
                topics which we consider related to our conference:
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
                If your talk topic doesn&apos;t fill any of our listings but you are really
                passionate about your talk, don&apos;t worry! we love people like you, this is your
                conference! submit your proposal and maybe we will discover new topics to improve
                our lists.
              </p>
              <h1>Why should you speak at PyCon Colombia 2024?</h1>
              <br />
              <p>
                We strongly believe that if you have something you are really passionate about and
                you want to spread the word, you should craft a talk and do it! but, if that&apos;s
                not enough to convince you, here is the list of perks you get by becoming a PyCon
                Colombia 2024 speaker:
              </p>
              <br />
              <ul>
                <li>Free full conference pass: Gives you access to all talks and workshops.</li>
                <li>
                  Access to Speaker dinner: Dinner that includes keynotes speakers, sponsors,
                  speakers and organizers, fully paid by the conference.
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
                In order to create the most valuable talks and workshops line-up for the conference
                we follow this process:
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
                slots. This process helps us to get the best proposals by trying to avoid the bias
                to the speaker profile.
              </p>
              <br />
              <h1>Talks</h1>
              <br />
              <p>
                This is a space of 40 minutes (Including Q & A, commonly distributed in 30 minutes
                for talk, 10 minutes for questions). if which you can speak of any subject (Not only
                Python-centric themes) using a slide deck and live demos if you wish
              </p>
              <br />
              <h1>Talk Videos</h1>
              <br />
              <p>
                We will record the talks and upload them to our YouTube channel, this includes a
                screen recording of the speaker&apos;s slide deck, live demos, and speaker&apos;s
                in-person activity. This benefits all the members of the Python community who
                can&apos;t make it to PyCon Colombia. By submitting your proposal to PyCon Colombia,
                you agree to give us permission to record, edit and release audio and/or video of
                your presentation. If you aren&apos;t ok with this, please let us know and we will
                work this out.
              </p>
              <br />
              <p>
                Also, since you own your slide deck, we would like to ask you to do them under an
                open-source license like Creative Commons
              </p>
              <br />
              <h1>Code of Conduct</h1>
              <br />
              <p>
                In order to create an environment that is safe and comfortable for all our attendees
                and staff members and to make sure everybody enjoys the conference. We have written
                this code of conduct . We hope you read, understand and comply with it during the
                conference and in your proposal and talk
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Title;
