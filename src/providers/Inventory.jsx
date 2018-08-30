import React, { Component } from 'react'

const getCarBySlug = (carModels, name) => carModels.find(model => model.name === name)
const getAorDealer = (dealers) => dealers.find(dealer => dealer.aor)
const getAorInventory = (aor) => aor.inventory

  // state = {
  //   aorInventory: [],
  //   dealers: dealersJson.dealers,
  //   aorDealer: dealersJson.dealers.find(dealer => dealer.aor),
  // }

  // getLocalCars() {
  //   return this.state.dealersInventory.filter(dealer => dealer.dealerid !== this.state.aorDealer.dealerid)
  // }



// API Functions //
const getDealerInventory = (dealerIds, model) => {
  const inventory = dealerIds.map(id => {
    const json = require(`data/inventory/${id}`)
    return { id, inventory: json.filter(car => car.model === model) }
  })

  return inventory
}

export const InventoryContext = React.createContext()
class InventoryProvider extends Component {
  toggleFilter = () => this.setState(({ showFilter }) => ({ showFilter: !showFilter }))
  changeModel = (model) => this.props.router.push(`/results/${model}`)

  updateFilter = () => {}

  state = {
    // this.props.dealers
    showFilter: false,
    aorInventory: [],
    aorDealer: {},
    filterAttributes: [],
    appliedFilters: [],
    filteredCars: [],
    currentModel: this.props.currentModel,
    models: this.props.models,
    changeModel: this.changeModel,
    updateFilter: this.updateFilter,
    toggleFilter: this.toggleFilter,
  }

  shouldComponentUpdate(prevProps, nextProps) {
    return prevProps.dealers !== nextProps.dealers
  }

  componentDidMount() {
    console.log('InventoryProvider componentDidMount', this.props, this.state)
  }

  componentDidUpdate() {
    // console.log('InventoryProvider componentDidUpdate', this.props, this.state)
  }

  getCarData() {
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