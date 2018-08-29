import React, { Component } from 'react'
import { InventoryContext } from 'containers/Inventory'
import FilterButton from 'components/filter/FilterButton'
import ModelsDropdown from 'components/common/ModelsDropdown'
import ToTop from 'components/common/ToTop'
import ZipInput from 'components/common/ZipInput'

class ResultsMasthead extends Component {
  renderMatches(matches, type = '') {
    return <b>{'15'} {`${type} matche${15 > 1 ? 's' : ''}`}</b>
  }

  renderDealer() {
    return (
      <nobr>
        <b className="dealer">{'VOLKSWAGEN OF SANTA MONICA'}</b>
      </nobr>
    )
  }

  render() {
    return (
      <section className="vw__models-masthead">
        <div className="top-bar"></div>
        <div className="container">
          <div className="content-container">
            <div className="info-content">
              <h1 className="h5-light headline">Great, let’s get you into a {'Tiguan'}.</h1>
              <p className="info">
                {false ? (
                  <span className="h9">
                    There are {this.renderMatches(15)} for Tiguan at {this.renderDealer()}
                  </span>
                ) : (
                  <span className="h9">
                    There is {this.renderMatches(15, 'exact')} and {this.renderMatches(4, 'close')} for Tiguan at {this.renderDealer()}
                  </span>
                )}
              </p>
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
                <ToTop />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

// const ResultsMasthead = () => (
//   <InventoryContext.Consumer>
//     {(props) => <ResultsMasthead {...props} />}
//   </InventoryContext.Consumer>
// )

export default ResultsMasthead