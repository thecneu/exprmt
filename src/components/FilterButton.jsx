import React from 'react'
import { Inventory } from 'controllers/Inventory'

const FilterButton = () => (
  <div className="vw__filter-button-container">
    <Inventory.Consumer>
      {({ toggleFilter, filterActive }) => (
        <button onClick={toggleFilter} style={{ border: `1px solid ${filterActive ? 'black': 'transparent'}` }}>Filter</button>
      )}
    </Inventory.Consumer>
  </div>
)

export default FilterButton