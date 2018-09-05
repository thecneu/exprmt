import React, { Component } from 'react'
import cx from 'classnames'
import { InventoryContext } from 'controllers/Inventory'
import CardCarDetail from 'components/cards/CarDetail'
import './car-results.scss'

class CarResults extends Component {
  state = { showNearbyCars: false }

  render() {
    const { type } = this.props
    const { showNearbyCars } = this.state

    return (
      <InventoryContext.Consumer>
        {({ filteredCars, nearbyFilteredCars, filterList }) => (
          <div className="vw__car-results">
            <div className="grid-container">
              {filteredCars.map(car =>
                <div key={car.vin} className={cx('grid-item', { 'is-list' : type === 'list' })}>
                  <CardCarDetail car={car} type={type} showMatchLabel={filterList.length > 0} />
                </div>
              )}
            </div>
            {nearbyFilteredCars.length > 0 && <button>Show nearby cars</button>}
            {showNearbyCars && (
              <div className="grid-container">
                {nearbyFilteredCars.map(car =>
                  <div key={car.vin} className={cx('grid-item', { 'is-list' : type === 'list' })}>
                    <CardCarDetail car={car} type={type} showMatchLabel={true} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </InventoryContext.Consumer>
    )
  }
}

export default CarResults