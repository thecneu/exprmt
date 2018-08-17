import React, { Component } from 'react'
import ResultsToolbar from 'components/ResultsToolbar'
import FilterSidebar from 'components/FilterSidebar'
import CarResults from 'components/CarResults'

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