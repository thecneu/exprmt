import React, { Component } from 'react'
import DataProvider from 'data-providers/DataProvider'

export const InventoryContext = React.createContext()
class InventoryController extends Component {
  state = {}

  currentModel = {}
  aorDealer = {}
  aorCars = []
  nearbyCars = []

  componentDidMount() {

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
