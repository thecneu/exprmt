import React, { Component } from 'react'
import _isObject from 'lodash/isObject'
import InputCheckbox from './InputCheckbox'
import ColorBox from './ColorBox'

class FilterSection extends Component {
  static defaultProps = { filters: [] }
  state = {
    filters: this.props.filters,
    isOpen: false
  }

  formatLabelList(item) {
    const isObject = _isObject(item)
    const label = isObject ? item.colorName : item

    return (
      <li key={label}>
        <InputCheckbox
          checked={this.state.filters.includes(label)}
          label={label}
          onChange={this.onChange}
        >
          {isObject && <ColorBox color={item.color} />}
        </InputCheckbox>
      </li>
    )
  }

  renderFilterablesList() {
    return this.state.filters.join(', ')
  }

  onChange = (e) => {
    const value = e.currentTarget.value
    const currentFilters = this.state.filters
    const filters = currentFilters.includes(value)
      ? currentFilters.filter(chk => chk !== value)
      : [ ...currentFilters, value ]

    this.setFilteredState(filters)
    this.setState({ filters })
  }

  toggle = () => this.setState(({ isOpen }) => ({ isOpen: !isOpen }))

  setFilteredState = (filters) => {
    console.log('setFilteredState', filters)
    this.props.updateFilters(this.props.headline, filters)
  }

  render() {
    const { headline, filterables } = this.props
    const { isOpen } = this.state

    return (
      <div className="filter-section">
        <header onClick={this.toggle}>
          <div className="flex-container">
            <div className="headline-container">
              <h2>{headline}</h2>
            </div>

            <div className="filter-actions">
              <div className="filtered-choices">
                {this.renderFilterablesList()}
              </div>

              <div className="action">
                <button>{isOpen ? '-' : '+'}</button>
              </div>
            </div>
          </div>
        </header>

        {isOpen && (
          <div className="section-content">
            <ul>
              {filterables.map(label => this.formatLabelList(label))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default FilterSection