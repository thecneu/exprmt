import React from 'react'
import { InventoryContext } from 'controllers/Inventory'
import './filter-list.scss'

const FilterList = () => (
  <InventoryContext.Consumer>
    {({ filterList }) => <div className="vw__filter-list"></div>}
  </InventoryContext.Consumer>
)

export default FilterList
