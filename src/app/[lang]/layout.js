import React from 'react';
import props from 'prop-types';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Poppins } from 'next/font/google';

import I18nLayout from '@/app/[lang]/i18n-layout';
import TrackingLayout from '@/app/[lang]/tracking-layout';
import NavbarCustom from '@/app/[lang]/components/NavbarCustom';

import '@/styles/styles.sass';
import '@/node_modules/flag-icons/css/flag-icons.min.css';
import FooterLayout from './components/FooterLayout';
import AlertNews from './components/alert/News';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

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
          <Head>
            <title>PyCon Colombia 2024</title>

            <meta name="description" content="Python conference in Colombia." key="desc"></meta>
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta property="og:type" content="website" />

            <meta property="og:url" content="/" />
            <meta property="og:site_name" content="PyCon Colombia 2024" />
            <meta property="og:title" content="PyCon Colombia 2024" />
            <meta property="og:description" content="Python conference in Colombia." />
            <meta property="og:image" content="/images/opimage.jpeg" />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="500" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@pyconcolombia" />
            <meta name="twitter:description" content="Python conference in Colombia." />
            <meta name="twitter:title" content="PyCon Colombia 2024" />

            <link rel="icon" href="/images/favicon.ico" sizes="any" />
          </Head>
          <body className={poppins.className}>
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
