import React, { Component } from 'react'
import { Inventory } from 'controllers/Inventory'

class FilterContent extends Component {
  render() {
    return (
      <Inventory.Consumer>
        {({ filteredCars, chosenModel }) => (
          <>
            <h1>Let's find your perfect Volkswagen</h1>
            <p>Select a model to find inventory near you</p>
            <p>There are {filteredCars.length} {chosenModel}s</p>
          </>
        )}
      </Inventory.Consumer>
    )
  }
}

export default FilterContent
