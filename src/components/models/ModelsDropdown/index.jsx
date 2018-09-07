import React, { Component } from 'react'
import { InventoryContext } from 'controllers/Inventory'

const ModelsDropdown = () => (
  <InventoryContext.Consumer>
    {({ currentModel, models, onModelChange }) => (
      <div className="vw__models-dropdown">
        <select value={currentModel.slug} onChange={(e) => onModelChange(e.currentTarget.value)} onBlur={(e) => onModelChange(e.currentTarget.value)}>
          {models.map(model => (
            <option key={model.slug} value={model.slug}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
    )}
  </InventoryContext.Consumer>
)
/*
class Dropdown extends Component {
  state = { expanded: false }

  render() {
    <div className="vw__models-dropdown">
      <div className="chosen" onClick={this.toggleExpanded}>
        {currentModel.name}
      </div>
      <div className="options">
        {models.map(model => (
          <div className="option" key={model.slug} onClick={() => this.onChange(model.slug)}>
            {model.name}
          </div>
        ))}
      </div>
    </div>
  }
}
*/

export default ModelsDropdown
