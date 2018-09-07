import React from 'react'
import ColorBox from 'components/filter/ColorBox'
import './color-swatch.scss'

const ColorSwatch = ({ exteriorColorBaseColor, interiorColorBaseColor }) => (
  <div className="vw__color-swatch">
    <ColorBox color={exteriorColorBaseColor} />
    <ColorBox color={interiorColorBaseColor} />
  </div>
)

export default ColorSwatch
