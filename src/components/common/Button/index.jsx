import React from 'react'
import cx from 'classnames'

const Button = ({ stroked = false, full = true, children, ...props }) => (
  <button {...props} className={cx('vw__button', { 'btn-stroked': stroked }, { 'btn-full': full })}>
    {children}
  </button>
)

export default Button
