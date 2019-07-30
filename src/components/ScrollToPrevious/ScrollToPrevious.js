import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class ScrollToPrevious extends Component {
  scrollToPrevious() {
    const { pageSelector } = this.props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary }
    } = this.context;

    return (
      <div className="scroll-to-previous" onClick={e => this.scrollToPrevious()}>
        <div className="arrow bounce" style={{ color: colorPrimary }}>
          <svg
            t="1564453571248"
            className="icon"
            viewBox="0 0 1812 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4257"
            width="20"
            height="20"
          >
            <path
              fill={colorPrimary}
              d="M889.848778 273.683698 194.723176 968.8093C150.261273 1013.271282 78.068836 1013.264037 33.537475 968.732676-11.304397 923.890804-11.028221 852.035969 33.460773 807.546975L807.673526 33.334221C852.13543-11.127682 924.327866-11.120516 968.859227 33.410924 970.936651 35.488347 972.917291 37.623731 974.801147 39.811798 981.564586 44.15155 987.967823 49.277935 993.880605 55.190796L1768.093358 829.403471C1812.582352 873.892543 1812.858528 945.747379 1768.016656 990.589172 1723.485295 1035.120612 1651.292858 1035.127778 1606.830955 990.665875L889.848778 273.683698Z"
              p-id="4258"
            />
          </svg>
          <div className="scroll-text">点击</div>
        </div>
      </div>
    );
  }
}

ScrollToPrevious.propTypes = {
  pageSelector: PropTypes.string
};

ScrollToPrevious.contextTypes = {
  theme: PropTypes.any
};

export default ScrollToPrevious;

// WEBPACK FOOTER //
// ./src/components/ScrollToPrevious/ScrollToPrevious.js
