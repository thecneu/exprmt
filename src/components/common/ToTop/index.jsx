import React from 'react'

const scrollToTop = (e) => {
  e.preventDefault();
  document.body.scrollIntoView()
}

const ToTop = () => (
  <div className="vw__to-top">
    <button onClick={scrollToTop}>To Top</button>
  </div>
)

export default ToTop
