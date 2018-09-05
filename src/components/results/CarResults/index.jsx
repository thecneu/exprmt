import React from 'react'
import cx from 'classnames'
import './car-results.scss'

const CarResults = ({ cars = [], type = 'grid' }) => (
  <div className="vw__car-results">
    <div className="grid-container">
      {cars.map(car =>
        <div key={car.vin} className={cx('grid-item', { 'is-list' : type === 'list' })}>
          {/*<CardCarDetail car={car} type={type} />*/}
        </div>
      )}
    </div>
  </div>
)

export default CarResults
