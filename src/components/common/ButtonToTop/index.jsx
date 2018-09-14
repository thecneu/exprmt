import React from 'react';
import ArrowUpIcon from 'icons/ArrowUp';
import './to-top.scss';

const scrollToTop = (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
};

const ButtonToTop = () => (
  <button className="vw__to-top" onClick={scrollToTop}>
    <ArrowUpIcon />
    <span>Top</span>
  </button>
);

export default ButtonToTop;
