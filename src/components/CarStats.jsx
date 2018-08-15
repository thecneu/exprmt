import React from 'react'

const findHp = (hp) => hp.split(',').reduce(
  (next, s) => s.includes('HP') ? s.replace('HP', '').trim() : next
, '')

const CarStats = () => (
  <div className="car-stats">
    <ul>
      <li>
        <div>{city}</div>
        <div>City</div>
      </li>
      <li>
        <div>{highway}</div>
        <div>Hwy</div>
      </li>
      <li>
        <div>{findHp(hp)}</div>
        <div>hp</div>
      </li>
    </ul>
  </div>
)

export default CarStats