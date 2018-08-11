import React, { Component } from 'react'
import queryString from 'query-string'
// import { stringify, parse } from 'utils'
import {
  getFilterables,
  getCarModels,
  getCars,
  filterCars
} from 'api'

export const Inventory = React.createContext()

class InventoryProvider extends Component {
  state = {
    sortBy: 'style',
    chosenModel: 'Jetta',
    models: [],
    cars: [],
    filteredCars: [],
    filterables: [],
    filter: this.fix(queryString.parse(window.location.search))
  }

  changeState = (key, data) => {
        this.setState({ [key]: data, filter: {} }, () => this.getData())
    }

  updateFilter = (key, data) => {
    console.log('updateFilter', key, data)
    const filter = {
      ...this.state.filter,
      [key]: data
    }
    const filteredCars = filterCars(this.state.cars, filter)

    window.history.pushState(filter, '', '?' + queryString.stringify(filter))

    this.setState({ filteredCars, filter })
  }

  state = {
    sortBy: 'style',
    chosenModel: 'Jetta',
    models: [],
    cars: [],
    filteredCars: [],
    filterables: [],
    filter: this.fix(queryString.parse(window.location.search)),
    changeState: this.changeState,
    updateFilter: this.updateFilter
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
    const models = getCarModels()
    const cars = getCars(model)
    const filterables = getFilterables(cars)
    const filteredCars = filterCars(cars, this.state.filter)

    this.setState({
      models,
      filterables,
      cars,
      filteredCars,
    })
  }

  render() {
    const value = {
      ...this.state,
      changeState: this.changeState,
      updateFilter: this.updateFilter
    }

    return (
      <Inventory.Provider value={value}>
        {this.props.children}
      </Inventory.Provider>
    )
  }
}

export default InventoryProvider
