import React from 'react'
import FilterListItem from './FilterListItem'

const FilterList = ({ filters = [] }) => (
  <div className="vw__filter-list">
    <div className="filter-list">
      {Object.keys(filters).map((filter, index) =>
        <FilterListItem key={filter + index} filter={filter} />
      )}
    </div>
  </div>
)

export default FilterList