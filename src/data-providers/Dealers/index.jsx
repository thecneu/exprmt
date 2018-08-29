import React, { Component } from 'react'
import dealersJson from 'data/dealers.json'

class DealersDataProvider extends Component {
  state = {
    dealers: dealersJson.dealers,
    aorDealer: dealersJson.dealers.find(dealer => dealer.aor),
  }

  getCarsByAORDealer() {

  }

  getCarsNearby() {

  }

  render() {
    return this.props.children()
  }
}

export default DealersDataProvider