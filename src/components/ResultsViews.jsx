import React from 'react'

const ResultsViews = ({ type, changeType }) => (
  <div className="vw__results-views">
    <button onClick={() => changeType('grid')}>grid</button>
    <button onClick={() => changeType('list')}>list</button>
  </div>
)

export default ResultsViews