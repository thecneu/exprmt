import React from 'react'
import './filter-header.scss'

const FilterHeader = () => (
  <header className="vw__filter-header">
    <div className="header-container">
      <div className="grid-container">
        <div className="left-container">
          <button>Close</button>
        </div>

        <div className="middle-container">
          {/*<FilterIcon />*/}
          <span>Filters</span>
        </div>

        <div className="right-container">
          <button>Done</button>
        </div>
      </div>
    </div>
  </header>
)

export default FilterHeader