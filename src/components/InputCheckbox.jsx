import React from 'react'
import DisplayHtml from './DisplayHtml'

const InputCheckbox = ({ checked = false, onChange, label, className = '', children }) => (
  <label className={className}>
    <input type="checkbox" checked={checked} value={label} onChange={onChange} />
    {children}
    <DisplayHtml>{label}</DisplayHtml>
  </label>
)

export default InputCheckbox