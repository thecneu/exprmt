import React, { Component } from 'react'
import cx from 'classnames'
import FilterAttribute from 'components/filter/FilterAttribute'
import './filter-section.scss'

class FilterSection extends Component {
  state = { isOpen: false }

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  isSelected(attribute) {
    const { appliedFilters } = this.props
    const selected = appliedFilters.filter(filter => filter.value === attribute.value)
    return selected.length > 0
  }

  appliedFilters() {
    const { appliedFilters, filterKey } = this.props
    return appliedFilters.filter(filter => filter.filterKey === filterKey).map(filter => filter.value).join(', ')
  }

  render() {
    const { isOpen } = this.state
    const { name, attributes, updateAppliedFilter } = this.props

    return (
      <div className="vw__filter-section">
        {console.log('filtersection render')}
        <button className={cx('filter-accordion', { 'is-open': isOpen })} onClick={this.toggle}>
          <div className="grid-container">
            <div className="headline-container">
              <div className="filter-name">
                <span className="title-1">{name}</span>
              </div>
              <div className="filter-subname">
                <span className="title-3"></span>
              </div>
            </div>

            <div className="filter-actions">
              <div className="filtered-choices">
                {this.appliedFilters()}
              </div>

              <div className="action">
                <div>{isOpen ? '-' : '+'}</div>
              </div>
            </div>
          </div>
        </button>

        {isOpen && (
          <div className={cx('section-content', { 'has-swatch': attributes.length > 80 })}>
            {attributes.map(attribute =>
              <FilterAttribute key={attribute.value} isSwatch={attributes.length > 80} selected={this.isSelected(attribute)} attribute={attribute} updateAppliedFilter={updateAppliedFilter} />
            )}
          </div>
        )}
      </div>
    )
  }
}

export default FilterSection
