import React from 'react'
import { Inventory } from 'controllers/Inventory'
import CardCarDetail from './CardCarDetail'
import Button from './Button'
import './car-results.scss';

const CarResults = ({ type }) => (
  <Inventory.Consumer>
    {({ filteredCars, max, changeMax }) => (
      <div className="vw__car-results">
        <div className="grid-container">
          {filteredCars.slice(0, max).map(car =>
            <div className={`grid-item ${type === 'list' ? 'is-list' : ''}`}>
              <CardCarDetail car={car} key={car.vin} type={type} />
            </div>
          )}
        </div>

        <div className="view-more">
          <Button full onClick={changeMax}>View More</Button>
        </div>
      </div>
    )}
  </Inventory.Consumer>
)

export default CarResults
