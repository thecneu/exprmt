import React from 'react'
import { Inventory } from 'controllers/Inventory'
import FilterHeader from './FilterHeader'
import FilterSection from './FilterSection'
import './filter-sidebar.scss'

const FilterSidebar = () => (
  <Inventory.Consumer>
    {({ filterables, updateFilters, filters, chosenModel, toggleFilter, filterActive }) => (
      <aside className={`vw__filter-sidebar ${filterActive ? 'is-active' : ''}`.trim()}>
        <div className="filter-container">
          <FilterHeader toggleFilter={toggleFilter} filterActive={filterActive} />
          {Object.keys(filterables).map(headline =>
            <FilterSection
              updateFilters={updateFilters}
              filterables={filterables[headline]}
              headline={headline}
              filters={filters[headline]}
              key={`${headline}-${chosenModel}`}
            />
          )}
        </div>
      </aside>
    )}
  </Inventory.Consumer>
)

export default FilterSidebar