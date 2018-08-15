import React, { Component } from 'react'

class FilterButton extends Component {
  state = { active: false }
  toggle = () => this.setState(state => ({ active: !state.active}))

  render() {
    return (
      <div className="vw__filter-button">
        <button onClick={this.toggle}>filter</button>
      </div>
    )
  }
}

export default FilterButton