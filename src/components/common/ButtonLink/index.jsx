import React from 'react'
import cx from 'classnames'

const ButtonLink = ({ url = '/', inverted = false, full = true, children, ...props }) => (
  <a href={url} {...props} className={cx('vw__button', {'btn-inverted': inverted}, {'btn-full': full})}>
    {children}
  </a>
)

export default ButtonLink
