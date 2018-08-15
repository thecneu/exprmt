import React from 'react'

const CardList = ({ car }) => (
  <div className="vw__card-list">
    <div className="car-info">
      <CarInfo car={car} />
    </div>

    <div className="car-detail">
      <CarDetail car={car} />
    </div>
  </div>
)

export default CardList