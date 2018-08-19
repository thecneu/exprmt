import React from 'react'
import InventoryProvider from 'controllers/Inventory'
import ModelsWrapper from 'components/ModelsWrapper'
import HeaderMasthead from 'components/HeaderMasthead'

const Landing = () => (
  <main>
    <InventoryProvider>
      <HeaderMasthead />
      <ModelsWrapper />
    </InventoryProvider>
  </main>
)

export default Landing
