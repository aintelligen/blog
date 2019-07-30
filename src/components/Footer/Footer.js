import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Footer = (props, context) => {
  const {
    theme: { colorPrimary, textPrimary }
  } = context;
  return (
    <footer>
      <div className="content-grid">
        <div style={{ color: textPrimary }}>
          follow{' '}
          <a
            href="https://github.com/aintelligen"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: colorPrimary }}
          >
            Me
          </a>{' '}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </div>
      </div>
    </footer>
  );
};

Footer.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Footer;

// WEBPACK FOOTER //
// ./src/components/Footer/Footer.js
