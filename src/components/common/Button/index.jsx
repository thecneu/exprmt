import React from 'react'
import cx from 'classnames'

const Button = ({ inverted = false, full = true, children, ...props }) => (
  <button {...props} className={cx('vw__button', {'btn-inverted': inverted}, {'btn-full': full})}>
    {children}
  </button>
)

export default Button
