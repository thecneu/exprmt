import React from 'react'

const Swatch = ({ exteriorColorBaseColor, interiorColorBaseColor }) => (
  <div className="swatch">{exteriorColorBaseColor}{interiorColorBaseColor}</div>
)

export default Swatch