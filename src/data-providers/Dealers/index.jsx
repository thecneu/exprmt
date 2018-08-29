import React, { Component } from 'react'

class DealersDataProvider extends Component {
  render() {
    return this.props.children()
  }
}

export default DealersDataProvider