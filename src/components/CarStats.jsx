import React from 'react'
import './car-stats.scss'

const findHp = (hp) => hp.split(',').reduce(
  (next, s) => s.includes('HP') ? s.replace('HP', '').trim() : next
, '')

const CarStats = ({ city, highway, hp }) => (
  <div className="vw__car-stats">
    <ul>
      <li>
        <div className="stat-container">
          <div>{city}</div>
          <div>City</div>
        </div>
      </li>
      <li>
        <div className="stat-container">
          <div>{highway}</div>
          <div>Hwy</div>
        </div>
      </li>
      <li>
        <div className="stat-container">
          <div>{findHp(hp)}</div>
          <div>hp</div>
        </div>
      </li>
    </ul>
  </div>
)

export default CarStats