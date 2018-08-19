import React from 'react'
import CardGrid from './CardGrid'
import CardList from './CardList'
import CardModel from './CardModel'

const Card = ({ car, type }) => {
  switch(type) {
    case 'grid':
      return (
        <div className="grid-item">
          <CardGrid car={car} />
        </div>
      )
    case 'list':
      return <CardList car={car} />
    default:
      return (
        <div className="model-item">
          <CardModel car={car} />
        </div>
      )
  }
}

export default Card
