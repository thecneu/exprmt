import React from 'react'
import InventoryContainer from 'containers/Inventory'
import ResultsMasthead from 'components/results/ResultsMasthead'
import ResultsWrapper from 'components/results/ResultsWrapper'

const Results = ({ match, history }) => (
  <main>
    <InventoryContainer key={match.params.model} params={match.params} router={history}>
      <ResultsMasthead />
      <ResultsWrapper />
    </InventoryContainer>
  </main>
)

export default Results