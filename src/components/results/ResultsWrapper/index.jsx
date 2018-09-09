import React, { Component } from 'react';
import ResultsToolbar from 'components/results/ResultsToolbar';
import CarResults from 'components/results/CarResults';
import FilterSidebar from 'components/filter/FilterSidebar';
import './results-container.scss';

class ResultsWrapper extends Component {
  state = { type: 'list' }

  changeType = (type) => {
    console.log('--- change type ---');
    this.setState({ type });
  }

  render() {
    const { type } = this.state;

    return (
      <div className="vw__results-container">
        {console.log('ResultsWrapper render', this.props)}
        <div className="container">
          <ResultsToolbar type={type} changeType={this.changeType} />

          <div className="vw__car-results-container">
            <div className="grid-item side-container">
              <FilterSidebar />
            </div>

            <div className="grid-item results-container">
              <CarResults type={type} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResultsWrapper;
