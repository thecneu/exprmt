import React from 'react'
import cx from 'classnames'
import FilterHeader from 'components/filter/FilterHeader'
import FilterSection from 'components/filter/FilterSection'
import './filter-sidebar.scss'

const FilterSidebar = ({ showFilter = false, toggleFilter }) => (
  <aside className={cx('vw__filter-sidebar', { 'is-active': showFilter })}>
    <div className="filter-container">
      <FilterHeader toggleFilter={toggleFilter} />
      {/*
      {Object.keys(filterables).map(headline =>
        <FilterSection
          updateFilters={updateFilters}
          filterables={filterables[headline]}
          headline={headline}
          filters={filters[headline]}
          key={`${headline}-${chosenModel}`}
        />
      )}
      */}
    </div>
  </aside>
)

export default FilterSidebar
