import React from 'react'
import cx from 'classnames'
import './results-view-types.scss'

const ResultsViewTypes = ({ type, changeType }) => (
  <div className="vw__results-view-types">
    <button onClick={() => type !== 'list' && changeType('list')} className={cx('vw__btn-view-type', { selected: type === 'list' })}>list</button>
    <button onClick={() => type !== 'grid' && changeType('grid')} className={cx('vw__btn-view-type', { selected: type === 'grid' })}>grid</button>
  </div>
)

export default ResultsViewTypes
