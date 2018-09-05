import React, { Component } from 'react'
import ResultsToolbar from 'components/results/ResultsToolbar'
import CarResults from 'components/results/CarResults'
import FilterSidebar from 'components/filter/FilterSidebar'
import './results-container.scss'

class ResultsWrapper extends Component {
  state = { type: 'list' }

  changeType = (type) => this.setState({ type })

  render() {
    const { type } = this.state

    return (
      <div className="vw__results-container">
        <div className="container">
          <ResultsToolbar type={type} changeType={this.changeType} />

          <div className="vw__car-results-container">
            <FilterSidebar />
            <CarResults type={type} />
          </div>
        </div>
      </div>
    )
  }
}

export default ResultsWrapper
