import React from 'react'
import DisplayHtml from './DisplayHtml'
import styles from './filter-list-item.module.scss'

const FilterListItem = ({ filter, headline, updateFilters }) => (
  <div className={styles.item} onClick={() => updateFilters(headline, filter)}>
    <div>
      <DisplayHtml>{filter}</DisplayHtml>
    </div>
  </div>
)

export default FilterListItem