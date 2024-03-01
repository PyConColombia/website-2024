import React from 'react';
import props from 'prop-types';
import { GoogleAnalytics } from '@next/third-parties/google';

import I18nLayout from '@/app/[lang]/i18n-layout';
import TrackingLayout from '@/app/[lang]/tracking-layout';
import NavbarCustom from '@/app/[lang]/components/NavbarCustom';

import '@/node_modules/flag-icons/css/flag-icons.min.css';
import FooterLayout from './components/FooterLayout';
import AlertNews from './components/alert/News';

import { poppins } from '@/utils/fonts';
import '@/styles/styles.sass';

export const metadata = {
  metadataBase: new URL('https://2024.pycon.co'),
  alternates: {
    canonical: '/',
    languages: {
      en: '/en',
      es: '/es'
    }
  },
  title: {
    default: 'PyCon Colombia 2024',
    template: '%s | PyCon Colombia 2024'
  },
  description: 'Python conference in Colombia.',
  openGraph: {
    title: 'PyCon Colombia 2024',
    description: 'Python conference in Colombia.',
    type: 'website',
    url: 'https://2024.pycon.co',
    images: [
      {
        url: '/images/opimage.jpeg',
        width: 200,
        height: 200
      }
    ]
  }
};

const Root = ({ children, params: { lang } }) => {
  return (
    <TrackingLayout>
      <I18nLayout params={{ lang }}>
        <html lang={lang}>
          <body className={poppins}>
            <AlertNews />
            <NavbarCustom lang={lang} />
            <main>{children}</main>
            <FooterLayout />
          </body>
          <GoogleAnalytics gaId="G-RYYD6XKC7Y" />
        </html>
      </I18nLayout>
    </TrackingLayout>
  );
};

Root.propTypes = {
  params: props.shape({
    lang: props.string.isRequired
  }).isRequired,
  children: props.node.isRequired
};

export default Root;
