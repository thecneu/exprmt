import React from 'react'
import cx from 'classnames'
import ColorBox from 'components/filter/ColorBox'
import DisplayHtml from 'components/common/DisplayHtml'
import styles from './filter-attribute.module.scss'

const FilterAttribute = ({ selected, attribute, isSwatch, updateAppliedFilter }) => (
  <div className={cx(styles.attribute, { [styles.swatch]: isSwatch })} onClick={() => updateAppliedFilter(attribute)}>
    <div className={cx(styles.label, { [styles.selected]: isSwatch && selected })}>
      {!isSwatch && <input type="checkbox" checked={selected} onClick={() => updateAppliedFilter(attribute)} />}
      {attribute.color && <ColorBox color={attribute.color} isSwatch={isSwatch} selected={selected} />}
      {!isSwatch && <DisplayHtml className={styles.value}>{attribute.value}</DisplayHtml>}
    </div>
  </div>
)

export default FilterAttribute
