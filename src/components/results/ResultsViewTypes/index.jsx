import React from 'react'
import cx from 'classnames'
import './results-view-types.scss'

const ResultsViewTypes = ({ type, changeType }) => (
  <div className="vw__results-view-types">
    <button onClick={() => changeType('list')} className={cx({ active: type === 'list' })}>list</button>
    <button onClick={() => changeType('grid')} className={cx({ active: type === 'grid' })}>grid</button>
  </div>
)

export default ResultsViewTypes
