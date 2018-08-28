import React from 'react'
import cx from 'classnames'

const Button = ({ inverted = false, full = true, children, ...props }) => {
  const className = cx('vw__button', {'btn-inverted': inverted}, {'btn-full': full})
  return (
    <button {...props} className={className}>
      {children}
    </button>
  )
}

export default Button
