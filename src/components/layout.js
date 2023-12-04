import React from 'react';
import { Link, useI18next } from 'gatsby-plugin-react-i18next';

import 'static/styles/styles.sass';

export default function Layout({ children }) {
  const { languages, originalPath, t, i18n } = useI18next();

  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <h1>Test</h1>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link
              to={originalPath}
              language={lng}
              style={{ textDecoration: i18n.resolvedLanguage === lng ? 'underline' : 'none' }}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
}
