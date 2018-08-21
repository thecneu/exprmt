import React from 'react'
import CardGrid from './CardGrid'
import CardList from './CardList'
import CardModel from './CardModel'

const chooseCard = (type, car) => {
  switch(type) {
    case 'grid':
      return <CardGrid car={car} />
    case 'list':
      return <CardList car={car} />
    default:
      return <CardModel car={car} />
  }
}

const Card = ({ type, car }) => (
  <div className={type === 'list' ? 'list-item' : 'grid-item'}>
    {chooseCard(type, car)}
  </div>
)

export default Card
