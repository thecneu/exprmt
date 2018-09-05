import React from 'react'
import cx from 'classnames'
import { InventoryContext } from 'controllers/Inventory'
import FilterHeader from 'components/filter/FilterHeader'
import FilterSection from 'components/filter/FilterSection'
import './filter-sidebar.scss'

const FilterSidebar = ({ showFilter = false }) => (
  <InventoryContext.Consumer>
    {({ filterAttributes, toggleFilter }) => (
      <aside className={cx('vw__filter-sidebar', { 'is-active': showFilter })}>
        {console.log('filtersidebar render')}
        <div className="filter-container">
          <FilterHeader toggleFilter={toggleFilter} />
          {filterAttributes.map(section =>
            <FilterSection key={section.filterKey} {...section} />
          )}
        </div>
      </aside>
    )}
  </InventoryContext.Consumer>
)

export default FilterSidebar
