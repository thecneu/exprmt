import React from 'react'
import ResultsToolbar from 'components/ResultsToolbar'
import FilterSidebar from 'components/FilterSidebar'
import CarResults from 'components/CarResults'

const ResultsContainer = () => (
  <div className="vw__results-container">
    <div className="container">
      <ResultsToolbar />

      <div className="car-container">
        <div className="flex-container">
          <FilterSidebar />
          <CarResults />
        </div>
      </div>
    </div>
  </div>
)

export default ResultsContainer