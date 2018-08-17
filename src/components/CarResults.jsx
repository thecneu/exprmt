import React from 'react'
import { Inventory } from 'controllers/Inventory'
import Card from './Card'

const CarResults = ({ type }) => (
  <div className="vw__car-results">
    <div className="flex-container">
      <Inventory.Consumer>
        {({ filteredCars, max }) => filteredCars.slice(0, max).map(car => <Card car={car} key={car.vin} type={type} />)}
      </Inventory.Consumer>
    </div>
  </div>
)

export default CarResults