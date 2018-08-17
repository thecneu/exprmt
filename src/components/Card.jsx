import React from 'react'
import CardGrid from './CardGrid'
import CardList from './CardList'
import CardModel from './CardModel'

const Card = ({ car, type }) => {
  switch(type) {
    case 'grid':
      return <CardGrid car={car} />
    case 'list':
      return <CardList car={car} />
    default:
      return <CardModel car={car} />
  }
}

export default Card