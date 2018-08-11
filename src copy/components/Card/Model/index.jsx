import React from 'react'

const CardModel = ({ car }) => (
  <div className="vw__card-model">
    <div className="car-image">
      <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
    </div>
    <span className="price">{car.msrpFormatted}</span>
  </div>
)

export default CardModel