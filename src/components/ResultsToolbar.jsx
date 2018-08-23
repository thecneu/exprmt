import React from 'react'
import FilterButton from './FilterButton'
import FilterList from './FilterList'
import ModelDropdown from './ModelDropdown'
import ResultsViewTypes from './ResultsViewTypes'
import './results-toolbar.scss'

const ResultsToolbar = ({ type, changeType }) => (
  <div className="vw__results-toolbar">
    <div className="grid-container">
      <div className="filter-area">
        <ModelDropdown />
      </div>

      <div className="results-area">
        <div className="filter-list-area">
          <FilterButton />
          <FilterList />
        </div>

        <ResultsViewTypes type={type} changeType={changeType} />
      </div>
    </div>
  </div>
)

export default ResultsToolbar
