import React from 'react'
import cx from 'classnames'
import './color-box.scss'

const ColorBox = ({ color: backgroundColor, isSwatch }) => (
  <div className={cx('vw__color-box', { swatch: isSwatch })} style={{ backgroundColor }} />
)

export default ColorBox
