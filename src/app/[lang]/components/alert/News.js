import React from 'react';
import Alert from 'react-bootstrap/Alert';

const AlertNews = () => {
  const onClickBanner = () => {
    window.open('https://www.eventbrite.com/e/pycon-colombia-2024-tickets-824751864027', '_blank');
  };

  return (
    <Alert variant={'warning'} className="alert-news" onClick={onClickBanner}>
      <div className="ticker-wrapper">
        <div className="ticker"></div>
      </div>
    </Alert>
  );
};

export default AlertNews;
