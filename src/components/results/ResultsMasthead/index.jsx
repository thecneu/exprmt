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
    const { currentModel, filteredCarsCount, aorDealer } = this.props

    return (
      <section className="vw__results-masthead">
        <div className="top-bar">{console.log('results-masthead render')}</div>
        <div className="container">
          <div className="content-container">
            <div className="info-content">
              <h1 className="h5-light headline">Great, let’s get you into a {currentModel.name}.</h1>
              <p className="info">
                <span className="h9-light">
                  {filteredCarsCount.exact !== undefined  && <>There are <strong className="h9">{filteredCarsCount.exact} exact matches</strong> and <strong className="h9">{filteredCarsCount.close} close matches</strong></>}
                  {filteredCarsCount.exact === undefined && <>There are <strong className="h9">{filteredCarsCount.total} matches</strong></>}
                  {' '}
                  for {currentModel.name} at <strong className="h9 label-dealer">{aorDealer.name}</strong>
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
