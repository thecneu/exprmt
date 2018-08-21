import React from 'react'
import { Inventory } from 'controllers/Inventory'
import Card from './Card'
import Button from './Button'

const CarResults = ({ type }) => (
  <Inventory.Consumer>
    {({ filteredCars, max, changeMax }) => (
      <div className="vw__car-results">
        <div className="grid-container">
          {filteredCars.slice(0, max).map(car =>
            <Card car={car} key={car.vin} type={type} />
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
