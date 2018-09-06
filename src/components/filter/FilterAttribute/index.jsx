import React from 'react'
import DisplayHtml from 'components/common/DisplayHtml'
import styles from './filter-attribute.scss'

const FilterAttribute = ({ selected, attribute, updateAppliedFilter }) => (
  <div className={styles.attribute}>
    <label><input type="checkbox" checked={selected} onChange={() => updateAppliedFilter(attribute)} />{attribute.value}</label>
  </div>
)

export default FilterAttribute