import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';

const ModalDocFooter = ({ title, url }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="modal-label">
        {title}
      </div>
      <Modal show={show} onHide={handleClose} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={url} className="iframe-docs" width="100%" height="300px"></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalDocFooter.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
};

export default ModalDocFooter;
