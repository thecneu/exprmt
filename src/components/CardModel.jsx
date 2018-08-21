import React from 'react'
import kebabCase from 'lodash/kebabCase'
import { Link } from 'react-router-dom'
import './card-model.scss'

const CardModel = ({ model: car }) => (
  <div className="vw__card-model">
    <Link to={`/results/${kebabCase(car.model)}`}>
      <div className="car-model">
        <img src={`//www.vw.com/content/dam/vwcom/allModels/images/backdrop/${kebabCase(car.model)}.png`} alt={car.model} />
      </div>

      <div className="car-image">
        <img src={car.mediaImageUrl} alt={car.mediaImageUrlAlt} />
      </div>

      <div className="price">
        <span>{car.msrpFormatted}</span>
      </div>
    </Link>
  </div>
)

export default CardModel
