import React, { Component } from 'react'
import DataProvider from 'data-providers/DataProvider'

const getInventory = (dealer) => {
  // console.log(`http://www.vw.com/vwsdl/rest/product/dealers/inventory/${dealerid}.json`)
  const inventory = require(`data/${dealer.dealerid}.json`)
  const { aor, dealerid, name, latlong, distance } = dealer
  return inventory.map(car => ({
    ...car,
    dealer: { aor, dealerid, name, latlong, distance }
  }))
}
const getModelBySlug = (carModels = [], slug) => carModels.find(model => model.slug === slug)
const getAorDealer = (dealers = []) => dealers.find(dealer => dealer.aor)
const getCarsByModel = (inventory = [], model) => inventory.filter(car => car.model === model)

const buildFilterAttributes = (modelFilters, filterData, modelInventory) => {
  const filterAttributes = filterData.map(filterGroup => {
    const filterTypeKey = filterGroup.key[0]
    const filters = (modelFilters.find(({ key }) => filterTypeKey === key) || {}).values

    let attributes = filters.map(attribute => ({
      filterKey: filterTypeKey,
      value: Array.isArray(attribute) ? attribute[0] : attribute,
      color: Array.isArray(attribute) ? attribute[1] : false,
      required: filterGroup.required.length
        ? modelInventory.filter(car => car[filterTypeKey] === attribute).length : false
    }))

    if (attributes.some(({ required }) => required === 0)) {
      attributes = attributes.map(attribute => ({
        ...attribute,
        required: attribute.required > 0
      }))
    } else {
      attributes = attributes.map(({ required, ...attribute }) => ({ ...attribute }))
    }

    return {
      filterKey: filterTypeKey,
      name: filterGroup.friendlyName,
      required: filterGroup.required,
      attributes
    }
  })

  return filterAttributes
}

export const filterCars = (inventory, appliedFilters) => {
  console.group('car filter called', appliedFilters)

  const amountFilters = appliedFilters.length
  if (amountFilters === 0) {
    console.log('just cars')
    console.groupEnd()
    return inventory
  }

  const filters = appliedFilters.reduce((next, { filterKey, value }) => ({
    ...next,
    [filterKey]: [ ...(next[filterKey] || []), value ]
  }), {})

  console.log('filtering:', filters)

  const filterableKeys = Object.keys(filters)
  const filteredCars = inventory.map(car => {
    const rank = filterableKeys.reduce((next, filterKey) => {
      const filterValue = filters[filterKey]
      const carValue = car[filterKey]
      return next + (filterValue.includes(carValue) ? 1 : 0)
    }, 0)

    const isMatched = rank === amountFilters
      ? 'exact' : rank === amountFilters - 1 ? 'close' : false

    return {
      ...car,
      isMatched
    }
  })
  .filter(car => car.isMatched !== false)

  // console.log(
  //   {
  //     exact: filteredCars.filter(car => car.isMatched === 'exact'),
  //     close: filteredCars.filter(car => car.isMatched === 'close')
  //   }
  // )
  console.groupEnd()

  return {
    exact: filteredCars.filter(car => car.isMatched === 'exact'),
    close: filteredCars.filter(car => car.isMatched === 'close')
  }
}

export const InventoryContext = React.createContext()
class InventoryController extends Component {
  toggleFilter = () => {
    document.body.classList.toggle('is-overflow')
    this.setState(({ showFilter }) => ({ showFilter: !showFilter}))
  }

  clearFilters = () => this.setState({ appliedFilters: [] })

  onModelChange = (slug) => {
    const filterAttributes = this.getModelData(slug)

    this.setState({
      appliedFilters: [],
      nearbyFilteredCars: [],
      filteredCars: this.modelInventory,
      currentModel: this.currentModel,
      filterAttributes
    })

    this.props.history.push(`/results/${slug}`)
  }

  updateAppliedFilter = (filter) => {
    this.setState(({ appliedFilters }) => ({
      appliedFilters: appliedFilters.includes(filter)
        ? appliedFilters.filter(applied => applied !== filter)
        : [ ...appliedFilters, filter ]
    }), () => this.filterCars())
  }

  state = {
    aorDealer: {},
    filteredCars: [],
    nearbyFilteredCars: [],
    filterAttributes: [],
    appliedFilters: [],
    models: [],
    filteredCarsCount: {},
    currentModel: {},
    showFilter: false,
    onModelChange: this.onModelChange,
    updateAppliedFilter: this.updateAppliedFilter,
    toggleFilter: this.toggleFilter
  }

  componentDidMount() {
    const models = this.props.modelsData.map(({ slug, name, ...rest }) => ({ slug, name }))
    this.aorDealer = getAorDealer(this.props.dealersData)
    this.modelFilters = this.props.pageData.filters
    this.aorInventory = getInventory(this.aorDealer)
    const filterAttributes = this.getModelData(this.props.params.model)

    console.log('--- setting data state ---')

    this.setState({
      filteredCarsCount: { total: this.modelInventory.length },
      filteredCars: this.modelInventory,
      currentModel: this.currentModel,
      aorDealer: this.aorDealer,
      models,
      filterAttributes,
    })
  }

  getModelData(slug) {
    this.currentModel = getModelBySlug(this.props.modelsData, slug)
    this.modelInventory = getCarsByModel(this.aorInventory, this.currentModel.name)
    return buildFilterAttributes(this.props.filtersData, this.modelFilters, this.modelInventory)
  }

  filterCars() {
    const cars = filterCars(this.modelInventory, this.state.appliedFilters)
    console.log(cars)

    if (cars.exact) {
      const filteredCars = [
        ...(cars.exact || []),
        ...(cars.close || [])
      ]

      if (this.state.appliedFilters.length > 0 &&
         (cars.exact.length !== 0 || cars.close.length !== 0)
      ) { this.getNearbyCars() }

      this.setState({
        filteredCars,
        filteredCarsCount: {
          total: filteredCars.length,
          exact: cars.exact.length || 0,
          close: cars.close.length || 0
        }
      })
    } else {
      this.setState({
        filteredCars: cars,
        filteredCarsCount: { total: cars.length }
      })
    }
  }

  getNearbyCars() {
    console.log('get nearby cars')
  }

  render() {
    return (
      <InventoryContext.Provider value={this.state}>
        {console.log('InventoryContext.Provider render')}
        {this.props.children}
      </InventoryContext.Provider>
    )
  }
}

const InventoryProvider = ({ children, ...props }) => (
  <DataProvider>
    {(data) => (
      <InventoryController {...props} {...data}>
        {console.log('InventoryProvider render')}
        {children}
      </InventoryController>
    )}
  </DataProvider>
)

export default InventoryProvider
