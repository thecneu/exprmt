import React from 'react';
import './car-stats.scss';

const findHp = (hp) =>
  hp
    .split(',')
    .reduce((next, s) => (s.includes('HP') ? s.replace('HP', '').trim() : next), '');

const CarStats = ({ city, highway, hp }) => (
  <div className="vw__car-stats">
    <ul>
      <li>
        <div className="stat-container">
          <div className="text-stat">{city}</div>
          <div className="text-stat-label">City</div>
        </div>
      </li>

      <li>
        <div className="stat-container">
          <div className="text-stat">{highway}</div>
          <div className="text-stat-label">Hwy</div>
        </div>
      </li>

      <li>
        <div className="stat-container">
          <div className="text-stat">{findHp(hp)}</div>
          <div className="text-stat-label">hp</div>
        </div>
      </li>
    </ul>
  </div>
);

export default CarStats;
