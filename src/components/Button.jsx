import React from 'react'
import cx from 'classnames'

const Button = ({ inverted = false, full = true, children }) => (
  <div className={cx('vw__button', {'btn-inverted': inverted}, {'btn-full': full})}>
    {children}
  </div>
)

export default Button