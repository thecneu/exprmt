import React from 'react'

const scrollToTop = (e) => {
  e.preventDefault();
  document.body.scrollIntoView()
}

const ButtonToTop = () => (
  <button className="vw__to-top" onClick={scrollToTop}>To Top</button>
)

export default ButtonToTop
