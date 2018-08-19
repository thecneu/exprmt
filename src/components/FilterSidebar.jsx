import React from 'react'
import { Inventory } from 'controllers/Inventory'
import FilterHeader from './FilterHeader'
import FilterSection from './FilterSection'
import './filter-sidebar.scss'

const FilterSidebar = () => (
  <aside className="vw__filter-sidebar">
    <FilterHeader />

    <Inventory.Consumer>
      {({ filterables, updateFilters, filters }) => Object.keys(filterables).map(headline =>
        <FilterSection
          updateFilters={updateFilters}
          filterables={filterables[headline]}
          headline={headline}
          filters={filters[headline]}
          key={headline}
        />
      )}
    </Inventory.Consumer>
  </aside>
)

export default FilterSidebar
