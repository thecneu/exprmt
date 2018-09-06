import React from 'react'
import { InventoryContext } from 'controllers/Inventory'

const FilterButton = () => (
  <InventoryContext.Consumer>
    {({ toggleFilter }) => (
      <button className="vw__filter-button" onClick={toggleFilter}>FilterButton</button>
    )}
  </InventoryContext.Consumer>
)

export default FilterButton
