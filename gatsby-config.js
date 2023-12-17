/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');
const { languages, defaultLanguage } = require('./languages');
const siteUrl = 'https://2024.pycon.co';

module.exports = {
  pathPrefix: '/website-develop',
  siteMetadata: {
    title: `PyCon Colombia 2024`,
    siteUrl
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/static/images/'
      },
      __key: 'images'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      },
      __key: 'pages'
    },
    {
      resolve: 'gatsby-plugin-prettier-eslint',
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            '**/*.{css,scss,less}',
            '**/*.{json,json5}',
            '**/*.{graphql}',
            '**/*.{md,mdx}',
            '**/*.{html}',
            '**/*.{yaml,yml}'
          ]
        },
        eslint: {
          patterns: '**/*.{js,jsx,ts,tsx}',
          customOptions: {
            fix: true,
            cache: true
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, '/locales'),
        name: `locale`
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        siteUrl,
        i18nextOptions: {
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false // not needed for react as it escapes by default
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900`
        ],
        display: 'swap'
      }
    }
  ]
};
