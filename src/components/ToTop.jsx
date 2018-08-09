import React from 'react'

const ToTop = () => (
  <div className="vw__to-top-container">
    <a href="#" onClick={(e) => { e.preventDefault(); document.body.scrollIntoView() }}>To Top</a>
  </div>
)

export default ToTop