import React from 'react'
import styles from './filter-list-item.module.scss'

const FilterListItem = ({ filter, headline, updateFilters }) => (
  <div className={styles.item} onClick={() => updateFilters(headline, filter)}>
    <div>
      <span>{filter}</span>
    </div>
  </div>
)

export default FilterListItem