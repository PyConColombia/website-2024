import React from 'react';

import { poppins } from '@/utils/fonts';

const FontLayout = ({ children }) => {
  return <div className={poppins.className}>{children}</div>;
};

export default FontLayout;
