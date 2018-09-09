import React, { Component } from 'react'
import cx from 'classnames'
import { InventoryContext } from 'controllers/Inventory'
import CardCarDetail from 'components/cards/CarDetail'
import './car-results.scss'

class CarResults extends Component {
  state = { showNearbyCars: false }

  showNearbyCars = () => this.setState({ showNearbyCars: true })

  render() {
    const { type } = this.props
    const { showNearbyCars } = this.state

    return (
      <InventoryContext.Consumer>
        {({ filteredCars, nearbyFilteredCars, appliedFilters }) => (
          <div className="vw__car-results">
            {console.log('carresults render', this.props)}
            {console.log('filteredCars', filteredCars.length)}
            <div className="grid-container">
              {filteredCars.map(car =>
                <div key={car.vin} className={cx('grid-item', { 'is-list' : type === 'list' })}>
                  <CardCarDetail car={car} type={type} showMatchLabel={appliedFilters.length > 0} />
                </div>
              )}
            </div>

            {nearbyFilteredCars.length > 0
              && !showNearbyCars
              && <button onClick={this.showNearbyCars}>See exact matches nearby</button>}

            {showNearbyCars && (
              <section className="nearby-container">
                <h3>Exact Matches Nearby</h3>
                <div className="grid-container">
                  {nearbyFilteredCars.map(car =>
                    <div key={car.vin} className={cx('grid-item', { 'is-list' : type === 'list' })}>
                      <CardCarDetail car={car} type={type} showMatchLabel={true} />
                    </div>
                  )}
                </div>
              </section>
            )}

          </div>
        )}
      </InventoryContext.Consumer>
    )
  }
}

export default CarResults
