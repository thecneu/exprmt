import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card-model.module.scss'

const CardModel = ({ model: { name, slug, price, textImage, carImage }}) => (
  <div className={styles.model}>
    <Link to={`/results/${slug}`}>
      <div className={styles.image}>
        <img src={textImage} alt={name} />
      </div>

      <div className={styles.car}>
        <img src={carImage} alt={name} />
      </div>

      <div><span className="label-1">{price}</span></div>
    </Link>
  </div>
)

export default CardModel
