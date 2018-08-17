import React, { Component } from 'react'
import FilterListItem from './FilterListItem'

class FilterList extends Component {
  state = { filters: Array(24).fill('Filter me') }

  render() {
    return (
      <div className="vw__filter-list">
        <div className="filter-list">
          {this.state.filters.map((filter, index) =>
            <FilterListItem key={filter + index} filter={filter} removeFilter={this.removeFilter} />
          )}
        </div>
      </div>
    )
  }
}

export default FilterList