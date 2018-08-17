import React from 'react'

const InputCheckbox = ({ checked = false, onChange, label, className = '', children }) => (
  <label className={className}>
    <input type="checkbox" checked={checked} value={label} onChange={onChange} />
    {children}
    <span>{label}</span>
  </label>
)

export default InputCheckbox