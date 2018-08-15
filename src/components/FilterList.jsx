import React, { Component } from 'react'
import FilterListItem from './FilterListItem'

class FilterList extends Component {
  state = { filter: Array(24).fill('Filter me') }

  render() {
    return (
      <div className="vw__filter-list">
        <div className="filter-list">
          {this.state.filter.map(filter =>
            <FilterListItem filter={filter} removeFilter={this.removeFilter} />
          )}
        </div>
      </div>
    )
  }
}

export default FilterList