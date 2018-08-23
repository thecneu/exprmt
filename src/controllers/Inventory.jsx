import React, { Component } from 'react'
import queryString from 'query-string'

import {
  getFilterables,
  getCarModels,
  getModels,
  getCars,
  filterCars
} from 'api'

export const Inventory = React.createContext()

function mapSlug(model) {
  switch(model) {
    case 'atlas':
      return 'Atlas'
    case 'beetle':
      return 'Beetle'
    case 'beetle-convertible':
      return 'Beetle Convertible'
    case 'golf':
      return 'Golf'
    case 'golf-alltrack':
      return 'Golf Alltrack'
    case 'golf-gti':
      return 'Golf GTI'
    case 'golf-r':
      return 'Golf R'
    case 'golf-sportwagen':
      return 'Golf SportWagen'
    case 'jetta':
      return 'Jetta'
    case 'passat':
      return 'Passat'
    case 'tiguan':
      return 'Tiguan'
    case 'tiguan-limited':
      return 'Tiguan Limited'
    default:
      return 'Jetta';
  }
}

class InventoryProvider extends Component {
  changeState = (key, data) => {
    this.setState({ [key]: data, filters: {} }, () => this.getData())
  }

  changeMax = () => this.setState(({ max }) => ({ max: max + 12 }))

  updateFilters = (key, data) => {
    console.log('updateFilters', key, data)
    const filters = {
      ...this.state.filters,
      [key]: data
    }
    const filteredCars = filterCars(this.state.cars, filters)

    // window.history.pushState(filter, '', '?' + queryString.stringify(filters))

    this.setState({ filteredCars, filters })
  }

  toggleFilter = () => {
    document.body.classList.toggle('is-overflow')
    this.setState(({ filterActive }) => ({ filterActive: !filterActive}))
  }

  state = {
    max: 12,
    filterActive: false,
    chosenModel: mapSlug(this.props.model),
    models: [],
    cars: [],
    carModels: [],
    filteredCars: [],
    filterables: [],
    filters: this.fix(queryString.parse(window.location.search)),
    changeState: this.changeState,
    changeMax: this.changeMax,
    updateFilters: this.updateFilters,
    toggleFilter: this.toggleFilter
  }

  componentDidMount() {
    this.getData()
  }

  fix(obj) {
    return Object.keys(obj).reduce((next, key) => ({
      ...next,
      [key]: Array.isArray(obj[key]) ? obj[key] : [obj[key]]
    }), {})
  }

  getData(model = this.state.chosenModel) {
    const models = getModels()
    const cars = getCars(model)
    const carModels = getCarModels(models)
    const filterables = getFilterables(cars)
    const filteredCars = filterCars(cars, this.state.filter)

    this.setState({
      cars,
      models,
      carModels,
      filterables,
      filteredCars,
    })
  }

  render() {
    return (
      <Inventory.Provider value={this.state}>
        {this.props.children}
      </Inventory.Provider>
    )
  }
}

export default InventoryProvider
