import React from 'react'

const getStyle = (chosenType, type) => type == chosenType ? ({ border: '1px solid' }) : null

const ResultsViewTypes = ({ type, changeType }) => (
  <div className="vw__results-views">
    <button style={getStyle(type, 'list')} onClick={() => changeType('list')}>list</button>
    <button style={getStyle(type, 'grid')} onClick={() => changeType('grid')}>grid</button>
  </div>
)

export default ResultsViewTypes