import React from 'react'
import CloseIcon from 'icons/Close'
import DisplayHtml from 'components/common/DisplayHtml'
import './filter-list-item.scss'

const FilterListItem = ({ clearFilters, isClearButton, filter, updateAppliedFilter }) => (
  isClearButton ? (
    <button className="vw__filter-list-item" onClick={clearFilters}>Clear filters</button>
  ) : (
    <button className="vw__filter-list-item" onClick={() => updateAppliedFilter(filter)}>
      <DisplayHtml>{filter.value}</DisplayHtml>
      <CloseIcon />
    </button>
  )
)

export default FilterListItem
