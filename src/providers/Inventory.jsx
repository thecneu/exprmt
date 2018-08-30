import React, { Component } from 'react'

export const InventoryContext = React.createContext()

const getCarBySlug = (carModels, name) => carModels.find(model => model.name === name)

class InventoryProvider extends Component {
  toggleFilter = () => this.setState(({ showFilter }) => ({ showFilter: !showFilter }))
  changeModel = (model) => this.props.router.push(`/results/${model}`)

  updateFilter = () => {

  }

  state = {
    showFilter: false,
    currentModel: this.props.currentModel,
    models: this.props.models,
    carsByModel: [],
    filterAttributes: [],
    appliedFilters: [],
    filteredCars: [],
    changeModel: this.changeModel,
    updateFilter: this.updateFilter,
    toggleFilter: this.toggleFilter,
  }

  componentDidMount() {
    console.log('InventoryProvider', this.state)
    // find filterable items
    // organize by cars - number
    // apply filters to cars
    // organize by exact | close - number of each
  }

  render() {
    return (
      <InventoryContext.Provider value={this.state}>
        {this.props.children}
      </InventoryContext.Provider>
    )
  }
}

export default InventoryProvider