import React from 'react'
import { Inventory } from 'controllers/Inventory'
import FilterListItem from './FilterListItem'
import './filter-list.scss'

const List = ({ filters = [], updateFilters }) => (
  <div className="vw__filter-list">
    <div className="filter-list">
      {Object.keys(filters).map((filterGroup) => (
        filters[filterGroup].map((filter, index) => (
          <FilterListItem
            key={filter + index}
            headline={filterGroup}
            filter={filter}
            updateFilters={updateFilters}
          />
        ))
      ))}
    </div>
  </div>
)

const FilterList = () => (
  <Inventory.Consumer>
    {({ filters, removeFilter }) => <List filters={filters} updateFilters={removeFilter} />}
  </Inventory.Consumer>
)

export default FilterList