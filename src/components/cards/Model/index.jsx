import React from 'react'
import { Link } from 'react-router-dom'
import './card-model.scss'

const CardModel = ({ model: { name, slug, price, textImage, carImage }}) => (
  <div className="vw__card-model">
    <Link to={`/results/${slug}`}>
      <div className="car-text">
        <img src={textImage} alt={name} />
      </div>

      <div className="car-image">
        <img src={carImage} alt={name} />
      </div>

      <div><span className="label-1">{price}</span></div>
    </Link>
  </div>
)

export default CardModel
