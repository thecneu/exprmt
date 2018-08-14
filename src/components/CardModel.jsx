import React from 'react'

const CardModel = ({ car }) => (
  <div className="vw__card-model">
    <div className="car-image">
      <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
    </div>

    <div className="price">
      <span>{car.msrpFormatted}</span>
    </div>
  </div>
)

export default CardModel