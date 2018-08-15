import React from 'react'
import styles from './filter-list-item.module.scss'

const FilterListItem = ({ filter, removeFilter }) => (
  <div className={styles.item} onClick={() => removeFilter(filter)}>
    <div>
      <span>Item</span>
    </div>

    <div className="icon-container">
      {/*<CloseIcon />*/}
    </div>
  </div>
)

export default FilterListItem