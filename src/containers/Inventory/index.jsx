import React, { Component } from 'react'
import ModelsDataProvider from 'data-providers/Models'
import DealersDataProvider from 'data-providers/Dealers'
import InventoryDataProvider from 'data-providers/Inventory'

export const InventoryContext = React.createContext()

const getCarModel = (carModels, name) => carModels.find(model => model.name === name)

class InventoryProvider extends Component {
  state = {
    ...this.props
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      inventory: nextProps.inventory
    }
  }

  render() {
    return (
      <InventoryContext.Provider value={this.state}>
        {this.props.children}
      </InventoryContext.Provider>
    )
  }
}

const InventoryContainer = ({ children, path }) => (
  <ModelsDataProvider>
    {(models) => (
      <DealersDataProvider>
        {(dealers) => (
          <InventoryDataProvider dealers={dealers}>
            {(inventory) => (
              <InventoryProvider {...models} {...dealers} {...inventory}>
                {children}
              </InventoryProvider>
            )}
          </InventoryDataProvider>
        )}
      </DealersDataProvider>
    )}
  </ModelsDataProvider>
)

export default InventoryContainer