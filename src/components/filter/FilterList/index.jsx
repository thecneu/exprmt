import React from 'react'
import { InventoryContext } from 'controllers/Inventory'
import FilterListItem from 'components/filter/FilterListItem'
import './filter-list.scss'

const FilterList = () => (
  <InventoryContext.Consumer>
    {({ appliedFilters, updateAppliedFilter, clearFilters }) => (
      <div className="vw__filter-list">
        {appliedFilters.length > 0 && <FilterListItem isClearButton clearFilters={clearFilters} />}
        {appliedFilters.map(filter => <FilterListItem key={filter.value} filter={filter} updateAppliedFilter={updateAppliedFilter} />)}
      </div>
    )}
  </InventoryContext.Consumer>
)

export default FilterList
