import React from 'react'
import FilterIcon from 'icons/Filter'
import './filter-header.scss'

const FilterHeader = ({ toggleFilter }) => (
  <header className="vw__filter-header">
    <div className="grid-container">
      <div className="left-container">
        <button onClick={toggleFilter}>Close</button>
      </div>

      <div className="middle-container">
        <FilterIcon />
        <span className="title-1">Filters</span>
      </div>

      <div className="right-container">
        <button onClick={toggleFilter}>Done</button>
      </div>
    </div>
  </header>
)

export default FilterHeader
