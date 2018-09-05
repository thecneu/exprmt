import React from 'react'
import { InventoryContext } from 'controllers/Inventory'

const FilterButton = () => (
  <InventoryContext.Consumer>
    {({ toggleFilter }) => (
      <div className="vw__filter-button">
        <button onClick={toggleFilter}>FilterButton</button>
      </div>
    )}
  </InventoryContext.Consumer>
)

export default FilterButton