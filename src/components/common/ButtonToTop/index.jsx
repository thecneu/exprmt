import React from 'react'
import './to-top.scss'

const scrollToTop = (e) => {
  e.preventDefault();
  document.body.scrollIntoView()
}

const ButtonToTop = () => (
  <button className="vw__to-top" onClick={scrollToTop}>
    <div className="vw__icon"></div>
    <span>Top</span>
  </button>
)

export default ButtonToTop
