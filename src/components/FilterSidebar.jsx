import React from 'react'
import { Inventory } from 'controllers/Inventory'
import FilterHeader from './FilterHeader'
import FilterSection from './FilterSection'
import './filter-sidebar.scss'

const FilterSidebar = () => (
  <aside className="vw__filter-sidebar">
    <div className="filter-container">
      <Inventory.Consumer>
        {({ filterables, updateFilters, filters, chosenModel, toggleFilter, filterActive }) => (
          <>
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
          </>
        )}
      </Inventory.Consumer>
    </div>
  </aside>
)

export default FilterSidebar
