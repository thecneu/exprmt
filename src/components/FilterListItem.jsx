import React from 'react'

const FilterListItem = ({ filter, removeFilter }) => (
  <div className="filter-list-item" onClick={() => removeFilter(filter)}>
    <div>
      <span>Item</span>
    </div>

    <div className="icon-container">
      {/*<CloseIcon />*/}
    </div>
  </div>
)

export default FilterListItem