import React from 'react'
import styles from './color-box.module.scss'

const ColorBox = ({ color: backgroundColor }) => (
  <div className={styles.box} style={{ backgroundColor }} />
)

export default ColorBox