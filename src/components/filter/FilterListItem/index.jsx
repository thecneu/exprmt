import React from 'react'
import DisplayHtml from 'components/common/DisplayHtml'
import styles from './filter-list-item.module.scss'

const FilterListItem = ({ filter = 'item' }) => (
  <div className={styles.item}>
    <DisplayHtml>{filter}</DisplayHtml>
  </div>
)

export default FilterListItem
