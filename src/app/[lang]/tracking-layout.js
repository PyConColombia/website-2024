'use client';

import React, { useEffect } from 'react';
import props from 'prop-types';

import Hotjar from '@hotjar/browser';

const therackingLayout = ({ children }) => {
  useEffect(() => {
    const siteId = 3886576;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return <>{children}</>;
};

therackingLayout.propTypes = {
  children: props.node.isRequired
};

export default therackingLayout;
