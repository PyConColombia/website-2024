import React from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

const AlertNews = ({ message }) => {
  return (
    <Alert variant={'warning'} className="alert-news">
      <div className="ticker-wrapper">
        <div className="ticker">
          <div className="ticker__item">{message}</div>
        </div>
      </div>
    </Alert>
  );
};

AlertNews.propTypes = {
  message: PropTypes.string.isRequired
};

export default AlertNews;
