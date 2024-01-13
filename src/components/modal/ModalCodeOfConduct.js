import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalCodeOfConduct = ({ show, handleClose }) => {
  return (
    <Modal size="lg" show={show} onHide={handleClose} scrollable centered>
      <Modal.Header closeButton>
        <Modal.Title>• CODE OF CONDUCT •</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong> PyCon Colombia </strong> is a conference organized by the Python Colombia
          community created for the dissemination of the Python programming language in our country
          and Latin America, with the objective of sharing knowledge and expanding the spaces for
          interaction and collaboration of its members. We value the participation of each member of
          the community and we want each participant in the conference to enjoy and gain valuable
          experience full of knowledge and innovation. According to this code, all participants
          including organizers, speakers, volunteers and attendees are expected to show respect and
          courtesy among themselves in all aspects of the conference, its organization and the
          events taking place in the context of the conference. To be more explicit than is expected
          of any person participating in the event and the global and local community of Python and
          Pycon Colombia are required to comply with the following Code of Conduct. The organizers
          of this event and any event in the future are subject to enforce following and complying
          with international and Colombian laws and the spirit of the International Python Society
          (Python Software Foundation)
        </p>
        <br />
        <h1>Code of Conduct Content</h1>
        <br />
        <p>
          PyCon Colombia is dedicated to providing a conference free of harassment for all members,
          regardless of gender, sexual orientation, physical abilities, physical appearance, race or
          religion. No abuse will be tolerated by any conference participant. All communications
          should be focused on a professional audience including people with different backgrounds
          and experiences. Sexual language is not appropriate for any event organized under our
          rules, including talks.
        </p>
        <br />
        <h1>Our goal as a community recommends:</h1>
        <br />
        <ul>
          <li>Be kind to other members.</li>
          <li>Do not insult or demean the other participants.</li>
          <li>Behave professionally.</li>
          <li>
            Remember that any conduct of harassment, sexism, racism or political division or of any
            instance, is not appropriate for participation within the conference or community
          </li>
          <li>Not attending the conference under the influence of alcoholic beverages.</li>
          <li>
            Participants of our community of any type (Organizers, Speakers, Volunteers and
            Assistants) who do not comply with any of these rules will be expelled from the
            conference without any reimbursement at the discretion of the organizing committee of
            the conference.
          </li>
        </ul>
        <p>
          Thank you for being subject to these terms and welcome to PyCon Colombia. This is a
          friendly event for our entire community.
        </p>
        <br />
        <h1>Contact Information</h1>
        <br />
        <p>
          If you have been harassed, or realize that someone else is being harassed or is violating
          the International Terms of the PyCon Colombia or have any problems, please contact our
          organizers:
        </p>
        <ul>
          <li>John Jairo Roa Acuña: john@pycon.co</li>
        </ul>
        <p>
          Our team at the conference will also be available to collaborate and contact local
          security or assist you to ensure your safety. We value your presence in our events.
        </p>
        <p>
          In case of any violation of the terms of this code of conduct by the organizers please
          contact the main organizer of the conference, John Roa or as a last resort to the PSF.
        </p>
        <br />
      </Modal.Body>
    </Modal>
  );
};

export default ModalCodeOfConduct;
