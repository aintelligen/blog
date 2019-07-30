import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toElement as scrollToElement } from '@utils/scroll';

import './style.scss';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      isSticky: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.pageYOffset > this.nav.offsetTop) {
      this.setState({
        isSticky: true
      });
    } else {
      this.setState({
        isSticky: false
      });
    }
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    const {
      theme: { colorPrimary, bgPrimary, navAlpha },
      switchTheme
    } = this.context;

    const stickyClass = this.state.isSticky ? 'sticky' : '';
    const stickyStyles = this.state.isSticky
      ? { backgroundColor: navAlpha, color: colorPrimary }
      : { backgroundColor: bgPrimary, color: colorPrimary };
    return (
      <nav
        className={stickyClass}
        ref={elem => {
          this.nav = elem;
        }}
        style={stickyStyles}
      >
        <div className="magic-wand bounce-xy" onClick={e => switchTheme()}>
          <svg
            t="1564453226948"
            className="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3050"
            width="20"
            height="15"
          >
            <path
              fill={colorPrimary}
              d="M512 65.4c-327 0-448 285.2-448 445.1 0 159.9 116.3 448 438.5 448 0 0 80.1 1.4 80.1-70.6s-36-49-36-100.8c0-51.9 36-74.9 53.3-74.9 17.3 0 131.1 8.6 194.5-15.9C857.7 671.9 960 594.1 960 461.6c0-116.7-121-396.2-448-396.2zM238.9 512c-43 0-77.8-34.8-77.8-77.8s34.8-77.8 77.8-77.8 77.8 34.8 77.8 77.8c-0.1 43-34.9 77.8-77.8 77.8z m146.7-192.5c-43 0-77.8-34.8-77.8-77.8s34.8-77.8 77.8-77.8c42.9 0 77.8 34.8 77.8 77.8s-34.8 77.8-77.8 77.8z m249.5 0c-42.9 0-77.8-34.8-77.8-77.8s34.8-77.8 77.8-77.8c42.9 0 77.8 34.8 77.8 77.8s-34.8 77.8-77.8 77.8zM783.2 512c-42.9 0-77.8-34.8-77.8-77.8s34.8-77.8 77.8-77.8 77.8 34.8 77.8 77.8c0.1 43-34.8 77.8-77.8 77.8z"
              p-id="3051"
            />
          </svg>
          <div className="magic-text">改变主题</div>
        </div>
        <style jsx="true">
          {`
            .menu__item:hover {
              border-bottom: 2px solid ${colorPrimary};
            }
          `}
        </style>
        <div className="menu">
          <div className="menu__item active" onClick={e => this.scrollToPage('.about-page')}>
            关于我
          </div>
          <div className="menu__item" onClick={e => this.scrollToPage('.portfolio-page')}>
            作品展示
          </div>
        </div>
      </nav>
    );
  }
}

Nav.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Nav;

// WEBPACK FOOTER //
// ./src/components/Nav/Nav.js
