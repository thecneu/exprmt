import React from 'react'
import InventoryProvider from 'controllers/Inventory'
import ResultsMasthead from 'components/results/ResultsMasthead'
import ResultsWrapper from 'components/results/ResultsWrapper'

const Results = ({ match, history }) => (
  <main>
  {console.log('Results render')}
    <InventoryProvider params={match.params} history={history}>
      {console.log('Results InventoryProvider render')}
      <ResultsMasthead />
      <ResultsWrapper />
    </InventoryProvider>
  </main>
)

export default Results
