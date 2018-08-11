import React, { Component } from 'react'
import CardGrid from 'components/Card/Grid'
import CardList from 'components/Card/List'
import CardModel from 'components/Card/Model'

class Card extends Component {
  render() {
    const { car, view } = this.props

    switch(view) {
      case 'grid':
        return <CardGrid car={car} />
      case 'list':
        return <CardList car={car} />
      default:
        return <CardModel car={car} />
    }
  }
}

export default Card