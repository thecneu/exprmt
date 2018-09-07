import React from 'react'
import styles from './color-box.module.scss'

const ColorBox = ({ color: backgroundColor, isSwatch }) => (
  <div className={[styles.box, styles.swatch].join(' ')} style={{ backgroundColor }} />
)

export default ColorBox
