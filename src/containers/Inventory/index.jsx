import React from 'react'
import ModelsDataProvider from 'data-providers/Models'
import DealersDataProvider from 'data-providers/Dealers'
import InventoryDataProvider from 'data-providers/Inventory'

export const InventoryContext = React.createContext()

class InventoryProvider extends Component {
  state = {
    ...this.props
  }

  getDerivedStateFromProps(nextProps) {
    return {
      inventory: nextProps.inventory
    }
  }

  render() {
    <InventoryContext.Provider value={this.state}>
      {this.props.children}
    </InventoryContext.Provider>
  }
}

const InventoryContainer = ({ children }) => (
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