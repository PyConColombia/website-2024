import React from 'react';
import propTypes from 'prop-types';

import Title from './Title';

const Basic = ({ title, description, content }) => {
  return (
    <section id="basic">
      <div className="basic-bg">
        <Title title={title} description={description} />
        {content}
      </div>
    </section>
  );
};

Basic.propTypes = {
  title: propTypes.string,
  description: propTypes.string,
  content: propTypes.node
};

export default Basic;
