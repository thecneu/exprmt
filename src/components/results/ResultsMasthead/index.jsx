import React, { Component } from 'react'
import { InventoryContext } from 'controllers/Inventory'
import FilterButton from 'components/filter/FilterButton'
import FilterList from 'components/filter/FilterList'
import ModelsDropdown from 'components/models/ModelsDropdown'
import ButtonToTop from 'components/common/ButtonToTop'
import ZipInput from 'components/common/ZipInput'
import './masthead.scss'

class Masthead extends Component {
  render() {
    const { currentModel, filteredCars, appliedFilters, aorDealer } = this.props

    return (
      <section className="vw__results-masthead">
        <div className="top-bar">{console.log('results-masthead render')}</div>
        <div className="container">
          <div className="content-container">
            <div className="info-content">
              <h1 className="h5-light headline">Great, let’s get you into a {currentModel.name}.</h1>
              <p className="info">
                <span className="h9-light">
                  There are <span className="h9">{filteredCars.length}</span> for {currentModel.name} at
                  {' '}
                  <span className="h9 label-dealer">{aorDealer.name}</span>
                </span>
              </p>

              <div className="filter-list-container">
                <FilterList />
              </div>
            </div>

            <div className="actions-content">
              <div className="models-container">
                <ModelsDropdown />
              </div>

              <div className="zip-container">
                <ZipInput />
              </div>

              <div className="button-container">
                <FilterButton />
              </div>

              <div className="totop-container">
                <ButtonToTop />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

const ResultsMasthead = () => (
  <InventoryContext.Consumer>
    {(props) => <Masthead {...props} />}
  </InventoryContext.Consumer>
)

export default ResultsMasthead
