import React, { Component } from 'react'
import dealersJson from 'data/dealers.json'

class DealersDataProvider extends Component {
  state = {
    dealers: dealersJson.dealers
  }

  render() {
    return this.props.children(this.state.dealers)
  }
}

export default DealersDataProvider