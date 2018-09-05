import React, { Component } from 'react'
import DataProvider from 'data-providers/DataProvider'

const getModelBySlug = (carModels = [], slug) => carModels.find(model => model.slug === slug)
const getAorDealer = (dealers = []) => dealers.find(dealer => dealer.aor)
const getAorInventory = (aorDealer) => {
  console.log(`http://www.vw.com/vwsdl/rest/product/dealers/inventory/${aorDealer.dealerid}.json`)
  // const inventory = require(`data/inventory/${aorDealer.dealerid}`)
}
const getCarsByModel = (inventory = [], model) => inventory.filter(car => car.model === model)

const buildFilterAttributes = (modelFilters, attributes, modelInventory) => {
  const filterAttributes = []
  console.log(modelFilters, attributes)
  return filterAttributes
}

export const InventoryContext = React.createContext()
class InventoryController extends Component {
  state = {
    filteredCars: [],
    nearbyFilteredCars: [],
    filterAttributes: [],
    appliedFilters: [],
    filterList: [],
    models: [],
    currentModel: {},
    showFilter: false
  }

  componentDidMount() {
    console.log(this.props)
    const models = this.props.modelsData.map(({ slug, name, ...rest }) => ({ slug, name }))
    this.aorDealer = getAorDealer(this.props.dealersData)
    this.attributes = this.props.pageData.filters
    // get Model inventory
    this.aorInventory = getAorInventory(this.aorDealer)
    const filterAttributes = this.getModelData('jetta')

    this.setState({
      filteredCars: this.modelInventory,
      currentModel: this.currentModel,
      filterAttributes
    })
  }

  changeModel = (slug) => {
    const filterAttributes = this.getModelData(slug)
    // get ModelInventory
    this.setState({
      filterList: [],
      appliedFilters: [],
      nearbyFilteredCars: [],
      filteredCars: this.modelInventory,
      currentModel: this.currentModel,
      filterAttributes
    })

    this.props.history.push(`/results/${this.currentModel.slug}`)
  }

  getModelData(slug) {
    this.currentModel = getModelBySlug(this.props.modelsData, slug)
    this.modelInventory = getCarsByModel(this.aorInventory, this.currentModel.name)
    return buildFilterAttributes(this.props.filtersData, this.attributes, this.modelInventory)
  }

  render() {
    return (
      <InventoryContext.Provider value={this.state}>
        {this.props.children}
      </InventoryContext.Provider>
    )
  }
}

const InventoryProvider = ({ children }) => (
  <DataProvider>
    {(props) => (
      <InventoryController {...props}>
        {children}
      </InventoryController>
    )}
  </DataProvider>
)

export default InventoryProvider
