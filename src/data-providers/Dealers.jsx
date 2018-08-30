import React, { Component } from 'react'
import dealersJson from 'data/dealers.json'

// API Functions //

class DealersDataProvider extends Component {
  state = {
    dealers: dealersJson.dealers,
    aorDealer: dealersJson.dealers.find(dealer => dealer.aor),
  }

  getCarsByAORDealer() {

  }

  getCarsNearby() {

  }

  componentDidMount() {
    console.log('grabbing cars for', this.props.currentModel.name)
  }

  render() {
    return this.props.children()
  }
}

export default DealersDataProvider