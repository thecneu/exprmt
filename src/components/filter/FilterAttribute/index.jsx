import React, { Component } from 'react'
import cx from 'classnames'
import ColorBox from 'components/filter/ColorBox'
import DisplayHtml from 'components/common/DisplayHtml'
import styles from './filter-attribute.module.scss'
import 'components/common/checkbox.scss'

class FilterAttribute extends Component {
  updateFilter = () => {
    const { attribute, updateAppliedFilter } = this.props

    if (attribute.required === undefined) {
      updateAppliedFilter(attribute)
    }
  }

  render() {
    const { selected, attribute, isSwatch } = this.props
    return (
      <div className={cx(styles.attribute, { [styles.swatch]: isSwatch })} onClick={this.updateFilter}>
        <div className={cx(styles.label, { [styles.selected]: isSwatch && (selected || attribute.required) }, { [styles.disabled]: attribute.required === false })}>
          {!isSwatch && (
            <div className="vw__checkbox">
              <div className={cx('checkbox', { selected: selected || attribute.required }, { 'is-disabled': attribute.required === false })} />
            </div>
          )}
          {attribute.color && <ColorBox color={attribute.color} isSwatch={isSwatch} selected={selected} />}
          {!isSwatch && <DisplayHtml className={styles.value}>{attribute.value}</DisplayHtml>}
        </div>
      </div>
    )
  }
}

export default FilterAttribute
