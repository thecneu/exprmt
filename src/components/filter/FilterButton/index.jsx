import React from 'react'
import cx from 'classnames'
import { InventoryContext } from 'controllers/Inventory'
import FilterIcon from 'icons/Filter'
import './filter-button.scss'

const FilterButton = () => (
  <InventoryContext.Consumer>
    {({ toggleFilter, appliedFilters, showFilter }) => (
      <button className={cx('vw__filter-button', { active: showFilter })} onClick={toggleFilter}>
        <FilterIcon />
        {appliedFilters.length > 0 && <span className="filters-count">{appliedFilters.length}</span>}
      </button>
    )}
  </InventoryContext.Consumer>
)

export default FilterButton
