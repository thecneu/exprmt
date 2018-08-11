import React, { Component } from 'react'
import { MainContent } from 'ui'
import Navigation from 'containers/core/Navigation'
import InventoryProvider from 'controllers/Inventory'
import FilterHeader from 'containers/filter/Header'
import Inventory from 'containers/inventory/Inventory'

class CarsPage extends Component {
  render() {
    return (
      <main>
        <Navigation />
        <InventoryProvider>
          <MainContent>
            <FilterHeader />
            <Inventory />
          </MainContent>
        </InventoryProvider>
      </main>
    )
  }
}

export default CarsPage
