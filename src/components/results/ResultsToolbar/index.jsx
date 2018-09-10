import React from 'react';
import FilterButton from 'components/filter/FilterButton';
import FilterList from 'components/filter/FilterList';
import ModelsDropdown from 'components/models/ModelsDropdown';
import ResultsViewTypes from 'components/results/ResultsViewTypes';
import './results-toolbar.scss';

const ResultsToolbar = ({ changeType, type }) => (
  <div className="vw__results-toolbar">
    {console.log('ResultsToolbar render')}
    <div className="grid-container">
      <div className="filter-area">
        <ModelsDropdown />
      </div>

      <div className="results-area">
        <div className="filter-list-area">
          <FilterButton />
          <FilterList />
        </div>

        <ResultsViewTypes changeType={changeType} type={type} />
      </div>
    </div>
  </div>
);

export default ResultsToolbar;
