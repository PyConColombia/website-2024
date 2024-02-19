import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Technologies = () => {
  return (
    <section id="technologies">
      <div id="list">
        <span className="element">BLOCKCHAIN</span>
        <span className="element icon">
          <StaticImage src="../../static/images/icons/icon-1.svg" alt="Tech Icon" />
        </span>
        <span className="element">DEVELOPMENT</span>
        <span className="element icon">
          <StaticImage src="../../static/images/icons/icon-2.svg" alt="Tech Icon" />
        </span>
        <span className="element">ARTIFICIAL INTELLIGENCE</span>
        <span className="element icon">
          <StaticImage src="../../static/images/icons/icon-3.svg" alt="Tech Icon" />
        </span>
        <span className="element">TESTING</span>
        <span className="element icon">
          <StaticImage src="../../static/images/icons/icon-4.svg" alt="Tech Icon" />
        </span>
        <span className="element">MOBILE</span>
      </div>
      <div id="decoration">
        <div id="line"></div>
      </div>
    </section>
  );
};

export default Technologies;
