import React from 'react'

const CardCarDetail = ({ type }) => (
  <div className={`vw__card-cardetail ${type === 'list' ? 'is-list' : ''}`}>{type}</div>
)

export default CardCarDetail