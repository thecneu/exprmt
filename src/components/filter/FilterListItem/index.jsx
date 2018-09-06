import React from 'react'
import DisplayHtml from 'components/common/DisplayHtml'
import styles from './filter-list-item.module.scss'

const FilterListItem = ({ clearFilters, isClearButton, filter, updateAppliedFilter }) => (
  isClearButton ? (
    <div className={styles.item} onClick={() => clearFilters()}>
      <DisplayHtml>Clear filters</DisplayHtml>
    </div>
  ) : (
    <div className={styles.item} onClick={() => updateAppliedFilter(filter)}>
      <DisplayHtml>{filter.value}</DisplayHtml>
    </div>
  )
)

export default FilterListItem
