import React, { Component } from 'react'
import ModelsDataProvider from 'data-providers/Models'
import DealersDataProvider from 'data-providers/Dealers'
import ZipDataProvider from 'data-providers/Zip'
import PageDataProvider from 'data-providers/Page'

export const InventoryContext = React.createContext()

const getCarBySlug = (carModels, name) => carModels.find(model => model.name === name)

class InventoryProvider extends Component {
  state = {
    models: this.props.models,
    chosenModel: 'Jetta',
    carsByModel: [],
    filterAttributes: [],
    appliedFilters: [],
    filteredCars: [],
    changeModel: this.changeModel,
    updateFilter: this.updateFilter,
  }

  componentDidMount() {
    // grab cars
    // find filterable items
    // organize by cars - number
    // apply filters to cars
    // organize by exact | close - number of each
    //
    // console.log(this.state)
  }

  changeModel = () => {

  }

  updateFilter = () => {

  }

  toggleFavorite = () => {

  }

  render() {
    return (
      <InventoryContext.Provider>
        {this.props.children}
      </InventoryContext.Provider>
    )
  }
}

const InventoryContainer = ({ children }) => (
  <ZipDataProvider>
    {(zip) => (
      <ModelsDataProvider>
        {(models) => (
          <DealersDataProvider zip={zip}>
            {(dealers) => (
              <PageDataProvider>
                {(pageData) => (
                  <InventoryProvider pageData={pageData} models={models} dealers={dealers}>
                    {children}
                  </InventoryProvider>
                )}
              </PageDataProvider>
            )}
          </DealersDataProvider>
        )}
      </ModelsDataProvider>
    )}
  </ZipDataProvider>
)

export default InventoryContainer