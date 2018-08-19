import React from 'react'
import LabelMatch from './LabelMatch'
import FavoriteButton from './FavoriteButton'
import CarInfo from './CarInfo'
import './card-grid.scss'

const CardGrid = ({ car }) => (
  <div className="vw__card-grid">
    <LabelMatch />
    <FavoriteButton />
    <CarInfo car={car} />
  </div>
)

export default CardGrid
