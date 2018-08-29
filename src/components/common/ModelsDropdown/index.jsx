import React from 'react'

const ModelsDropdown = ({ models = [], selected }) => (
  <div className="vw__model-dropdown">
    <select>
      {models.map(model => (
        <option key={model.slug} value={model.slug} selected={selected === model.slug}>
          {model.name}
        </option>
      ))}
    </select>
  </div>
)

export default ModelsDropdown