import React from 'react'
import DisplayHtml from 'components/common/DisplayHtml'
import './filter-list-item.scss'

const FilterListItem = ({ clearFilters, isClearButton, filter, updateAppliedFilter }) => (
  isClearButton ? (
    <div className="vw__filter-list-item" onClick={clearFilters}>
      <DisplayHtml>Clear filters</DisplayHtml>
    </div>
  ) : (
    <div className="vw__filter-list-item" onClick={() => updateAppliedFilter(filter)}>
      <DisplayHtml>{filter.value}</DisplayHtml>
    </div>
  )
)

export default FilterListItem
