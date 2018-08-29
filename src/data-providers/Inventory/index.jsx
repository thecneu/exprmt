import React, { Component } from 'react'

class InventoryDataProvider extends Component {
  render() {
    return this.props.children()
  }
}

export default InventoryDataProvider