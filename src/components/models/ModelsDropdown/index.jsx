import React from 'react'
import { InventoryContext } from 'controllers/Inventory'

const ModelsDropdown = () => (
  <InventoryContext.Consumer>
    {({ currentModel, models, onModelChange }) => (
      <div className="vw__models-dropdown">
        <select value={currentModel.slug} onChange={(e) => onModelChange(e.currentTarget.value)}>
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

export default ModelsDropdown
