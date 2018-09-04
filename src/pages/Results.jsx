import React from 'react'
import InventoryProvider from 'controllers/Inventory'
import ResultsMasthead from 'components/results/ResultsMasthead'
import ResultsWrapper from 'components/results/ResultsWrapper'

const Results = ({ match, history }) => (
  <main>
    <InventoryProvider params={match.params} history={history}>
      <ResultsMasthead />
      <ResultsWrapper />
    </InventoryProvider>
  </main>
)

export default Results
