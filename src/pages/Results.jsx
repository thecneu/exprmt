import React from 'react'
import InventoryProvider from 'controllers/Inventory'
import HeaderMasthead from 'components/HeaderMasthead'
import ResultsWrapper from 'components/ResultsWrapper'

const Results = ({ match: { params } }) => (
  <main>
    <InventoryProvider model={params.model} >
      <HeaderMasthead results={true} />
      <ResultsWrapper />
    </InventoryProvider>
  </main>
)

export default Results
