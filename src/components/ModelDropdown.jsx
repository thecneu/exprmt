import React, { Component } from 'react'
import { Inventory } from 'controllers/Inventory'

class Dropdown extends Component {
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

const ModelDropdown = () => (
  <div className="vw__model-dropdown-container">
    <div className="vw__model-dropdown">
      <Inventory.Consumer>
        {({ models, chosenModel, changeState }) => (
          <Dropdown chosenModel={chosenModel} models={models} changeState={changeState} />
        )}
      </Inventory.Consumer>
    </div>
  </div>
)

export default ModelDropdown
