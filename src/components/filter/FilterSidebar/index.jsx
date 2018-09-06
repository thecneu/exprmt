import React from 'react'
import cx from 'classnames'
import { pure } from 'recompose'
import { InventoryContext } from 'controllers/Inventory'
import FilterHeader from 'components/filter/FilterHeader'
import FilterSection from 'components/filter/FilterSection'
import './filter-sidebar.scss'

const FilterSidebar = ({ showFilter = false }) => (
  <InventoryContext.Consumer>
    {({ filterAttributes, appliedFilters, toggleFilter, updateAppliedFilter }) => (
      <aside className={cx('vw__filter-sidebar', { 'is-active': showFilter })}>
        {console.log('filtersidebar render')}
        <div className="filter-container">
          <FilterHeader toggleFilter={toggleFilter} appliedFilters={appliedFilters} />
          {filterAttributes.map(section =>
            <FilterSection key={section.filterKey} {...section} appliedFilters={appliedFilters} updateAppliedFilter={updateAppliedFilter} />
          )}
        </div>
      </aside>
    )}
  </InventoryContext.Consumer>
)

export default pure(FilterSidebar)
