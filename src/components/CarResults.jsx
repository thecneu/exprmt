import React from 'react'
import { Inventory } from 'controllers/Inventory'
import CardCarDetail from './CardCarDetail'
import Button from './Button'
import './car-results.scss';

const CarResults = ({ type }) => (
  <Inventory.Consumer>
    {({ filteredCars, filters }) => {
      console.log(filteredCars)
      const cars = Object.keys(filters).length > 0 ? filteredCars.filter(car => car.isMatched === 'close' || car.isMatched === 'exact') : filteredCars
      return (
        <div className="vw__car-results">
          <div className="grid-container">
            {cars.map(car =>
              <div key={car.vin} className={`grid-item ${type === 'list' ? 'is-list' : ''}`}>
                <CardCarDetail car={car} type={type} />
              </div>
            )}
          </div>
        </div>
      )}
    }
  </Inventory.Consumer>
)

export default CarResults
