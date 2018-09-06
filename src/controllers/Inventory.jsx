import React, { Component } from 'react'
import DataProvider from 'data-providers/DataProvider'

const getInventory = (id) => {
  // console.log(`http://www.vw.com/vwsdl/rest/product/dealers/inventory/${id}.json`)
  return require(`data/${id}.json`)
}
const getModelBySlug = (carModels = [], slug) => carModels.find(model => model.slug === slug)
const getAorDealer = (dealers = []) => dealers.find(dealer => dealer.aor)
const getAorInventory = (aorDealer) => getInventory(aorDealer.dealerid)
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
  // const filter = Object.keys(theFilter).reduce((next, key) =>
  //   theFilter[key].length ? { ...next, [key]: theFilter[key] } : next
  // , {})

  // if (Object.keys(filter).length === 0) {
  //   console.log('just cars')
  //   console.groupEnd()
  //   return cars
  // }

  // console.log('filtering:', filter)

  // const filterableKeys = Object.keys(filter)

  // const filteredCars = cars.map(car => {
  //   const amountFilters = filterableKeys.length
  //   const rank = filterableKeys.reduce((next, filterKey) => {
  //     const filterValue = filter[filterKey]
  //     const carKey = mapHeadingToKey(filterKey)
  //     const carValue = car[carKey]
  //     return next + (filterValue.includes(carValue) ? 1 : 0)
  //   }, 0)

  //   return {
  //     ...car,
  //     isMatched: rank === amountFilters ? 'exact' : rank === amountFilters - 1 ? 'close' : false
  //   }
  // })

  // console.log(filteredCars)
  // console.groupEnd()

  // return filteredCars
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
    this.aorInventory = getAorInventory(this.aorDealer)
    const filterAttributes = this.getModelData(this.props.params.model)

    console.log('--- setting data state ---')

    this.setState({
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
    filterCars(this.modelInventory, this.state.appliedFilters)
  }

  render() {
    return (
      <InventoryContext.Provider value={this.state}>
        {console.log('InventoryContext.Provider render', this.props, this.state)}
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
