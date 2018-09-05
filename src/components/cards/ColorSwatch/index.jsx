import React from 'react'
import './color-swatch.scss'

const ColorSwatch = ({ exteriorColorBaseColor, interiorColorBaseColor }) => (
  <div className="vw__color-swatch">{exteriorColorBaseColor}{interiorColorBaseColor}</div>
)

export default ColorSwatch