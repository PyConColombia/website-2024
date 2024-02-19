'use client';

import React, { useState, useEffect } from 'react';
import props from 'prop-types';
import { Poppins } from 'next/font/google';
import NavbarCustom from '@/app/[lang]/components/NavbarCustom';
import { I18nContext } from '@/contexts/I18nContext';

import '@/styles/styles.sass';
import { getI18nDictionary } from '@/data/dictionaries';
import FooterLayout from './components/FooterLayout';
import AlertNews from './components/alert/News';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

const Root = ({ children, params: { lang } }) => {
  const [i18nDictionary, setI18n] = useState({});

  useEffect(() => {
    const getI18n = async () => {
      setI18n(await getI18nDictionary(lang));
    };

    getI18n();
  }, [lang]);

  return (
    <I18nContext.Provider value={i18nDictionary}>
      <html lang={lang}>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <body className={poppins.className}>
          <AlertNews />
          <NavbarCustom lang={lang} />
          <main>{children}</main>
          <FooterLayout />
        </body>
      </html>
    </I18nContext.Provider>
  );
};

Root.propTypes = {
  params: props.shape({
    lang: props.string.isRequired
  }).isRequired,
  children: props.node.isRequired
};

export default Root;
