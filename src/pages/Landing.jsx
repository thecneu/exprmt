import React from 'react'
import InventoryProvider from 'controllers/Inventory'
import ModelsWrapper from 'components/ModelsWrapper'
import ModelsMasthead from 'components/ModelsMasthead'

const Landing = () => (
  <main>
    <InventoryProvider>
      <ModelsMasthead />
      <ModelsWrapper />
    </InventoryProvider>
  </main>
)

export default Landing
