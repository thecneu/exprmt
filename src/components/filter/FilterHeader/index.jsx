import React from 'react'
import styles from './filter-header.module.scss'

const FilterHeader = ({ toggleFilter, appliedFilters }) => (
  <header className={`vw__filter-header ${styles.header}`}>
    <div className="header-container">
      <div className={`grid-container ${styles.grid}`}>
        <div className="left-container">
          <button onClick={toggleFilter}>Close</button>
        </div>

        <div className="middle-container">
          {/*<FilterIcon />*/}
          <span>Filters</span>
        </div>

        <div className="right-container">
          <button onClick={toggleFilter}>Done</button>
        </div>
      </div>
    </div>
  </header>
)

export default FilterHeader
