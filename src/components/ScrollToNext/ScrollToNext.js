import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class ScrollToNext extends Component {
  scrollToNext() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary }
    } = this.context;
    return (
      <div className="scroll-to-next" onClick={e => this.scrollToNext()}>
        <div className="arrow bounce" style={{ color: colorPrimary }}>
          <div className="scroll-text">点击</div>
          <svg
            t="1564453762964"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1042"
            width="16"
            height="16"
          >
            <path
              fill={colorPrimary}
              d="M512 670.72l-450.56-450.56-61.44 61.44 506.88 517.12 517.12-512-61.44-61.44L512 670.72z"
              p-id="1043"
            />
          </svg>
        </div>
      </div>
    );
  }
}

ScrollToNext.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToNext.contextTypes = {
  theme: PropTypes.any
};

export default ScrollToNext;

// WEBPACK FOOTER //
// ./src/components/ScrollToNext/ScrollToNext.js
