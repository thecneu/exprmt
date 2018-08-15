import React from 'react'

const CardGrid = ({ car }) => (
  <div className="vw__card-grid">
    <LabelMatch />
    <FavoriteButton />
    <CarInfo />
  </div>
)

export default CardGrid