import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'static/styles/styles.sass';
import AlertNews from './alert/News';
import NavbarLayout from './NavbarLayout';

const Layout = ({ children }) => {
  return (
    <>
      <AlertNews message="Early birds tickets on sale now!" />
      <NavbarLayout />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
