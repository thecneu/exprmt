import React from 'react'
import './results-view-types.scss'

const ResultsViewTypes = ({ type, changeType }) => (
  <div className="vw__results-view-types">
    <button onClick={() => changeType('list')}>list</button>
    <button onClick={() => changeType('grid')}>grid</button>
  </div>
)

export default ResultsViewTypes
