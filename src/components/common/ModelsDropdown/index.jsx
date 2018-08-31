import React from 'react'

const ModelsDropdown = ({ models = [], selected, onChange }) => (
  <div className="vw__model-dropdown">
    <select value={selected} onChange={(e) => onChange(e.currentTarget.value)}>
      {models.map(model => (
        <option key={model.slug} value={model.slug}>
          {model.name}
        </option>
      ))}
    </select>
  </div>
)

export default ModelsDropdown