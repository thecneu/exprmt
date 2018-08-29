import React from 'react'
import InventoryProvider from 'containers/Inventory'
import ResultsMasthead from 'components/results/ResultsMasthead'
import ResultsWrapper from 'components/results/ResultsWrapper'

const Results = ({ match }) => (
  <main>
    {console.log(match)}
    <InventoryProvider>
      <ResultsMasthead />
      <ResultsWrapper />
    </InventoryProvider>
  </main>
)

export default Results