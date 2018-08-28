import React from 'react'
import InventoryProvider from 'controllers/Inventory'
import ResultsMasthead from 'components/ResultsMasthead'
import ResultsWrapper from 'components/ResultsWrapper'

const Results = ({ match: { params } }) => (
  <main>
    <InventoryProvider model={params.model} >
      <ResultsMasthead />
      <ResultsWrapper />
    </InventoryProvider>
  </main>
)

export default Results
