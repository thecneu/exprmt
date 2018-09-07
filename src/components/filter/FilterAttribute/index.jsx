import React, { Component } from 'react'
import cx from 'classnames'
import ColorBox from 'components/filter/ColorBox'
import DisplayHtml from 'components/common/DisplayHtml'
import styles from './filter-attribute.module.scss'

class FilterAttribute extends Component {
  updateFilter = (e) => {
    const { attribute, updateAppliedFilter } = this.props
    e.stopPropagation()
    updateAppliedFilter(attribute)
  }

  render() {
    const { selected, attribute, isSwatch } = this.props
    return (
      <div className={cx(styles.attribute, { [styles.swatch]: isSwatch })} onClick={this.updateFilter}>
        <div className={cx(styles.label, { [styles.selected]: isSwatch && selected })}>
          {!isSwatch && <input type="checkbox" checked={selected} />}
          {attribute.color && <ColorBox color={attribute.color} isSwatch={isSwatch} selected={selected} />}
          {!isSwatch && <DisplayHtml className={styles.value}>{attribute.value}</DisplayHtml>}
        </div>
      </div>
    )
  }
}

export default FilterAttribute
