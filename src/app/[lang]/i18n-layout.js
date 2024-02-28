'use client';

import React, { useState, useEffect } from 'react';
import props from 'prop-types';

import { I18nContext } from '@/contexts/I18nContext';
import { getI18nDictionary } from '@/data/dictionaries';

const I18nLayout = ({ children, params: { lang } }) => {
  const [i18nDictionary, setI18n] = useState({});

  useEffect(() => {
    const getI18n = async () => {
      setI18n(await getI18nDictionary(lang));
    };

    getI18n();
  }, [lang]);

  return <I18nContext.Provider value={i18nDictionary}>{children}</I18nContext.Provider>;
};

I18nLayout.propTypes = {
  params: props.shape({
    lang: props.string.isRequired
  }).isRequired,
  children: props.node.isRequired
};

export default I18nLayout;
