import React from 'react'
import ResultsToolbar from 'components/results/ResultsToolbar'
import CarResults from 'components/results/CarResults'
import FilterSidebar from 'components/filter/FilterSidebar'

const ResultsWrapper = (props) => (
  <div className="vw__results-container">
    <div className="container">
      <ResultsToolbar />

      <div className="vw__car-results-container">
        <FilterSidebar />
        <CarResults />
      </div>
    </div>
  </div>
)

export default ResultsWrapper