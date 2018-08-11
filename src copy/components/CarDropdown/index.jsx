import React, { Component } from 'react'

class CarDropdown extends Component {
  onChange = (e) => {
    this.props.changeState('chosenModel', e.currentTarget.value)
  }

  render() {
    const { models, chosenModel } = this.props

    return (
      <select onChange={this.onChange} value={chosenModel}>
        {models.map(model => <option key={model} value={model}>{model}</option>)}
      </select>
    )
  }
}

export default CarDropdown