import React from 'react'
import DisplayHtml from 'components/common/DisplayHtml'

const InputCheckbox = ({ checked = false, onChange, label, children }) => (
  <label>
    <input type="checkbox" checked={checked} value={label} onChange={onChange} />
    {children}
    <DisplayHtml>{label}</DisplayHtml>
  </label>
)

export default InputCheckbox
