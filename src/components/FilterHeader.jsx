import React from 'react'

const FilterHeader = () => (
  <header className="filter-header">
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