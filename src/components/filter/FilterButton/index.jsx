import React from 'react'
import { InventoryContext } from 'controllers/Inventory'
import FilterIcon from 'icons/Filter'
import './filter-button.scss'

const FilterButton = () => (
  <InventoryContext.Consumer>
    {({ toggleFilter }) => (
      <button className="vw__filter-button" onClick={toggleFilter}>
        <FilterIcon />
      </button>
    )}
  </InventoryContext.Consumer>
)

export default FilterButton
